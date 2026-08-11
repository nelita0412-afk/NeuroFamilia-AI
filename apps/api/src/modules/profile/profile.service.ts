import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { RelationshipPermissionsService } from '../relationship-permissions/relationship-permissions.service';

@Injectable()
export class ProfileService {
  constructor(
    private readonly db: DatabaseService,
    private readonly relationshipPermissionsService: RelationshipPermissionsService,
  ) {}

  async createProfile(accountId: string, dto: CreateProfileDto) {
    await this.relationshipPermissionsService.ensureCanWriteFamily(accountId, dto.familyId);

    return this.db.profile.create({
      data: {
        familyId: dto.familyId,
        personId: dto.personId,
        fullName: dto.fullName,
        birthDate: new Date(dto.birthDate),
        developmentStage: dto.developmentStage,
      },
    });
  }

  async findAllProfiles(accountId: string) {
    const where = await this.relationshipPermissionsService.listReadableProfilesFilter(accountId);

    return this.db.profile.findMany({ where });
  }

  async findProfileById(accountId: string, id: string) {
    await this.relationshipPermissionsService.ensureCanReadProfile(accountId, id);

    const profile = await this.db.profile.findUnique({
      where: { id },
    });

    if (!profile) {
      throw new NotFoundException('Perfil no encontrado.');
    }

    return profile;
  }
}
