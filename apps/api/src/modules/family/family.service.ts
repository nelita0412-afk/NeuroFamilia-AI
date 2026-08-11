import { Injectable, NotFoundException } from '@nestjs/common';
import { RelationshipType } from '@prisma/client';
import { DatabaseService } from '../../database/database.service';
import { AddFamilyMemberDto } from './dto/add-family-member.dto';
import { CreateFamilyDto } from './dto/create-family.dto';
import { RelationshipPermissionsService } from '../relationship-permissions/relationship-permissions.service';

@Injectable()
export class FamilyService {
  constructor(
    private readonly db: DatabaseService,
    private readonly relationshipPermissionsService: RelationshipPermissionsService,
  ) {}

  async createFamily(accountId: string, dto: CreateFamilyDto) {
    const requester = await this.db.person.findFirst({ where: { accountId } });

    if (!requester) {
      throw new NotFoundException('Persona autenticada no encontrada.');
    }

    return this.db.familyGroup.create({
      data: {
        name: dto.name,
        members: {
          create: {
            personId: requester.id,
            relationship: RelationshipType.TUTOR,
          },
        },
      },
      include: {
        members: {
          include: {
            person: true,
          },
        },
      },
    });
  }

  async findAllFamilies(accountId: string) {
    const allowedFamilyIds = await this.relationshipPermissionsService.listReadableFamilyIds(accountId);

    return this.db.familyGroup.findMany({
      where: {
        id: {
          in: allowedFamilyIds,
        },
      },
      include: {
        members: {
          include: {
            person: true,
          },
        },
      },
    });
  }

  async addMember(accountId: string, id: string, dto: AddFamilyMemberDto) {
    await this.relationshipPermissionsService.ensureCanWriteFamily(accountId, id);

    const family = await this.db.familyGroup.findUnique({
      where: { id },
    });

    if (!family) {
      throw new NotFoundException('Familia no encontrada.');
    }

    const person = await this.db.person.findUnique({
      where: { id: dto.personId },
    });

    if (!person) {
      throw new NotFoundException('Persona no encontrada.');
    }

    return this.db.familyMember.create({
      data: {
        familyId: id,
        personId: dto.personId,
        relationship: dto.relationship,
      },
      include: {
        person: true,
      },
    });
  }
}
