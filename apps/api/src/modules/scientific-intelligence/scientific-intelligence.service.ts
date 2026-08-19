import { Inject, Injectable } from '@nestjs/common';
import { MENTOR_IDENTITY } from '@neurofamilia/shared';
import { SCIENTIFIC_INTELLIGENCE_PROVIDER } from './ports/scientific-intelligence-provider.port';
import type {
  MentorResponseContext,
  ScientificIntelligenceProvider,
} from './ports/scientific-intelligence-provider.port';

const DEFAULT_MENTOR = 'ALBA';

@Injectable()
export class ScientificIntelligenceService {
  private readonly maxAttempts = 3;

  constructor(
    @Inject(SCIENTIFIC_INTELLIGENCE_PROVIDER)
    private readonly provider: ScientificIntelligenceProvider,
  ) {}

  async generateMentorResponse(
    context: MentorResponseContext,
  ): Promise<string> {
    const prompt = this.buildPrompt(context);

    let lastError: unknown;

    for (let attempt = 1; attempt <= this.maxAttempts; attempt += 1) {
      try {
        const response = await this.provider.generateText({ prompt });

        if (!response || response.trim().length === 0) {
          throw new Error('EMPTY_MODEL_RESPONSE');
        }

        return response;
      } catch (error) {
        lastError = error;

        if (!this.shouldRetry(error) || attempt === this.maxAttempts) {
          throw error;
        }

        await this.wait(240 * attempt);
      }
    }

    throw lastError instanceof Error
      ? lastError
      : new Error('MODEL_GENERATION_FAILED');
  }

  // Prompt Library centraliza las identidades del MIF para sumar nuevos mentores sin tocar el proveedor.
  private getSystemPrompt(mentor: string): string {
    const identity = MENTOR_IDENTITY[mentor.toUpperCase()];

    return identity?.basePrompt ?? MENTOR_IDENTITY[DEFAULT_MENTOR].basePrompt;
  }

  // El prompt compuesto conserva la estructura actual y deja espacio para NGCM, RAG y memoria conversacional.
  private buildPrompt(context: MentorResponseContext): string {
    const strengths = context.topStrengths.length
      ? context.topStrengths.join(', ')
      : 'No se registraron fortalezas destacadas todavia.';

    const opportunities = context.growthOpportunities.length
      ? context.growthOpportunities.join(', ')
      : 'No se registraron oportunidades prioritarias todavia.';

    const conversationHistory = context.conversationHistory.length
      ? context.conversationHistory
          .map((item) => {
            const roleLabel =
              item.role === 'mentor'
                ? `Mentor ${item.mentor ?? context.mentor}`
                : 'Usuario';

            return `${roleLabel}: ${item.content}`;
          })
          .join('\n')
      : 'No hay historial previo en esta sesion.';

    return [
      this.getSystemPrompt(context.mentor).trim(),
      'Responde en espanol claro, calido y accionable.',
      'Entrega solo la respuesta final para la familia, sin encabezados ni metadatos.',
      'Mantén continuidad conversacional usando el historial cuando exista.',
      `Nombre: ${context.name}`,
      `Development stage: ${context.developmentStage}`,
      `Growth score: ${context.growthScore}`,
      `Top strengths: ${strengths}`,
      `Growth opportunities: ${opportunities}`,
      `Historial reciente:\n${conversationHistory}`,
      `Mensaje del usuario: ${context.userMessage}`,
    ].join('\n');
  }

  private shouldRetry(error: unknown) {
    const message =
      error instanceof Error
        ? error.message.toLowerCase()
        : String(error).toLowerCase();

    // Misconfiguracion no mejora con retry.
    if (
      message.includes('gemini_api_key no está configurada') ||
      message.includes('gemini_model no está configurado')
    ) {
      return false;
    }

    if (
      message.includes('429') ||
      message.includes('503') ||
      message.includes('500')
    ) {
      return true;
    }

    if (
      message.includes('timeout') ||
      message.includes('network') ||
      message.includes('unavailable') ||
      message.includes('empty_model_response')
    ) {
      return true;
    }

    return false;
  }

  private wait(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
