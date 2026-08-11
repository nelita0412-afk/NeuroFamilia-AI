import { API_BASE_URL } from './constants';
import { clearAccessToken, getAccessToken } from './storage';
import type {
  AccountAuthResponse,
  Family,
  GrowthReport,
  MentorChatHistoryItem,
  MentorChatResponse,
  Profile,
  RegisterPayload,
} from './types';

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  requireAuth?: boolean;
};

async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, requireAuth = true } = options;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (requireAuth) {
    const token = getAccessToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (response.status === 401) {
    clearAccessToken();
  }

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Request failed with status ${response.status}`);
  }

  if (response.status === 204) {
    return {} as T;
  }

  return (await response.json()) as T;
}

export const api = {
  health: () => apiRequest<{ status: string; database: string; version: string; timestamp: string }>('/health', { requireAuth: false }),

  login: (payload: { email: string; password: string }) =>
    apiRequest<AccountAuthResponse>('/auth/login', {
      method: 'POST',
      body: payload,
      requireAuth: false,
    }),

  register: (payload: RegisterPayload) =>
    apiRequest<{ id: string; email: string; message: string }>('/auth/register', {
      method: 'POST',
      body: payload,
      requireAuth: false,
    }),

  listFamilies: () => apiRequest<Family[]>('/families'),

  createFamily: (payload: { name: string }) =>
    apiRequest<Family>('/families', {
      method: 'POST',
      body: payload,
    }),

  addFamilyMember: (familyId: string, payload: { personId: string; relationship: string }) =>
    apiRequest(`/families/${familyId}/members`, {
      method: 'POST',
      body: payload,
    }),

  listProfiles: () => apiRequest<Profile[]>('/profiles'),

  getProfile: (id: string) => apiRequest<Profile>(`/profiles/${id}`),

  createProfile: (payload: {
    familyId: string;
    personId?: string;
    fullName: string;
    birthDate: string;
    developmentStage: string;
  }) =>
    apiRequest<Profile>('/profiles', {
      method: 'POST',
      body: payload,
    }),

  createObservation: (payload: {
    profileId: string;
    category: 'strength' | 'opportunity';
    note: string;
    observedAt?: string;
  }) =>
    apiRequest('/growth/observations', {
      method: 'POST',
      body: payload,
    }),

  getGrowthReport: (profileId: string) => apiRequest<GrowthReport>(`/growth/profiles/${profileId}/report`),

  mentorChat: (payload: { profileId: string; mentor: string; message: string; history?: MentorChatHistoryItem[] }) =>
    apiRequest<MentorChatResponse>('/mentor/chat', {
      method: 'POST',
      body: payload,
    }),
};