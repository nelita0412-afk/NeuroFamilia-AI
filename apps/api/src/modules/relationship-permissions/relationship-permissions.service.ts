import { ForbiddenException, Injectable } from '@nestjs/common';
import {
  PermissionAction,
  PersonRole,
  RelationshipType,
  type FamilyMember,
  type Person,
} from '@prisma/client';
import { DatabaseService } from '../../database/database.service';

type PersonWithMemberships = Person & {
  families: FamilyMember[];
};

@Injectable()
export class RelationshipPermissionsService {
  constructor(private readonly db: DatabaseService) {}

  async ensureCanReadFamily(accountId: string, familyId: string): Promise<void> {
    await this.ensureFamilyAccess(accountId, familyId, PermissionAction.READ_FAMILY);
  }

  async ensureCanWriteFamily(accountId: string, familyId: string): Promise<void> {
    await this.ensureFamilyAccess(accountId, familyId, PermissionAction.WRITE_FAMILY);
  }

  async ensureCanReadProfile(accountId: string, profileId: string): Promise<void> {
    await this.ensureProfileAccess(accountId, profileId, PermissionAction.READ_PROFILE);
  }

  async ensureCanWriteProfile(accountId: string, profileId: string): Promise<void> {
    await this.ensureProfileAccess(accountId, profileId, PermissionAction.WRITE_PROFILE);
  }

  async ensureCanReadGrowth(accountId: string, profileId: string): Promise<void> {
    await this.ensureProfileAccess(accountId, profileId, PermissionAction.READ_GROWTH);
  }

  async ensureCanWriteGrowth(accountId: string, profileId: string): Promise<void> {
    await this.ensureProfileAccess(accountId, profileId, PermissionAction.WRITE_GROWTH);
  }

  async listReadableFamilyIds(accountId: string): Promise<string[]> {
    const requester = await this.getRequesterByAccountId(accountId);

    if (requester.role === PersonRole.ADMINISTRATOR) {
      const families = await this.db.familyGroup.findMany({ select: { id: true } });
      return families.map((family) => family.id);
    }

    const memberFamilyIds = requester.families
      .filter((membership) => this.canReadByRoleOrRelationship(requester.role, membership.relationship))
      .map((membership) => membership.familyId);

    const grantedFamilyIds = await this.db.permissionGrant.findMany({
      where: {
        subjectPersonId: requester.id,
        action: PermissionAction.READ_FAMILY,
        familyId: { not: null },
        OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
      },
      select: { familyId: true },
    });

    return Array.from(new Set([...memberFamilyIds, ...grantedFamilyIds.map((grant) => grant.familyId as string)]));
  }

  async listReadableProfilesFilter(accountId: string): Promise<{ id: { in: string[] } } | undefined> {
    const requester = await this.getRequesterByAccountId(accountId);

    if (requester.role === PersonRole.ADMINISTRATOR) {
      return undefined;
    }

    const familyIds = await this.listReadableFamilyIds(accountId);
    const grantedProfiles = await this.db.permissionGrant.findMany({
      where: {
        subjectPersonId: requester.id,
        action: PermissionAction.READ_PROFILE,
        profileId: { not: null },
        OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
      },
      select: { profileId: true },
    });

    const directProfiles = await this.db.profile.findMany({
      where: {
        OR: [
          { familyId: { in: familyIds } },
          { personId: requester.id },
          { id: { in: grantedProfiles.map((grant) => grant.profileId as string) } },
        ],
      },
      select: { id: true },
    });

    return { id: { in: directProfiles.map((profile) => profile.id) } };
  }

  // Este metodo centraliza permisos por rol, relacion y grants para poder extender a instituciones
  // o programas sin reescribir los servicios de dominio.
  private async ensureFamilyAccess(
    accountId: string,
    familyId: string,
    action: PermissionAction,
  ): Promise<void> {
    const requester = await this.getRequesterByAccountId(accountId);

    if (requester.role === PersonRole.ADMINISTRATOR) {
      return;
    }

    if (await this.hasGrant(requester.id, familyId, action)) {
      return;
    }

    const membership = requester.families.find((member) => member.familyId === familyId);

    if (!membership) {
      throw new ForbiddenException('No tienes acceso a este expediente familiar.');
    }

    if (action === 'READ_FAMILY') {
      if (this.canReadByRoleOrRelationship(requester.role, membership.relationship)) {
        return;
      }
      throw new ForbiddenException('No tienes permisos de lectura para este expediente familiar.');
    }

    if (this.canWriteByRoleOrRelationship(requester.role, membership.relationship)) {
      return;
    }

    throw new ForbiddenException('No tienes permisos de escritura para este expediente familiar.');
  }

  private async ensureProfileAccess(
    accountId: string,
    profileId: string,
    action: PermissionAction,
  ): Promise<void> {
    const requester = await this.getRequesterByAccountId(accountId);

    if (requester.role === PersonRole.ADMINISTRATOR) {
      return;
    }

    const profile = await this.db.profile.findUnique({
      where: { id: profileId },
      select: { id: true, familyId: true, personId: true },
    });

    if (!profile) {
      throw new ForbiddenException('No tienes acceso a este expediente personal.');
    }

    if (profile.personId === requester.id && action !== PermissionAction.WRITE_GROWTH) {
      return;
    }

    if (await this.hasGrant(requester.id, profileId, action)) {
      return;
    }

    const familyAction = this.toFamilyAction(action);
    await this.ensureFamilyAccess(accountId, profile.familyId, familyAction);
  }

  private async hasGrant(subjectPersonId: string, resourceId: string, action: PermissionAction): Promise<boolean> {
    const grant = await this.db.permissionGrant.findFirst({
      where: {
        subjectPersonId,
        action,
        OR: [{ familyId: resourceId }, { profileId: resourceId }],
        AND: [{ OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }] }],
      },
      select: { id: true },
    });

    return Boolean(grant);
  }

  private async getRequesterByAccountId(accountId: string): Promise<PersonWithMemberships> {
    const requester = await this.db.person.findFirst({
      where: { accountId },
      include: { families: true },
    });

    if (!requester) {
      throw new ForbiddenException('No se pudo resolver la identidad de la persona autenticada.');
    }

    return requester;
  }

  private toFamilyAction(
    action: PermissionAction,
  ): PermissionAction {
    if (action === 'READ_PROFILE' || action === 'READ_GROWTH') {
      return 'READ_FAMILY';
    }

    return 'WRITE_FAMILY';
  }

  private canReadByRoleOrRelationship(role: PersonRole, relationship: RelationshipType): boolean {
    if (role === PersonRole.ADMINISTRATOR) {
      return true;
    }

    const readRoles: PersonRole[] = [
      PersonRole.MOTHER,
      PersonRole.FATHER,
      PersonRole.TUTOR,
      PersonRole.PROFESSIONAL,
    ];

    if (readRoles.includes(role)) {
      return true;
    }

    const readableRelationships: RelationshipType[] = [
      RelationshipType.MOTHER,
      RelationshipType.FATHER,
      RelationshipType.TUTOR,
      RelationshipType.PROFESSIONAL,
      RelationshipType.CHILD,
      RelationshipType.ADOLESCENT,
      RelationshipType.YOUNG,
      RelationshipType.CAREGIVER,
      RelationshipType.SIBLING,
      RelationshipType.OTHER,
    ];

    return readableRelationships.includes(relationship);
  }

  private canWriteByRoleOrRelationship(role: PersonRole, relationship: RelationshipType): boolean {
    if (role === PersonRole.ADMINISTRATOR) {
      return true;
    }

    const writeRoles: PersonRole[] = [PersonRole.MOTHER, PersonRole.FATHER, PersonRole.TUTOR];

    if (writeRoles.includes(role)) {
      return true;
    }

    const writableRelationships: RelationshipType[] = [
      RelationshipType.MOTHER,
      RelationshipType.FATHER,
      RelationshipType.TUTOR,
    ];

    return writableRelationships.includes(relationship);
  }
}