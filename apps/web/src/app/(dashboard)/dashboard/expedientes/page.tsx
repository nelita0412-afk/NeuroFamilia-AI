'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FileText, Sparkles } from 'lucide-react';
import { NeurofamiliaMasterLayout } from '@/components/layout/neurofamilia-master-layout';
import { NeuroSurface } from '@/components/ui/neuro-surface';
import { api } from '@/lib/api';

const STAGE_OPTIONS = [
  { value: 'EARLY_CHILDHOOD', label: 'Primera infancia' },
  { value: 'MIDDLE_CHILDHOOD', label: 'Infancia media' },
  { value: 'ADOLESCENCE', label: 'Adolescencia' },
] as const;

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
  return STAGE_OPTIONS.find((item) => item.value === value)?.label ?? 'No disponible';
}

export default function ExpedientesPage() {
  const queryClient = useQueryClient();
  const [familyId, setFamilyId] = useState('');
  const [personId, setPersonId] = useState('');
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [developmentStage, setDevelopmentStage] = useState<(typeof STAGE_OPTIONS)[number]['value']>('EARLY_CHILDHOOD');

  const profilesQuery = useQuery({ queryKey: ['profiles'], queryFn: api.listProfiles });
  const familiesQuery = useQuery({ queryKey: ['families'], queryFn: api.listFamilies });

  const createProfileMutation = useMutation({
    mutationFn: api.createProfile,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['profiles'] });
      setPersonId('');
      setFullName('');
      setBirthDate('');
      setDevelopmentStage('EARLY_CHILDHOOD');
    },
  });

  const selectedFamily = useMemo(
    () => (familiesQuery.data ?? []).find((family) => family.id === familyId),
    [familiesQuery.data, familyId],
  );

  const personOptions = useMemo(() => {
    if (!selectedFamily) {
      return [];
    }

    return selectedFamily.members.map((member) => ({
      id: member.person.id,
      label: `${member.person.firstName} ${member.person.lastName}`.trim(),
    }));
  }, [selectedFamily]);

  const formIsValid = familyId.length > 0 && fullName.trim().length >= 3 && birthDate.length > 0 && !createProfileMutation.isPending;
  const createError = createProfileMutation.isError ? resolveErrorMessage(createProfileMutation.error) : null;
  const hasProfiles = (profilesQuery.data?.length ?? 0) > 0;

  function handleCreateProfile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    createProfileMutation.mutate({
      familyId,
      personId: personId || undefined,
      fullName: fullName.trim(),
      birthDate,
      developmentStage,
    });
  }

  return (
    <NeurofamiliaMasterLayout profileName="Comunidad activa" activeLabel="Expedientes">
      <div className="space-y-6 pb-10 pt-8 sm:space-y-8 sm:pt-10">
        <section className="rounded-[32px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(238,248,253,0.80))] p-6 shadow-[0_28px_80px_rgba(0,61,120,0.10)] sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0069B7]">
            <FileText className="h-3.5 w-3.5" />
            Modulo Expedientes
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#002A68] [font-family:Nunito,ui-rounded,system-ui,sans-serif] sm:text-5xl">
            Seguimiento personal con datos vivos del backend.
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#33618D] sm:text-base">
            Esta vista consume solo endpoints existentes para crear y consultar expedientes. Si una relacion no existe en backend,
            se muestra como No disponible y el flujo continua sin inventar estructura.
          </p>
        </section>

        <NeuroSurface>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6ECFA] bg-[#EFF8FE] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0069B7]">
            <Sparkles className="h-3.5 w-3.5" />
            Crear expediente
          </div>

          <form className="grid gap-4 md:grid-cols-2" onSubmit={handleCreateProfile}>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-[#184A79]">Familia</label>
              <select
                value={familyId}
                onChange={(event) => {
                  setFamilyId(event.target.value);
                  setPersonId('');
                }}
                className="h-12 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
              >
                <option value="">Selecciona una familia</option>
                {(familiesQuery.data ?? []).map((family) => (
                  <option key={family.id} value={family.id}>
                    {family.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-[#184A79]">Persona vinculada (opcional)</label>
              <select
                value={personId}
                onChange={(event) => setPersonId(event.target.value)}
                disabled={!selectedFamily || personOptions.length === 0}
                className="h-12 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <option value="">{personOptions.length > 0 ? 'Sin vinculacion por ahora' : 'No disponible'}</option>
                {personOptions.map((person) => (
                  <option key={person.id} value={person.id}>
                    {person.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#184A79]">Nombre completo</label>
              <input
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Sofia Andrade"
                className="h-12 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#184A79]">Fecha de nacimiento</label>
              <input
                type="date"
                value={birthDate}
                onChange={(event) => setBirthDate(event.target.value)}
                className="h-12 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-[#184A79]">Etapa del desarrollo</label>
              <select
                value={developmentStage}
                onChange={(event) => setDevelopmentStage(event.target.value as (typeof STAGE_OPTIONS)[number]['value'])}
                className="h-12 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
              >
                {STAGE_OPTIONS.map((stage) => (
                  <option key={stage.value} value={stage.value}>
                    {stage.label}
                  </option>
                ))}
              </select>
            </div>

            {createError ? <p className="md:col-span-2 text-sm text-rose-600">{createError}</p> : null}

            <button
              type="submit"
              disabled={!formIsValid}
              className="md:col-span-2 inline-flex h-11 items-center justify-center rounded-full bg-[#0069B7] px-5 text-sm font-semibold text-white transition hover:bg-[#005c9f] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {createProfileMutation.isPending ? 'Creando...' : 'Crear expediente'}
            </button>
          </form>
        </NeuroSurface>

        <NeuroSurface>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#002A68] [font-family:Nunito,ui-rounded,system-ui,sans-serif]">
              Listado de expedientes
            </h2>
            {profilesQuery.isLoading ? <p className="text-sm text-[#5F8DB5]">Cargando...</p> : null}
          </div>

          {profilesQuery.isError ? (
            <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {resolveErrorMessage(profilesQuery.error)}
            </p>
          ) : null}

          {!profilesQuery.isLoading && !profilesQuery.isError && !hasProfiles ? (
            <div className="rounded-3xl border border-dashed border-[#C9DFF0] bg-[#F7FBFF] px-6 py-10 text-center">
              <p className="text-lg font-semibold text-[#003D78]">No hay expedientes todavia.</p>
              <p className="mt-2 text-sm text-[#5F8DB5]">Crea el primer expediente para iniciar el seguimiento.</p>
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            {(profilesQuery.data ?? []).map((profile) => (
              <Link
                key={profile.id}
                href={`/dashboard/expedientes/${profile.id}`}
                className="rounded-3xl border border-[#DBEBF8] bg-[#FAFDFF] p-5 transition hover:border-[#00BDEB] hover:bg-white"
              >
                <p className="text-xl font-semibold text-[#003D78] [font-family:Nunito,ui-rounded,system-ui,sans-serif]">
                  {profile.fullName}
                </p>
                <p className="mt-2 text-sm text-[#5F8DB5]">{stageLabelFromValue(profile.developmentStage)}</p>
                <p className="mt-1 text-sm text-[#5F8DB5]">Nacimiento: {formatBirthDate(profile.birthDate)}</p>
                <p className="mt-3 text-xs text-[#7A9AB8]">ID: {profile.id}</p>
              </Link>
            ))}
          </div>
        </NeuroSurface>
      </div>
    </NeurofamiliaMasterLayout>
  );
}