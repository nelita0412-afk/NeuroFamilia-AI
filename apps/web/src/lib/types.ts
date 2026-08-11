export interface AccountAuthResponse {
  access_token: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: string;
}

export interface PersonSummary {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  accountId?: string | null;
}

export interface FamilyMember {
  id: string;
  relationship: string;
  person: PersonSummary;
}

export interface Family {
  id: string;
  name: string;
  createdAt: string;
  members: FamilyMember[];
}

export interface Profile {
  id: string;
  familyId: string;
  personId?: string | null;
  fullName: string;
  birthDate: string;
  developmentStage: string;
}

export interface GrowthReport {
  growthScore: number;
  topStrengths: string[];
  growthOpportunities: string[];
}

export interface MentorChatResponse {
  mentor: string;
  response: string;
  responseSource?: 'AI' | 'FALLBACK';
  fallbackReason?: string | null;
  growthScore: number;
  topStrengths: string[];
  growthOpportunities: string[];
}

export interface MentorChatHistoryItem {
  role: 'user' | 'mentor';
  content: string;
  mentor?: string;
}