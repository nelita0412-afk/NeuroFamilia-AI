"use client";

import { useEffect, useMemo, useRef, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ArrowUp, RotateCcw, Sparkles } from 'lucide-react';
import { NeurofamiliaMasterLayout } from '@/components/layout/neurofamilia-master-layout';
import { NeuroSurface } from '@/components/ui/neuro-surface';
import { api } from '@/lib/api';
import { MENTORS } from '@/lib/constants';
import { MENTOR_IDENTITY } from '@/lib/mentor-identity';

function resolvePreselectedMentor(value: string | null) {
  return (MENTORS as readonly string[]).includes(value ?? '') ? (value as string) : 'ALBA';
}

const SESSION_STORAGE_KEY = 'neurofamilia_mentores_session_v1';

type ChatMessage = {
  id: string;
  role: 'user' | 'mentor';
  content: string;
  mentor: string;
  createdAt: string;
  responseSource?: 'AI' | 'FALLBACK';
  fallbackReason?: string | null;
};

type MentorInsight = {
  growthScore: number | null;
  topStrengths: string[];
  growthOpportunities: string[];
  responseSource?: 'AI' | 'FALLBACK';
  fallbackReason?: string | null;
};

type ChatThread = {
  messages: ChatMessage[];
  insight: MentorInsight | null;
};

type SessionState = Record<string, ChatThread>;

function resolveErrorMessage(error: Error) {
  try {
    const parsed = JSON.parse(error.message) as { message?: string | string[] };

    if (Array.isArray(parsed.message)) {
      return parsed.message.join('. ');
    }

    if (typeof parsed.message === 'string') {
      return parsed.message;
    }
  } catch {
    return error.message;
  }

  return error.message;
}

function stageLabelFromValue(value: string) {
  if (value === 'EARLY_CHILDHOOD') {
    return 'Primera infancia';
  }

  if (value === 'MIDDLE_CHILDHOOD') {
    return 'Infancia media';
  }

  if (value === 'ADOLESCENCE') {
    return 'Adolescencia';
  }

  return 'No disponible';
}

function normalizeMentorResponse(response: string) {
  const normalized = response.replace(/\r\n/g, '\n');

  const cleaned = normalized
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/^\s*>\s?/gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return cleaned.length > 0 ? cleaned : 'No disponible';
}

function buildThreadKey(profileId: string, mentor: string) {
  return `${profileId || 'no-profile'}::${mentor}`;
}

function createMessageId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function mentorSpecialty(mentor: string) {
  const specialties: Record<string, string> = {
    ALBA: 'Proyecto de Vida',
    NIA: 'Adaptabilidad',
    MAKI: 'Resiliencia',
    BOBBY: 'Expresion y Conexion',
    LEO: 'Comunidad y Cuidado',
    CORA: 'Autoaceptacion',
    PINGO: 'Curiosidad y Aprendizaje',
    DARWIN: 'Innovacion',
  };

  return specialties[mentor] ?? 'No disponible';
}

function mentorAvatarTone(mentor: string) {
  const tones: Record<string, string> = {
    ALBA: 'from-[#00BDEB] to-[#0069B7]',
    NIA: 'from-[#42C7EE] to-[#1A8CCB]',
    MAKI: 'from-[#56D5C8] to-[#2E9AA7]',
    BOBBY: 'from-[#4FB5FF] to-[#2E6ED9]',
    LEO: 'from-[#66C488] to-[#2E9B63]',
    CORA: 'from-[#5BC6D2] to-[#2E8F9B]',
    PINGO: 'from-[#5AA7FF] to-[#3A73D8]',
    DARWIN: 'from-[#6390FF] to-[#4C57D3]',
  };

  return tones[mentor] ?? 'from-[#00BDEB] to-[#0069B7]';
}

function sourceLabel(source?: 'AI' | 'FALLBACK') {
  return source === 'FALLBACK' ? 'Fallback tecnico' : 'IA real';
}

function mentorSuggestedPrompts(mentor: string) {
  const prompts: Record<string, string[]> = {
    ALBA: [
      '¿Cómo ayudo a mi hijo a descubrir sus intereses?',
      '¿Qué actividades fortalecen su sentido de propósito?',
      '¿Cómo hablamos del futuro sin generar presión?',
    ],
    NIA: [
      '¿Cómo apoyo a mi hijo en un cambio de rutina?',
      '¿Qué señales indican que necesita más contención?',
      '¿Cómo facilito su adaptación a un entorno nuevo?',
    ],
    MAKI: [
      '¿Cómo fortalezco la resiliencia ante la frustración?',
      '¿Qué juegos ayudan a tolerar el error?',
      '¿Cómo celebro sus pequeños logros?',
    ],
    BOBBY: [
      '¿Cómo ayudo a mi hijo a expresar sus emociones?',
      '¿Qué hago cuando se cierra y no quiere hablar?',
      '¿Cómo fortalezco nuestra conexión diaria?',
    ],
    LEO: [
      '¿Cómo fomento el cuidado hacia otros en casa?',
      '¿Qué rutinas fortalecen el sentido de comunidad?',
      '¿Cómo enseño responsabilidad compartida?',
    ],
    CORA: [
      '¿Cómo fortalezco la autoestima de mi hijo?',
      '¿Qué digo cuando se compara con otros?',
      '¿Cómo celebro su forma única de ser?',
    ],
    PINGO: [
      '¿Cómo estimulo la curiosidad científica en casa?',
      '¿Qué preguntas fomentan el pensamiento crítico?',
      '¿Cómo convierto un error en aprendizaje?',
    ],
    DARWIN: [
      '¿Cómo fomento la creatividad para resolver problemas?',
      '¿Qué actividades desarrollan el pensamiento innovador?',
      '¿Cómo acompaño la experimentación segura?',
    ],
  };

  return prompts[mentor] ?? [];
}

function resolveMentorAvatar(mentor: string) {
  const identity = MENTOR_IDENTITY[mentor];

  return identity?.avatar ?? identity?.imageUrl;
}

type MentorAvatarProps = {
  mentor: string;
  sizeClassName: string;
  textClassName: string;
};

function MentorAvatar({ mentor, sizeClassName, textClassName }: MentorAvatarProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const avatarSrc = resolveMentorAvatar(mentor);
  const showImage = Boolean(avatarSrc) && !hasImageError;

  useEffect(() => {
    setHasImageError(false);
  }, [avatarSrc, mentor]);

  if (showImage) {
    return (
      <span className={`relative inline-flex overflow-hidden rounded-full ring-1 ring-white/70 ${sizeClassName}`}>
        <img
          src={avatarSrc}
          alt={`Avatar de ${mentor}`}
          className="h-full w-full object-cover object-right"
          onError={() => setHasImageError(true)}
        />
      </span>
    );
  }

  return (
    <span
      className={`inline-grid place-items-center rounded-full bg-gradient-to-br font-semibold text-white ${mentorAvatarTone(mentor)} ${sizeClassName} ${textClassName}`}
    >
      {mentor.slice(0, 2)}
    </span>
  );
}

function MentoresPageContent() {
  const searchParams = useSearchParams();
  const [selectedMentor, setSelectedMentor] = useState<string>(() => resolvePreselectedMentor(searchParams.get('mentor')));
  const [profileId, setProfileId] = useState<string>('');
  const [draft, setDraft] = useState<string>('');
  const [isHydrated, setIsHydrated] = useState(false);
  const [threads, setThreads] = useState<SessionState>({});
  const [pendingThreadKey, setPendingThreadKey] = useState<string | null>(null);
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const composerRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    setIsHydrated(true);

    try {
      const raw = window.sessionStorage.getItem(SESSION_STORAGE_KEY);

      if (!raw) {
        return;
      }

      const parsed = JSON.parse(raw) as SessionState;
      setThreads(parsed);
    } catch {
      setThreads({});
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(threads));
  }, [isHydrated, threads]);

  const profilesQuery = useQuery({
    queryKey: ['profiles'],
    queryFn: api.listProfiles,
  });

  const selectedProfile = useMemo(
    () => (profilesQuery.data ?? []).find((profile) => profile.id === profileId),
    [profileId, profilesQuery.data],
  );

  const chatMutation = useMutation({
    mutationFn: api.mentorChat,
  });

  const activeThreadKey = useMemo(() => buildThreadKey(profileId, selectedMentor), [profileId, selectedMentor]);

  const activeThread = threads[activeThreadKey] ?? { messages: [], insight: null };
  const messages = activeThread.messages;
  const insight = activeThread.insight;
  const isThinking = chatMutation.isPending && pendingThreadKey === activeThreadKey;

  const canSend = isHydrated && profileId.length > 0 && draft.trim().length > 1 && !chatMutation.isPending;
  const canSendSuggestion = isHydrated && profileId.length > 0 && !chatMutation.isPending;
  const visibleStrengths = (insight?.topStrengths ?? []).slice(0, 3);
  const visibleOpportunities = (insight?.growthOpportunities ?? []).slice(0, 3);

  const profilesError = profilesQuery.isError ? resolveErrorMessage(profilesQuery.error) : null;
  const chatError = chatMutation.isError ? resolveErrorMessage(chatMutation.error) : null;

  function submitMessage(overrideText?: string) {
    const userText = (overrideText ?? draft).trim();

    if (!isHydrated || profileId.length === 0 || userText.length < 2 || chatMutation.isPending) {
      return;
    }

    const targetMentor = selectedMentor;
    const targetProfileId = profileId;
    const targetThreadKey = buildThreadKey(targetProfileId, targetMentor);
    const currentHistory = (threads[targetThreadKey]?.messages ?? []).slice(-10);
    const historyPayload = currentHistory.map((item) => ({
      role: item.role,
      content: item.content,
      mentor: item.mentor,
    }));

    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: 'user',
      content: userText,
      mentor: targetMentor,
      createdAt: new Date().toISOString(),
    };

    setThreads((previous) => {
      const current = previous[targetThreadKey] ?? { messages: [], insight: null };

      return {
        ...previous,
        [targetThreadKey]: {
          ...current,
          messages: [...current.messages, userMessage],
        },
      };
    });

    setDraft('');
    setPendingThreadKey(targetThreadKey);

    chatMutation.mutate(
      {
        profileId: targetProfileId,
        mentor: targetMentor,
        message: userText,
        history: historyPayload,
      },
      {
        onSuccess: (response) => {
          const mentorMessage: ChatMessage = {
            id: createMessageId(),
            role: 'mentor',
            content: normalizeMentorResponse(response.response),
            mentor: targetMentor,
            createdAt: new Date().toISOString(),
            responseSource: response.responseSource ?? 'AI',
            fallbackReason: response.fallbackReason ?? null,
          };

          setThreads((previous) => {
            const current = previous[targetThreadKey] ?? { messages: [], insight: null };

            return {
              ...previous,
              [targetThreadKey]: {
                messages: [...current.messages, mentorMessage],
                insight: {
                  growthScore: typeof response.growthScore === 'number' ? response.growthScore : null,
                  topStrengths: response.topStrengths ?? [],
                  growthOpportunities: response.growthOpportunities ?? [],
                  responseSource: response.responseSource ?? 'AI',
                  fallbackReason: response.fallbackReason ?? null,
                },
              },
            };
          });
        },
        onSettled: () => {
          setPendingThreadKey((current) => (current === targetThreadKey ? null : current));
        },
      },
    );
  }

  function handleSend(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitMessage();
  }

  function handleComposerKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      submitMessage();
    }
  }

  function handleSuggestionClick(prompt: string) {
    if (!canSendSuggestion) {
      setDraft(prompt);
      return;
    }

    submitMessage(prompt);
  }

  function handleClearThread() {
    setThreads((previous) => {
      const next = { ...previous };
      delete next[activeThreadKey];
      return next;
    });
  }

  function resizeComposer() {
    const node = composerRef.current;

    if (!node) {
      return;
    }

    node.style.height = 'auto';
    node.style.height = `${Math.min(node.scrollHeight, 160)}px`;
  }

  useEffect(() => {
    resizeComposer();
  }, [draft]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [activeThreadKey, messages.length, isThinking]);

  return (
    <NeurofamiliaMasterLayout profileName="Comunidad activa">
      <div className="pb-8 pt-6 sm:pt-8">
        <div className="grid gap-4 lg:grid-cols-[28%_72%]">
          <NeuroSurface className="h-[calc(100vh-10rem)] overflow-hidden p-3 sm:p-4">
            <div className="h-full space-y-3 overflow-y-auto pr-1">
              <div className="rounded-2xl border border-[#DCEBFA] bg-white p-3">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5F8DB5]">
                  Selector de mentor
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {MENTORS.map((mentor) => {
                    const active = mentor === selectedMentor;

                    return (
                      <button
                        key={mentor}
                        type="button"
                        onClick={() => setSelectedMentor(mentor)}
                        className={`rounded-xl border px-2 py-2 text-left text-xs font-semibold transition ${
                          active
                            ? 'border-[#00BDEB] bg-[#EAF8FE] text-[#005C9F]'
                            : 'border-[#D6E7F6] bg-white text-[#33618D] hover:border-[#8ECBF0]'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <MentorAvatar mentor={mentor} sizeClassName="h-8 w-8" textClassName="text-[10px]" />
                          <span>{mentor}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-[#DCEBFA] bg-[#F7FBFF] p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5F8DB5]">Perfil activo</p>
                <select
                  value={profileId}
                  onChange={(event) => setProfileId(event.target.value)}
                  className="mt-2 h-10 w-full rounded-xl border border-[#D7EAF8] bg-white px-3 text-xs text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
                >
                  <option value="">Selecciona un perfil</option>
                  {(profilesQuery.data ?? []).map((profile) => (
                    <option key={profile.id} value={profile.id}>
                      {profile.fullName} · {stageLabelFromValue(profile.developmentStage)}
                    </option>
                  ))}
                </select>

                <div className="mt-2 space-y-1 text-xs text-[#33618D]">
                  <p>
                    <span className="font-semibold text-[#184A79]">Nombre:</span>{' '}
                    {selectedProfile?.fullName ?? 'No disponible'}
                  </p>
                  <p>
                    <span className="font-semibold text-[#184A79]">Etapa:</span>{' '}
                    {selectedProfile ? stageLabelFromValue(selectedProfile.developmentStage) : 'No disponible'}
                  </p>
                  <p>
                    <span className="font-semibold text-[#184A79]">Nacimiento:</span>{' '}
                    {selectedProfile?.birthDate ?? 'No disponible'}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#DCEBFA] bg-white p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5F8DB5]">Growth Score</p>
                <div className="mt-1 flex items-end justify-between">
                  <p className="text-2xl font-semibold text-[#003D78]">{insight?.growthScore ?? 'No disponible'}</p>
                  <p
                    className={`inline-flex rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                      insight?.responseSource === 'FALLBACK'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-[#EAF8FE] text-[#0069B7]'
                    }`}
                  >
                    {sourceLabel(insight?.responseSource)}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#DCEBFA] bg-white p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5F8DB5]">Fortalezas</p>
                <ul className="mt-2 space-y-1 text-xs text-[#1D4E7B]">
                  {visibleStrengths.length > 0 ? (
                    visibleStrengths.map((item) => <li key={item}>• {item}</li>)
                  ) : (
                    <li>No disponible</li>
                  )}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#DCEBFA] bg-white p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5F8DB5]">Oportunidades</p>
                <ul className="mt-2 space-y-1 text-xs text-[#1D4E7B]">
                  {visibleOpportunities.length > 0 ? (
                    visibleOpportunities.map((item) => <li key={item}>• {item}</li>)
                  ) : (
                    <li>No disponible</li>
                  )}
                </ul>
              </div>
            </div>
          </NeuroSurface>

          <NeuroSurface className="h-[calc(100vh-10rem)] overflow-hidden p-0">
            <div className="flex h-full flex-col">
              <div className="border-b border-[#DCEBFA] bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(248,252,255,0.97))] px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className={`relative inline-flex shrink-0 rounded-full bg-gradient-to-br p-[2px] ${mentorAvatarTone(selectedMentor)}`}>
                      <MentorAvatar mentor={selectedMentor} sizeClassName="h-12 w-12 sm:h-14 sm:w-14" textClassName="text-base" />
                      <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-base font-semibold text-[#003D78] sm:text-lg">{selectedMentor}</p>
                      <p className="truncate text-xs text-[#5F8DB5] sm:text-sm">
                        {MENTOR_IDENTITY[selectedMentor]?.tagline ?? mentorSpecialty(selectedMentor)}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <div className="hidden items-center gap-1.5 rounded-full border border-[#D6ECFA] bg-[#EFF8FE] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0069B7] sm:inline-flex">
                      <Sparkles className="h-3.5 w-3.5" />
                      En linea
                    </div>
                    <button
                      type="button"
                      onClick={handleClearThread}
                      disabled={messages.length === 0}
                      title="Nueva conversacion"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D6ECFA] bg-white text-[#0069B7] transition hover:bg-[#EFF8FE] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {profilesError ? <p className="mt-2 text-xs text-rose-600">{profilesError}</p> : null}
                {chatError ? <p className="mt-1 text-xs text-rose-600">{chatError}</p> : null}
              </div>

              <div className="flex-1 overflow-y-auto bg-[linear-gradient(180deg,#f8fcff,#f3f9fe)] px-4 py-5 sm:px-6">
                <div className="mx-auto max-w-2xl">
                  {messages.length === 0 && !isThinking ? (
                    <div className="flex flex-col items-center px-2 py-6 text-center">
                      <span className={`inline-flex rounded-full bg-gradient-to-br p-[3px] ${mentorAvatarTone(selectedMentor)}`}>
                        <MentorAvatar mentor={selectedMentor} sizeClassName="h-20 w-20" textClassName="text-2xl" />
                      </span>
                      <h2 className="mt-4 text-xl font-semibold text-[#003D78]">Hola, soy {selectedMentor}</h2>
                      <p className="mt-1 max-w-sm text-sm text-[#5F8DB5]">
                        {MENTOR_IDENTITY[selectedMentor]?.tagline ?? mentorSpecialty(selectedMentor)}. Este historial se conserva
                        solo durante tu sesion actual del navegador.
                      </p>

                      <div className="mt-6 grid w-full gap-2 sm:grid-cols-1">
                        {mentorSuggestedPrompts(selectedMentor).map((prompt) => (
                          <button
                            key={prompt}
                            type="button"
                            onClick={() => handleSuggestionClick(prompt)}
                            className="w-full rounded-2xl border border-[#DCEBFA] bg-white px-4 py-3 text-left text-sm text-[#1D4E7B] shadow-[0_8px_20px_rgba(0,61,120,0.06)] transition hover:-translate-y-0.5 hover:border-[#8ECBF0] hover:shadow-[0_12px_26px_rgba(0,61,120,0.12)]"
                          >
                            {prompt}
                          </button>
                        ))}
                      </div>

                      {profileId.length === 0 ? (
                        <p className="mt-4 text-xs text-[#5F8DB5]">Selecciona un perfil activo para comenzar a conversar.</p>
                      ) : null}
                    </div>
                  ) : null}

                  <div className="space-y-3">
                  {messages.map((item) => {
                    const isUser = item.role === 'user';

                    return (
                      <div
                        key={item.id}
                        className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                        style={{ animation: 'mentorMessageIn 220ms ease-out' }}
                      >
                        <div
                          className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm shadow-[0_10px_24px_rgba(0,61,120,0.08)] sm:max-w-[78%] ${
                            isUser
                              ? 'bg-[#0069B7] text-white'
                              : 'border border-[#DCEBFA] bg-white text-[#1D4E7B]'
                          }`}
                        >
                          {isUser ? (
                            <p className="mb-1 text-[11px] uppercase tracking-[0.16em] text-white/85">Tu mensaje</p>
                          ) : (
                            <div className="mb-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#5F8DB5]">
                              <MentorAvatar mentor={item.mentor} sizeClassName="h-5 w-5" textClassName="text-[8px]" />
                              <span>{`${item.mentor} · ${mentorSpecialty(item.mentor)}`}</span>
                            </div>
                          )}

                          {!isUser ? (
                            <p
                              className={`mb-2 inline-flex rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                                item.responseSource === 'FALLBACK'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-[#EAF8FE] text-[#0069B7]'
                              }`}
                            >
                              {sourceLabel(item.responseSource)}
                            </p>
                          ) : null}

                          <p className="whitespace-pre-wrap leading-6">{item.content}</p>
                          {!isUser && item.responseSource === 'FALLBACK' && item.fallbackReason ? (
                            <p className="mt-2 text-xs text-amber-700">
                              Motivo tecnico: {item.fallbackReason}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}

                  {isThinking ? (
                    <div className="flex justify-start" style={{ animation: 'mentorMessageIn 220ms ease-out' }}>
                      <div className="max-w-[86%] rounded-2xl border border-[#DCEBFA] bg-white px-4 py-3 text-sm text-[#1D4E7B] shadow-[0_10px_24px_rgba(0,61,120,0.08)] sm:max-w-[78%]">
                        <p className="mb-1 text-[11px] uppercase tracking-[0.16em] text-[#5F8DB5]">
                          {selectedMentor} · pensando...
                        </p>
                        <div className="flex items-center gap-1 text-[#5F8DB5]">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-[#8ECBF0]" />
                          <span className="h-2 w-2 animate-pulse rounded-full bg-[#8ECBF0] [animation-delay:120ms]" />
                          <span className="h-2 w-2 animate-pulse rounded-full bg-[#8ECBF0] [animation-delay:240ms]" />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div ref={messageEndRef} />
                  </div>
                </div>
              </div>

              <form onSubmit={handleSend} className="border-t border-[#DCEBFA] bg-white/95 p-4 backdrop-blur sm:p-5">
                <div className="mx-auto max-w-2xl">
                  <div className="relative rounded-3xl border border-[#D7EAF8] bg-white shadow-[0_10px_30px_rgba(0,61,120,0.08)] transition focus-within:border-[#00BDEB] focus-within:ring-2 focus-within:ring-[#C7F0FA]">
                    <textarea
                      ref={composerRef}
                      value={draft}
                      onChange={(event) => setDraft(event.target.value)}
                      onKeyDown={handleComposerKeyDown}
                      placeholder={`Escribe un mensaje para ${selectedMentor}...`}
                      rows={1}
                      className="max-h-40 min-h-[3.25rem] w-full resize-none rounded-3xl bg-transparent py-3.5 pl-5 pr-14 text-sm text-[#003D78] outline-none"
                    />
                    <button
                      type="submit"
                      disabled={!canSend}
                      title="Enviar mensaje"
                      className="absolute bottom-2 right-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0069B7] text-white transition hover:bg-[#005c9f] disabled:cursor-not-allowed disabled:bg-[#B9D8ED]"
                    >
                      <ArrowUp className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2 px-1">
                    <p className="text-xs text-[#5F8DB5]">
                      Perfil: {selectedProfile?.fullName ?? 'No disponible'} · Etapa:{' '}
                      {selectedProfile ? stageLabelFromValue(selectedProfile.developmentStage) : 'No disponible'}
                    </p>
                    <p className="text-xs text-[#8FB3D1]">Enter para enviar · Shift + Enter para salto de linea</p>
                  </div>
                </div>
              </form>
            </div>
          </NeuroSurface>
        </div>
      </div>

      <style jsx>{`
        @keyframes mentorMessageIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </NeurofamiliaMasterLayout>
  );
}

export default function MentoresPage() {
  return (
    <Suspense fallback={null}>
      <MentoresPageContent />
    </Suspense>
  );
}