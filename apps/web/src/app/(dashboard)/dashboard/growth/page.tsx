'use client';

import { useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Activity, Sparkles, TrendingUp } from 'lucide-react';
import { NeurofamiliaMasterLayout } from '@/components/layout/neurofamilia-master-layout';
import { NeuroSurface } from '@/components/ui/neuro-surface';
import { api } from '@/lib/api';

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

function formatBirthDate(value: string) {
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

export default function GrowthPage() {
  const queryClient = useQueryClient();
  const [profileId, setProfileId] = useState('');
  const [category, setCategory] = useState<'strength' | 'opportunity'>('strength');
  const [note, setNote] = useState('');

  const profilesQuery = useQuery({ queryKey: ['profiles'], queryFn: api.listProfiles });

  const selectedProfile = useMemo(
    () => (profilesQuery.data ?? []).find((profile) => profile.id === profileId),
    [profilesQuery.data, profileId],
  );

  const reportQuery = useQuery({
    queryKey: ['growth-report', profileId],
    queryFn: () => api.getGrowthReport(profileId),
    enabled: Boolean(profileId),
  });

  const createObservationMutation = useMutation({
    mutationFn: api.createObservation,
    onSuccess: async () => {
      setNote('');
      await queryClient.invalidateQueries({ queryKey: ['growth-report', profileId] });
    },
  });

  const canCreateObservation = profileId.length > 0 && note.trim().length > 2 && !createObservationMutation.isPending;
  const profilesCount = profilesQuery.data?.length ?? 0;
  const strengthsCount = reportQuery.data?.topStrengths.length ?? 0;
  const opportunitiesCount = reportQuery.data?.growthOpportunities.length ?? 0;

  const profileError = profilesQuery.isError ? resolveErrorMessage(profilesQuery.error) : null;
  const reportError = reportQuery.isError ? resolveErrorMessage(reportQuery.error) : null;
  const observationError = createObservationMutation.isError ? resolveErrorMessage(createObservationMutation.error) : null;

  function handleCreateObservation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canCreateObservation) {
      return;
    }

    createObservationMutation.mutate({
      profileId,
      category,
      note: note.trim(),
      observedAt: new Date().toISOString(),
    });
  }

  return (
    <NeurofamiliaMasterLayout profileName="Comunidad activa" activeLabel="Growth">
      <div className="space-y-6 pb-10 pt-8 sm:space-y-8 sm:pt-10">
        <section className="rounded-[32px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(238,248,253,0.80))] p-6 shadow-[0_28px_80px_rgba(0,61,120,0.10)] sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0069B7]">
            <TrendingUp className="h-3.5 w-3.5" />
            Modulo Growth
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#002A68] [font-family:Nunito,ui-rounded,system-ui,sans-serif] sm:text-5xl">
            Una lectura humana del progreso, usando solo datos reales.
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#33618D] sm:text-base">
            Growth consolida reportes reales por perfil y registro de observaciones. Si un indicador no esta disponible desde backend,
            se muestra como No disponible y se preserva la coherencia del proceso.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <NeuroSurface className="bg-[#FFFFFF]/90 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Perfiles disponibles</p>
              <p className="mt-2 text-3xl font-semibold text-[#003D78]">{profilesCount}</p>
            </NeuroSurface>

            <NeuroSurface className="bg-[#FFFFFF]/90 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Fortalezas visibles</p>
              <p className="mt-2 text-3xl font-semibold text-[#003D78]">{profileId ? strengthsCount : 0}</p>
            </NeuroSurface>

            <NeuroSurface className="bg-[#FFFFFF]/90 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Oportunidades visibles</p>
              <p className="mt-2 text-3xl font-semibold text-[#003D78]">{profileId ? opportunitiesCount : 0}</p>
            </NeuroSurface>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <NeuroSurface>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6ECFA] bg-[#EFF8FE] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0069B7]">
              <Activity className="h-3.5 w-3.5" />
              Seleccion de perfil
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#184A79]">Perfil</label>
              <select
                value={profileId}
                onChange={(event) => setProfileId(event.target.value)}
                className="h-12 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
              >
                <option value="">Selecciona un perfil</option>
                {(profilesQuery.data ?? []).map((profile) => (
                  <option key={profile.id} value={profile.id}>
                    {profile.fullName} · {stageLabelFromValue(profile.developmentStage)}
                  </option>
                ))}
              </select>
            </div>

            {profileError ? <p className="mt-3 text-sm text-rose-600">{profileError}</p> : null}

            <div className="mt-4 rounded-2xl border border-[#DCEBFA] bg-[#F7FBFF] p-4 text-sm text-[#33618D]">
              <p>
                <span className="font-semibold text-[#003D78]">Nombre:</span> {selectedProfile?.fullName ?? 'No disponible'}
              </p>
              <p className="mt-1">
                <span className="font-semibold text-[#003D78]">Nacimiento:</span>{' '}
                {selectedProfile ? formatBirthDate(selectedProfile.birthDate) : 'No disponible'}
              </p>
              <p className="mt-1">
                <span className="font-semibold text-[#003D78]">Etapa:</span>{' '}
                {selectedProfile ? stageLabelFromValue(selectedProfile.developmentStage) : 'No disponible'}
              </p>
              <p className="mt-1">
                <span className="font-semibold text-[#003D78]">Familia ID:</span> {selectedProfile?.familyId ?? 'No disponible'}
              </p>
            </div>
          </NeuroSurface>

          <NeuroSurface>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6ECFA] bg-[#EFF8FE] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0069B7]">
              <Sparkles className="h-3.5 w-3.5" />
              Reporte de growth
            </div>

            {!profileId ? <p className="text-sm text-[#5F8DB5]">Selecciona un perfil para consultar su reporte.</p> : null}
            {profileId && reportQuery.isLoading ? <p className="text-sm text-[#5F8DB5]">Cargando...</p> : null}
            {reportError ? <p className="text-sm text-rose-600">{reportError}</p> : null}

            <div className="mt-4 rounded-2xl border border-[#DCEBFA] bg-[#F7FBFF] p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Growth Score</p>
              <p className="mt-2 text-4xl font-semibold text-[#003D78]">{profileId ? (reportQuery.data?.growthScore ?? 'No disponible') : 'No disponible'}</p>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#DCEBFA] bg-white p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Fortalezas</p>
                {(reportQuery.data?.topStrengths ?? []).length > 0 ? (
                  <ul className="mt-3 space-y-2 text-sm text-[#1D4E7B]">
                    {(reportQuery.data?.topStrengths ?? []).map((item, index) => (
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
                {(reportQuery.data?.growthOpportunities ?? []).length > 0 ? (
                  <ul className="mt-3 space-y-2 text-sm text-[#1D4E7B]">
                    {(reportQuery.data?.growthOpportunities ?? []).map((item, index) => (
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
        </div>

        <NeuroSurface>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6ECFA] bg-[#EFF8FE] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0069B7]">
            <Sparkles className="h-3.5 w-3.5" />
            Registrar observacion
          </div>

          <form className="grid gap-4" onSubmit={handleCreateObservation}>
            <div className="grid gap-4 md:grid-cols-[0.45fr_1fr]">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#184A79]">Categoria</label>
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value as 'strength' | 'opportunity')}
                  className="h-12 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
                >
                  <option value="strength">Fortaleza</option>
                  <option value="opportunity">Oportunidad</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#184A79]">Nota</label>
                <textarea
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  placeholder="Describe una observacion breve"
                  className="min-h-28 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 py-3 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
                />
              </div>
            </div>

            {observationError ? <p className="text-sm text-rose-600">{observationError}</p> : null}

            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-[#5F8DB5]">
                Si no existe perfil seleccionado o faltan datos, el registro se mantiene deshabilitado para no inventar relaciones.
              </p>
              <button
                type="submit"
                disabled={!canCreateObservation}
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#0069B7] px-5 text-sm font-semibold text-white transition hover:bg-[#005c9f] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {createObservationMutation.isPending ? 'Guardando...' : 'Guardar observacion'}
              </button>
            </div>
          </form>
        </NeuroSurface>
      </div>
    </NeurofamiliaMasterLayout>
  );
}
