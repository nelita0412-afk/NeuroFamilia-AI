import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { ChatDto } from './dto/chat.dto';
import { ScientificIntelligenceService } from '../scientific-intelligence/scientific-intelligence.service';
import type { MentorResponseContext } from '../scientific-intelligence/ports/scientific-intelligence-provider.port';
import { RelationshipPermissionsService } from '../relationship-permissions/relationship-permissions.service';

@Injectable()
export class MentorService {
  private readonly logger = new Logger(MentorService.name);

  constructor(
    private readonly db: DatabaseService,
    private readonly scientificIntelligenceService: ScientificIntelligenceService,
    private readonly relationshipPermissionsService: RelationshipPermissionsService,
  ) {}

  async chat(accountId: string, dto: ChatDto) {
    await this.relationshipPermissionsService.ensureCanReadGrowth(accountId, dto.profileId);

    const profile = await this.db.profile.findUnique({
      where: { id: dto.profileId },
    });

    if (!profile) {
      throw new NotFoundException('Perfil no encontrado.');
    }

    const observations = await this.db.growthObservation.findMany({
      where: { profileId: dto.profileId },
      orderBy: { observedAt: 'asc' },
    });

    const strengths = observations
      .filter((observation) => observation.category === 'strength')
      .map((observation) => observation.note);

    const opportunities = observations
      .filter((observation) => observation.category === 'opportunity')
      .map((observation) => observation.note);

    const growthScore = Math.min(100, 40 + strengths.length * 10 + opportunities.length * 5);

    const history = (dto.history ?? []).slice(-12).map((item) => ({
      role: item.role,
      content: item.content,
      mentor: item.mentor,
    }));

    const context: MentorResponseContext = {
      mentor: dto.mentor,
      name: profile.fullName,
      developmentStage: profile.developmentStage,
      growthScore,
      topStrengths: strengths.slice(0, 3),
      growthOpportunities: opportunities.slice(0, 3),
      userMessage: dto.message,
      conversationHistory: history,
    };

    let response: string;
    let responseSource: 'AI' | 'FALLBACK' = 'AI';
    let fallbackReason: string | null = null;

    try {
      response = await this.scientificIntelligenceService.generateMentorResponse(context);
    } catch (error) {
      // Si el proveedor IA falla (red, cuota, credenciales), devolvemos una guia util sin romper el endpoint.
      this.logger.error('Fallo en proveedor IA de mentor/chat', error instanceof Error ? error.stack : String(error));
      response = this.buildFallbackResponse(context);
      responseSource = 'FALLBACK';
      fallbackReason = error instanceof Error ? error.message : String(error);
    }

    return {
      mentor: dto.mentor,
      response,
      responseSource,
      fallbackReason,
      growthScore: context.growthScore,
      topStrengths: context.topStrengths,
      growthOpportunities: context.growthOpportunities,
    };
  }

  private buildFallbackResponse(context: MentorResponseContext) {
    const strengths = context.topStrengths.length > 0 ? context.topStrengths.join(', ') : 'No disponible';
    const opportunities =
      context.growthOpportunities.length > 0 ? context.growthOpportunities.join(', ') : 'No disponible';

    return [
      `Hoy te acompano como ${context.mentor} con una lectura breve basada en los datos actuales de ${context.name}.`,
      `Growth score actual: ${context.growthScore}.`,
      `Fortalezas observadas: ${strengths}.`,
      `Oportunidades de crecimiento: ${opportunities}.`,
      'El servicio IA avanzado no esta disponible temporalmente; te recomiendo priorizar una accion pequena, medible y revisarla en 24 horas.',
    ].join(' ');
  }
}
