'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ArrowLeft, ArrowRight, MessageCircle, Sparkles, TrendingUp, WandSparkles } from 'lucide-react';
import { useParams } from 'next/navigation';
import { NeurofamiliaMasterLayout } from '@/components/layout/neurofamilia-master-layout';
import { NeuroSurface } from '@/components/ui/neuro-surface';
import { api } from '@/lib/api';
import { MENTORS } from '@/lib/constants';
import { MENTOR_IDENTITY } from '@/lib/mentor-identity';
import { describeRole, findPersonById } from '@/lib/personas';

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

function stageLabelFromValue(value?: string) {
  if (!value) {
    return 'No disponible';
  }

  if (value === 'EARLY_CHILDHOOD') {
    return 'Primera infancia';
  }

  if (value === 'MIDDLE_CHILDHOOD') {
    return 'Infancia media';
  }

  if (value === 'ADOLESCENCE') {
    return 'Adolescencia';
  }

  return value;
}

function formatBirthDate(value?: string) {
  if (!value) {
    return 'No disponible';
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return 'No disponible';
  }

  return new Intl.DateTimeFormat('es-EC', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export default function PersonaProfilePage() {
  const params = useParams<{ id: string }>();
  const [selectedMentor, setSelectedMentor] = useState<string>('ALBA');
  const [mentorMessage, setMentorMessage] = useState('');

  const familiesQuery = useQuery({ queryKey: ['families'], queryFn: api.listFamilies });
  const profilesQuery = useQuery({ queryKey: ['profiles'], queryFn: api.listProfiles });

  const person = useMemo(
    () => findPersonById(params.id, familiesQuery.data ?? [], profilesQuery.data ?? []),
    [familiesQuery.data, params.id, profilesQuery.data],
  );

  const growthQuery = useQuery({
    queryKey: ['growth-report', person?.profileId],
    queryFn: () => api.getGrowthReport(person?.profileId as string),
    enabled: Boolean(person?.profileId),
  });

  const mentorChatMutation = useMutation({
    mutationFn: api.mentorChat,
  });

  const mentorIdentity = MENTOR_IDENTITY[selectedMentor];
  const canAskMentor = Boolean(person?.profileId) && mentorMessage.trim().length > 1 && !mentorChatMutation.isPending;
  const mentorResponse = useMemo(() => {
    if (!mentorChatMutation.data?.response) {
      return 'No disponible';
    }

    return normalizeMentorResponse(mentorChatMutation.data.response);
  }, [mentorChatMutation.data?.response]);

  const familiesError = familiesQuery.isError ? resolveErrorMessage(familiesQuery.error) : null;
  const profilesError = profilesQuery.isError ? resolveErrorMessage(profilesQuery.error) : null;
  const growthError = growthQuery.isError ? resolveErrorMessage(growthQuery.error) : null;
  const mentorError = mentorChatMutation.isError ? resolveErrorMessage(mentorChatMutation.error) : null;

  function handleMentorSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canAskMentor || !person?.profileId) {
      return;
    }

    mentorChatMutation.mutate(
      {
        profileId: person.profileId,
        mentor: selectedMentor,
        message: mentorMessage.trim(),
      },
      {
        onSuccess: () => {
          setMentorMessage('');
        },
      },
    );
  }

  if (!familiesQuery.isLoading && !profilesQuery.isLoading && !person) {
    return (
      <NeurofamiliaMasterLayout profileName="Comunidad activa" activeLabel="Personas">
        <div className="pt-8 sm:pt-10">
          <NeuroSurface className="rounded-[32px] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5F8DB5]">Persona no encontrada</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[#002A68] [font-family:Nunito,ui-rounded,system-ui,sans-serif]">
              Esta presencia no aparece dentro del ecosistema visible.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#33618D]">
              La vista de Personas se construye con familias y expedientes reales. Si la persona aun no fue vinculada, su detalle no puede mostrarse aqui.
            </p>
            <Link
              href="/dashboard/personas"
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#0069B7] px-5 text-sm font-semibold text-white transition hover:bg-[#005c9f]"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Personas
            </Link>
          </NeuroSurface>
        </div>
      </NeurofamiliaMasterLayout>
    );
  }

  return (
    <NeurofamiliaMasterLayout profileName={person?.firstName ?? 'Comunidad activa'} activeLabel="Personas">
      <div className="space-y-6 pb-10 pt-8 sm:space-y-8 sm:pt-10">
        <section className="rounded-[32px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(238,248,253,0.80))] p-6 shadow-[0_28px_80px_rgba(0,61,120,0.10)] sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0069B7]">
            <Sparkles className="h-3.5 w-3.5" />
            Detalle de persona
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#002A68] [font-family:Nunito,ui-rounded,system-ui,sans-serif] sm:text-5xl">
            {person?.fullName ?? 'No disponible'}
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#33618D] sm:text-base">
            Esta vista integra datos reales de Personas, Growth y Mentores con endpoints existentes. Si una senal no existe en backend, se muestra como No disponible.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dashboard/personas"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/80 bg-white/80 px-5 text-sm font-semibold text-[#003D78]"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Link>
            {person?.profileId ? (
              <Link
                href={`/dashboard/expedientes/${person.profileId}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#0069B7] px-5 text-sm font-semibold text-white transition hover:bg-[#005c9f]"
              >
                Abrir expediente
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <NeuroSurface>
            <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Informacion general</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-[#5F8DB5]">Nombre</p>
                <p className="mt-1 text-lg font-semibold text-[#003D78]">{person?.fullName ?? 'No disponible'}</p>
              </div>
              <div>
                <p className="text-sm text-[#5F8DB5]">Rol</p>
                <p className="mt-1 text-lg font-semibold text-[#003D78]">{person ? describeRole(person.role) : 'No disponible'}</p>
              </div>
              <div>
                <p className="text-sm text-[#5F8DB5]">Edad</p>
                <p className="mt-1 text-lg font-semibold text-[#003D78]">{person?.ageLabel ?? 'No disponible'}</p>
              </div>
              <div>
                <p className="text-sm text-[#5F8DB5]">Nacimiento</p>
                <p className="mt-1 text-lg font-semibold text-[#003D78]">{formatBirthDate(person?.birthDate)}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm text-[#5F8DB5]">Etapa del desarrollo</p>
                <p className="mt-1 text-lg font-semibold text-[#003D78]">{stageLabelFromValue(person?.developmentStage)}</p>
              </div>
            </div>

            {familiesError ? <p className="mt-4 text-sm text-rose-600">{familiesError}</p> : null}
            {profilesError ? <p className="mt-2 text-sm text-rose-600">{profilesError}</p> : null}
          </NeuroSurface>

          <NeuroSurface>
            <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Relacion familiar y expediente</p>
            <div className="mt-4 rounded-2xl border border-[#DCEBFA] bg-[#F7FBFF] p-4 text-sm text-[#33618D]">
              <p>
                <span className="font-semibold text-[#003D78]">Familia:</span> {person?.familyName ?? 'No disponible'}
              </p>
              <p className="mt-1">
                <span className="font-semibold text-[#003D78]">Profile ID:</span> {person?.profileId ?? 'No disponible'}
              </p>
              <p className="mt-1">
                <span className="font-semibold text-[#003D78]">Mentor asignado persistido:</span> No disponible
              </p>
              <p className="mt-1">
                <span className="font-semibold text-[#003D78]">Historial de mentor por persona:</span> No disponible
              </p>
            </div>
          </NeuroSurface>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <NeuroSurface>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6ECFA] bg-[#EFF8FE] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0069B7]">
              <TrendingUp className="h-3.5 w-3.5" />
              Senales reales de growth
            </div>

            {!person?.profileId ? (
              <p className="text-sm text-[#5F8DB5]">No disponible. Esta persona aun no tiene expediente vinculado.</p>
            ) : null}

            {person?.profileId && growthQuery.isLoading ? <p className="text-sm text-[#5F8DB5]">Cargando reporte...</p> : null}
            {growthError ? <p className="text-sm text-rose-600">{growthError}</p> : null}

            <div className="mt-4 rounded-2xl border border-[#DCEBFA] bg-[#F7FBFF] p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Growth score (/growth/profiles/:id/report)</p>
              <p className="mt-2 text-4xl font-semibold text-[#003D78]">
                {person?.profileId ? (growthQuery.data?.growthScore ?? 'No disponible') : 'No disponible'}
              </p>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#DCEBFA] bg-white p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Fortalezas</p>
                {(growthQuery.data?.topStrengths ?? []).length > 0 ? (
                  <ul className="mt-3 space-y-2 text-sm text-[#1D4E7B]">
                    {(growthQuery.data?.topStrengths ?? []).map((item, index) => (
                      <li key={`${item}-${index}`} className="rounded-xl bg-[#F4FAFF] px-3 py-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm text-[#5F8DB5]">No disponible</p>
                )}
              </div>

              <div className="rounded-2xl border border-[#DCEBFA] bg-white p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Oportunidades</p>
                {(growthQuery.data?.growthOpportunities ?? []).length > 0 ? (
                  <ul className="mt-3 space-y-2 text-sm text-[#1D4E7B]">
                    {(growthQuery.data?.growthOpportunities ?? []).map((item, index) => (
                      <li key={`${item}-${index}`} className="rounded-xl bg-[#F4FAFF] px-3 py-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm text-[#5F8DB5]">No disponible</p>
                )}
              </div>
            </div>
          </NeuroSurface>

          <NeuroSurface>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6ECFA] bg-[#EFF8FE] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0069B7]">
              <MessageCircle className="h-3.5 w-3.5" />
              Senales reales de mentores
            </div>

            <p className="text-sm text-[#33618D]">
              Mentor activo: <span className="font-semibold text-[#003D78]">{selectedMentor}</span> ·{' '}
              {mentorIdentity?.shortDescription ?? 'No disponible'}
            </p>

            <form className="mt-4 space-y-4" onSubmit={handleMentorSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#184A79]">Mentor</label>
                <select
                  value={selectedMentor}
                  onChange={(event) => setSelectedMentor(event.target.value)}
                  className="h-12 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
                >
                  {MENTORS.map((mentor) => (
                    <option key={mentor} value={mentor}>
                      {mentor}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#184A79]">Consulta para mentor</label>
                <textarea
                  value={mentorMessage}
                  onChange={(event) => setMentorMessage(event.target.value)}
                  placeholder="Escribe una consulta breve para este perfil"
                  className="min-h-28 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 py-3 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
                />
              </div>

              {mentorError ? <p className="text-sm text-rose-600">{mentorError}</p> : null}

              <button
                type="submit"
                disabled={!canAskMentor}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#0069B7] px-5 text-sm font-semibold text-white transition hover:bg-[#005c9f] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <WandSparkles className="h-4 w-4" />
                {mentorChatMutation.isPending ? 'Consultando...' : `Consultar a ${selectedMentor}`}
              </button>
            </form>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-[#DCEBFA] bg-white p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Respuesta (/mentor/chat)</p>
                <p className="mt-2 whitespace-pre-wrap text-sm text-[#1D4E7B]">{mentorResponse}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#DCEBFA] bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Growth score</p>
                  <p className="mt-2 text-2xl font-semibold text-[#003D78]">{mentorChatMutation.data?.growthScore ?? 'No disponible'}</p>
                </div>

                <div className="rounded-2xl border border-[#DCEBFA] bg-white p-4 sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Fortalezas</p>
                  <p className="mt-2 text-sm text-[#1D4E7B]">
                    {(mentorChatMutation.data?.topStrengths ?? []).length > 0
                      ? mentorChatMutation.data?.topStrengths.join(' | ')
                      : 'No disponible'}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Oportunidades</p>
                  <p className="mt-2 text-sm text-[#1D4E7B]">
                    {(mentorChatMutation.data?.growthOpportunities ?? []).length > 0
                      ? mentorChatMutation.data?.growthOpportunities.join(' | ')
                      : 'No disponible'}
                  </p>
                </div>
              </div>
            </div>
          </NeuroSurface>
        </div>
      </div>
    </NeurofamiliaMasterLayout>
  );
}