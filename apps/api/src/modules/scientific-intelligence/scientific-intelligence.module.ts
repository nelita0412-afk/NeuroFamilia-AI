import { Module } from '@nestjs/common';
import { GeminiScientificIntelligenceProvider } from './providers/gemini-scientific-intelligence.provider';
import { SCIENTIFIC_INTELLIGENCE_PROVIDER } from './ports/scientific-intelligence-provider.port';
import { ScientificIntelligenceService } from './scientific-intelligence.service';

@Module({
  providers: [
    ScientificIntelligenceService,
    GeminiScientificIntelligenceProvider,
    {
      provide: SCIENTIFIC_INTELLIGENCE_PROVIDER,
      useExisting: GeminiScientificIntelligenceProvider,
    },
  ],
  exports: [ScientificIntelligenceService],
})
export class ScientificIntelligenceModule {}