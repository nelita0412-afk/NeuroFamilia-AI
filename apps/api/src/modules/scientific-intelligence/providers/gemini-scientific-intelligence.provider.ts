import { GoogleGenAI } from '@google/genai';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ScientificIntelligenceGenerationRequest,
  ScientificIntelligenceProvider,
} from '../ports/scientific-intelligence-provider.port';

@Injectable()
export class GeminiScientificIntelligenceProvider implements ScientificIntelligenceProvider {
  private client?: GoogleGenAI;
  private model?: string;

  constructor(private readonly configService: ConfigService) {}

  async generateText(
    request: ScientificIntelligenceGenerationRequest,
  ): Promise<string> {
    const response = await this.getClient().models.generateContent({
      model: this.getModel(),
      contents: request.prompt,
    });

    return (response.text ?? '').trim();
  }

  private getClient(): GoogleGenAI {
    if (this.client) {
      return this.client;
    }

    const apiKey = this.configService.get<string>('GEMINI_API_KEY');

    if (!apiKey) {
      throw new InternalServerErrorException(
        'GEMINI_API_KEY no está configurada.',
      );
    }

    this.client = new GoogleGenAI({ apiKey });

    return this.client;
  }

  private getModel(): string {
    if (this.model) {
      return this.model;
    }

    const model = this.configService.get<string>('GEMINI_MODEL');

    if (!model) {
      throw new InternalServerErrorException(
        'GEMINI_MODEL no está configurado.',
      );
    }

    this.model = model;

    return this.model;
  }
}
