'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { ArrowLeft, FileText } from 'lucide-react';
import { NeurofamiliaMasterLayout } from '@/components/layout/neurofamilia-master-layout';
import { NeuroSurface } from '@/components/ui/neuro-surface';
import { api } from '@/lib/api';

const tabs = ['Informacion', 'Growth', 'Observaciones', 'Conversaciones', 'Mentores'] as const;

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

function stageLabelFromValue(value?: string) {
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

export default function ExpedienteDetailPage() {
  const queryClient = useQueryClient();
  const params = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Informacion');
  const [observationCategory, setObservationCategory] = useState<'strength' | 'opportunity'>('strength');
  const [observationNote, setObservationNote] = useState('');
  const profileId = params.id;

  const profileQuery = useQuery({
    queryKey: ['profile', profileId],
    queryFn: () => api.getProfile(profileId),
  });

  const growthQuery = useQuery({
    queryKey: ['growth-report', profileId],
    queryFn: () => api.getGrowthReport(profileId),
  });

  const createObservationMutation = useMutation({
    mutationFn: api.createObservation,
    onSuccess: async () => {
      setObservationNote('');
      await queryClient.invalidateQueries({ queryKey: ['growth-report', profileId] });
    },
  });

  const profileError = profileQuery.isError ? resolveErrorMessage(profileQuery.error) : null;
  const growthError = growthQuery.isError ? resolveErrorMessage(growthQuery.error) : null;
  const observationError = createObservationMutation.isError ? resolveErrorMessage(createObservationMutation.error) : null;

  const canSubmitObservation = profileId.length > 0 && observationNote.trim().length > 2 && !createObservationMutation.isPending;

  function handleCreateObservation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmitObservation) {
      return;
    }

    createObservationMutation.mutate({
      profileId,
      category: observationCategory,
      note: observationNote.trim(),
      observedAt: new Date().toISOString(),
    });
  }

  const content = useMemo(() => {
    if (activeTab === 'Informacion') {
      return (
        <div className="space-y-3 text-sm text-[#1D4E7B]">
          <p>
            <span className="font-semibold text-[#003D78]">Nombre:</span> {profileQuery.data?.fullName ?? 'No disponible'}
          </p>
          <p>
            <span className="font-semibold text-[#003D78]">Etapa:</span> {stageLabelFromValue(profileQuery.data?.developmentStage)}
          </p>
          <p>
            <span className="font-semibold text-[#003D78]">Nacimiento:</span> {formatBirthDate(profileQuery.data?.birthDate)}
          </p>
          <p>
            <span className="font-semibold text-[#003D78]">ID familia:</span> {profileQuery.data?.familyId ?? 'No disponible'}
          </p>
          <p>
            <span className="font-semibold text-[#003D78]">ID persona:</span> {profileQuery.data?.personId ?? 'No disponible'}
          </p>
        </div>
      );
    }

    if (activeTab === 'Growth') {
      return (
        <div className="space-y-3 text-sm text-[#1D4E7B]">
          <p>
            <span className="font-semibold text-[#003D78]">Growth Score:</span> {growthQuery.data?.growthScore ?? 'No disponible'}
          </p>
          <p>
            <span className="font-semibold text-[#003D78]">Fortalezas:</span>{' '}
            {(growthQuery.data?.topStrengths ?? []).length > 0 ? growthQuery.data?.topStrengths.join(', ') : 'No disponible'}
          </p>
          <p>
            <span className="font-semibold text-[#003D78]">Oportunidades:</span>{' '}
            {(growthQuery.data?.growthOpportunities ?? []).length > 0
              ? growthQuery.data?.growthOpportunities.join(', ')
              : 'No disponible'}
          </p>
        </div>
      );
    }

    if (activeTab === 'Observaciones') {
      return (
        <div className="space-y-4">
          <p className="text-sm text-[#5F8DB5]">Registro real de observaciones usando el endpoint existente de growth.</p>

          <form className="space-y-3" onSubmit={handleCreateObservation}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#184A79]">Categoria</label>
              <select
                value={observationCategory}
                onChange={(event) => setObservationCategory(event.target.value as 'strength' | 'opportunity')}
                className="h-12 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
              >
                <option value="strength">Fortaleza</option>
                <option value="opportunity">Oportunidad</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#184A79]">Nota</label>
              <textarea
                value={observationNote}
                onChange={(event) => setObservationNote(event.target.value)}
                placeholder="Describe la observacion"
                className="min-h-28 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 py-3 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
              />
            </div>

            {observationError ? <p className="text-sm text-rose-600">{observationError}</p> : null}

            <button
              type="submit"
              disabled={!canSubmitObservation}
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#0069B7] px-5 text-sm font-semibold text-white transition hover:bg-[#005c9f] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {createObservationMutation.isPending ? 'Guardando...' : 'Guardar observacion'}
            </button>
          </form>
        </div>
      );
    }

    if (activeTab === 'Conversaciones') {
      return <p className="text-sm text-[#5F8DB5]">No disponible. Las conversaciones viven en el modulo Mentores.</p>;
    }

    return <p className="text-sm text-[#5F8DB5]">No disponible. La asignacion de mentor no existe en backend para este expediente.</p>;
  }, [
    activeTab,
    canSubmitObservation,
    createObservationMutation.isPending,
    growthQuery.data,
    handleCreateObservation,
    observationCategory,
    observationError,
    observationNote,
    profileId,
    profileQuery.data,
  ]);

  return (
    <NeurofamiliaMasterLayout profileName="Comunidad activa" activeLabel="Expedientes">
      <div className="space-y-6 pb-10 pt-8 sm:space-y-8 sm:pt-10">
        <section className="rounded-[32px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(238,248,253,0.80))] p-6 shadow-[0_28px_80px_rgba(0,61,120,0.10)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0069B7]">
                <FileText className="h-3.5 w-3.5" />
                Detalle de expediente
              </div>

              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#002A68] font-display sm:text-5xl">
                {profileQuery.data?.fullName ?? 'No disponible'}
              </h1>

              <p className="mt-4 text-sm leading-7 text-[#33618D] sm:text-base">
                Vista integral con datos reales de perfil y growth. Las secciones sin soporte backend se muestran en estado No disponible.
              </p>
            </div>

            <Link
              href="/dashboard/expedientes"
              className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:text-slate-950"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Expedientes
            </Link>
          </div>
        </section>

        <NeuroSurface>
          <div className="mb-4 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeTab === tab
                  ? 'bg-[#0069B7] text-white'
                  : 'bg-[#EFF6FC] text-[#33618D] hover:bg-[#DDF0FB] hover:text-[#003D78]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

          {profileError ? (
            <p className="mb-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{profileError}</p>
          ) : null}

          {growthError && activeTab === 'Growth' ? (
            <p className="mb-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{growthError}</p>
          ) : null}

          {(profileQuery.isLoading || (activeTab === 'Growth' && growthQuery.isLoading)) && !profileError ? (
            <p className="mb-4 text-sm text-[#5F8DB5]">Cargando...</p>
          ) : null}

        {content}
        </NeuroSurface>
      </div>
    </NeurofamiliaMasterLayout>
  );
}