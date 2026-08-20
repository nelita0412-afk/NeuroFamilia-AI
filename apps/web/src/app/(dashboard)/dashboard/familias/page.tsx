'use client';

import { useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Home, Sparkles, UsersRound } from 'lucide-react';
import { NeurofamiliaMasterLayout } from '@/components/layout/neurofamilia-master-layout';
import { NeuroSurface } from '@/components/ui/neuro-surface';
import { api } from '@/lib/api';
import { describeRole } from '@/lib/personas';

const RELATIONSHIP_OPTIONS = [
  'CHILD',
  'ADOLESCENT',
  'YOUNG',
  'MOTHER',
  'FATHER',
  'TUTOR',
  'PROFESSIONAL',
  'CAREGIVER',
  'SIBLING',
  'OTHER',
] as const;

const RELATIONSHIP_LABELS: Record<(typeof RELATIONSHIP_OPTIONS)[number], string> = {
  CHILD: 'Hijo/a',
  ADOLESCENT: 'Adolescente',
  YOUNG: 'Joven',
  MOTHER: 'Madre',
  FATHER: 'Padre',
  TUTOR: 'Tutor',
  PROFESSIONAL: 'Profesional',
  CAREGIVER: 'Cuidador/a',
  SIBLING: 'Hermano/a',
  OTHER: 'Otro',
};

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

export default function FamiliasPage() {
  const queryClient = useQueryClient();
  const [familyName, setFamilyName] = useState('');
  const [targetFamilyId, setTargetFamilyId] = useState('');
  const [targetPersonId, setTargetPersonId] = useState('');
  const [relationship, setRelationship] = useState<(typeof RELATIONSHIP_OPTIONS)[number]>('CHILD');

  const familiesQuery = useQuery({ queryKey: ['families'], queryFn: api.listFamilies });
  const profilesQuery = useQuery({ queryKey: ['profiles'], queryFn: api.listProfiles });

  const createFamilyMutation = useMutation({
    mutationFn: api.createFamily,
    onSuccess: async (family) => {
      setFamilyName('');
      setTargetFamilyId(family.id);
      await queryClient.invalidateQueries({ queryKey: ['families'] });
    },
  });

  const addMemberMutation = useMutation({
    mutationFn: (payload: { familyId: string; personId: string; relationship: string }) =>
      api.addFamilyMember(payload.familyId, {
        personId: payload.personId,
        relationship: payload.relationship,
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['families'] });
      setTargetPersonId('');
    },
  });

  const peopleOptions = useMemo(() => {
    const source = profilesQuery.data ?? [];
    const unique = new Map<string, { personId: string; label: string }>();

    for (const profile of source) {
      if (!profile.personId || unique.has(profile.personId)) {
        continue;
      }

      unique.set(profile.personId, {
        personId: profile.personId,
        label: `${profile.fullName} · ${profile.developmentStage || 'No disponible'}`,
      });
    }

    return Array.from(unique.values()).sort((left, right) => left.label.localeCompare(right.label, 'es'));
  }, [profilesQuery.data]);

  const hasFamilies = (familiesQuery.data?.length ?? 0) > 0;

  const totalMembers = (familiesQuery.data ?? []).reduce((total, family) => total + family.members.length, 0);

  const createFamilyError = createFamilyMutation.isError ? resolveErrorMessage(createFamilyMutation.error) : null;
  const addMemberError = addMemberMutation.isError ? resolveErrorMessage(addMemberMutation.error) : null;

  const canCreateFamily = familyName.trim().length >= 3 && !createFamilyMutation.isPending;
  const canAddMember =
    targetFamilyId.length > 0 && targetPersonId.length > 0 && relationship.length > 0 && !addMemberMutation.isPending;

  function handleCreateFamily(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canCreateFamily) {
      return;
    }

    createFamilyMutation.mutate({ name: familyName.trim() });
  }

  function handleAddMember(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canAddMember) {
      return;
    }

    addMemberMutation.mutate({
      familyId: targetFamilyId,
      personId: targetPersonId,
      relationship,
    });
  }

  return (
    <NeurofamiliaMasterLayout profileName="Comunidad activa" activeLabel="Familias">
      <div className="space-y-6 pb-10 pt-8 sm:space-y-8 sm:pt-10">
        <section className="rounded-[32px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(238,248,253,0.80))] p-6 shadow-[0_28px_80px_rgba(0,61,120,0.10)] sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0069B7]">
            <Home className="h-3.5 w-3.5" />
            Modulo Familias
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#002A68] font-display sm:text-5xl">
            Vinculos familiares reales, en una lectura clara y accionable.
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#33618D] sm:text-base">
            Esta vista usa solamente endpoints existentes de backend para listar familias, crear nuevas y agregar miembros.
            Si un dato no existe todavia en backend, se muestra como estado vacio o No disponible.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <NeuroSurface className="bg-[#FFFFFF]/90 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Familias activas</p>
              <p className="mt-2 text-3xl font-semibold text-[#003D78]">{familiesQuery.data?.length ?? 0}</p>
            </NeuroSurface>

            <NeuroSurface className="bg-[#FFFFFF]/90 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Miembros vinculados</p>
              <p className="mt-2 text-3xl font-semibold text-[#003D78]">{totalMembers}</p>
            </NeuroSurface>

            <NeuroSurface className="bg-[#FFFFFF]/90 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Personas disponibles</p>
              <p className="mt-2 text-3xl font-semibold text-[#003D78]">{peopleOptions.length}</p>
            </NeuroSurface>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <NeuroSurface>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6ECFA] bg-[#EFF8FE] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0069B7]">
              <Sparkles className="h-3.5 w-3.5" />
              Crear familia
            </div>

            <form className="space-y-4" onSubmit={handleCreateFamily}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#184A79]">Nombre de familia</label>
                <input
                  value={familyName}
                  onChange={(event) => setFamilyName(event.target.value)}
                  placeholder="Familia Andrade"
                  className="h-12 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
                />
              </div>

              {createFamilyError ? <p className="text-sm text-rose-600">{createFamilyError}</p> : null}

              <button
                type="submit"
                disabled={!canCreateFamily}
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#0069B7] px-5 text-sm font-semibold text-white transition hover:bg-[#005c9f] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {createFamilyMutation.isPending ? 'Creando...' : 'Crear familia'}
              </button>
            </form>
          </NeuroSurface>

          <NeuroSurface>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6ECFA] bg-[#EFF8FE] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0069B7]">
              <UsersRound className="h-3.5 w-3.5" />
              Agregar miembro
            </div>

            <form className="space-y-4" onSubmit={handleAddMember}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#184A79]">Familia destino</label>
                <select
                  value={targetFamilyId}
                  onChange={(event) => setTargetFamilyId(event.target.value)}
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

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#184A79]">Persona disponible</label>
                <select
                  value={targetPersonId}
                  onChange={(event) => setTargetPersonId(event.target.value)}
                  className="h-12 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
                  disabled={peopleOptions.length === 0}
                >
                  <option value="">{peopleOptions.length > 0 ? 'Selecciona una persona' : 'No disponible'}</option>
                  {peopleOptions.map((person) => (
                    <option key={person.personId} value={person.personId}>
                      {person.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#184A79]">Relacion</label>
                <select
                  value={relationship}
                  onChange={(event) => setRelationship(event.target.value as (typeof RELATIONSHIP_OPTIONS)[number])}
                  className="h-12 w-full rounded-2xl border border-[#D7EAF8] bg-white px-4 text-sm text-[#003D78] outline-none transition focus:border-[#00BDEB] focus:ring-2 focus:ring-[#C7F0FA]"
                >
                  {RELATIONSHIP_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {RELATIONSHIP_LABELS[option]}
                    </option>
                  ))}
                </select>
              </div>

              {addMemberError ? <p className="text-sm text-rose-600">{addMemberError}</p> : null}

              <button
                type="submit"
                disabled={!canAddMember}
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#0069B7] px-5 text-sm font-semibold text-white transition hover:bg-[#005c9f] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {addMemberMutation.isPending ? 'Guardando...' : 'Agregar miembro'}
              </button>
            </form>
          </NeuroSurface>
        </div>

        <NeuroSurface>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#002A68] font-display">
              Familias registradas
            </h2>
            {familiesQuery.isLoading ? <p className="text-sm text-[#5F8DB5]">Cargando...</p> : null}
          </div>

          {familiesQuery.isError ? (
            <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {resolveErrorMessage(familiesQuery.error)}
            </p>
          ) : null}

          {!familiesQuery.isLoading && !familiesQuery.isError && !hasFamilies ? (
            <div className="rounded-3xl border border-dashed border-[#C9DFF0] bg-[#F7FBFF] px-6 py-10 text-center">
              <p className="text-lg font-semibold text-[#003D78]">No hay familias todavia.</p>
              <p className="mt-2 text-sm text-[#5F8DB5]">Crea la primera familia para comenzar a vincular personas.</p>
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            {(familiesQuery.data ?? []).map((family) => (
              <article key={family.id} className="rounded-3xl border border-[#DBEBF8] bg-[#FAFDFF] p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-[#003D78] font-display">{family.name}</h3>
                    <p className="mt-1 text-xs text-[#5F8DB5]">ID: {family.id}</p>
                  </div>
                  <span className="rounded-full bg-[#E7F6FD] px-3 py-1 text-xs font-semibold text-[#0069B7]">
                    {family.members.length} miembro{family.members.length === 1 ? '' : 's'}
                  </span>
                </div>

                <p className="mt-3 text-xs text-[#5F8DB5]">
                  Creada:{' '}
                  {new Intl.DateTimeFormat('es-EC', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  }).format(new Date(family.createdAt))}
                </p>

                {family.members.length === 0 ? (
                  <p className="mt-4 rounded-2xl border border-dashed border-[#CEE2F1] bg-white px-4 py-3 text-sm text-[#5F8DB5]">
                    No disponible
                  </p>
                ) : (
                  <ul className="mt-4 space-y-2">
                    {family.members.map((member) => (
                      <li key={member.id} className="rounded-2xl bg-white px-4 py-3 text-sm text-[#1D4E7B]">
                        <p className="font-semibold">
                          {member.person.firstName} {member.person.lastName}
                        </p>
                        <p className="text-xs text-[#5F8DB5]">
                          {RELATIONSHIP_LABELS[member.relationship as (typeof RELATIONSHIP_OPTIONS)[number]] ?? member.relationship} ·{' '}
                          {describeRole(member.person.role)}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </NeuroSurface>
      </div>
    </NeurofamiliaMasterLayout>
  );
}