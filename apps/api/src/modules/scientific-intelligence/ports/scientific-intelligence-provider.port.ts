export interface MentorConversationTurn {
  role: 'user' | 'mentor';
  content: string;
  mentor?: string;
}

export interface MentorResponseContext {
  mentor: string;
  name: string;
  developmentStage: string;
  growthScore: number;
  topStrengths: string[];
  growthOpportunities: string[];
  userMessage: string;
  conversationHistory: MentorConversationTurn[];
}

export interface ScientificIntelligenceGenerationRequest {
  prompt: string;
}

export interface ScientificIntelligenceProvider {
  generateText(
    request: ScientificIntelligenceGenerationRequest,
  ): Promise<string>;
}

export const SCIENTIFIC_INTELLIGENCE_PROVIDER = Symbol(
  'SCIENTIFIC_INTELLIGENCE_PROVIDER',
);
