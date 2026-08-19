import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { CreateObservationDto } from './dto/create-observation.dto';
import { RelationshipPermissionsService } from '../relationship-permissions/relationship-permissions.service';

@Injectable()
export class GrowthService {
  constructor(
    private readonly db: DatabaseService,
    private readonly relationshipPermissionsService: RelationshipPermissionsService,
  ) {}

  async createObservation(accountId: string, dto: CreateObservationDto) {
    await this.relationshipPermissionsService.ensureCanWriteGrowth(
      accountId,
      dto.profileId,
    );

    const profile = await this.db.profile.findUnique({
      where: { id: dto.profileId },
    });

    if (!profile) {
      throw new NotFoundException('Perfil no encontrado.');
    }

    return this.db.growthObservation.create({
      data: {
        profileId: dto.profileId,
        category: dto.category,
        note: dto.note,
        observedAt: dto.observedAt ? new Date(dto.observedAt) : new Date(),
      },
    });
  }

  async getReport(accountId: string, profileId: string) {
    await this.relationshipPermissionsService.ensureCanReadGrowth(
      accountId,
      profileId,
    );

    const profile = await this.db.profile.findUnique({
      where: { id: profileId },
    });

    if (!profile) {
      throw new NotFoundException('Perfil no encontrado.');
    }

    const observations = await this.db.growthObservation.findMany({
      where: { profileId },
      orderBy: { observedAt: 'asc' },
    });

    const strengths = observations
      .filter((observation) => observation.category === 'strength')
      .map((observation) => observation.note);

    const opportunities = observations
      .filter((observation) => observation.category === 'opportunity')
      .map((observation) => observation.note);

    const growthScore = Math.min(
      100,
      40 + strengths.length * 10 + opportunities.length * 5,
    );

    return {
      growthScore,
      topStrengths: strengths.slice(0, 3),
      growthOpportunities: opportunities.slice(0, 3),
    };
  }
}
