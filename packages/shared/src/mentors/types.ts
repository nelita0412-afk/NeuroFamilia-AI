export type MentorResourceType = 'guia' | 'actividad' | 'audio' | 'plantilla' | 'lectura';

export type MentorResource = {
  id: string;
  title: string;
  type: MentorResourceType;
  detail?: string;
  href?: string;
};

export type MentorRuntimeConfig = {
  memory: {
    enabled: boolean;
  };
  personalization: {
    enabled: boolean;
  };
};

export type MentorIdentity = {
  name: string;
  specialty: string;
  purpose: string;
  shortDescription: string;
  longDescription: string;
  ageGroup: string;
  objectives: string[];
  principles: string[];
  communicationStyle: string;
  promote: string[];
  avoid: string[];
  suggestedPrompts: string[];
  suggestedActivities: string[];
  resources: MentorResource[];
  capabilities: string[];
  competencies: string[];
  scientificEvidence: string[];
  image: string;
  avatar?: string;
  signaturePhrase: string;
  basePrompt: string;
  scientificPrompt: string;
  config: MentorRuntimeConfig;
};
