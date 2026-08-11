'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ArrowRight, Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { NeurofamiliaMasterLayout } from '@/components/layout/neurofamilia-master-layout';
import { Input } from '@/components/ui/input';
import { api } from '@/lib/api';
import { buildPeopleIndex, describeRole } from '@/lib/personas';

export default function PersonasPage() {
  const [search, setSearch] = useState('');
  const [familyFilter, setFamilyFilter] = useState('all');
  const [stageFilter, setStageFilter] = useState('all');
  const familiesQuery = useQuery({ queryKey: ['families'], queryFn: api.listFamilies });
  const profilesQuery = useQuery({ queryKey: ['profiles'], queryFn: api.listProfiles });

  const people = useMemo(() => {
    const base = buildPeopleIndex(familiesQuery.data ?? [], profilesQuery.data ?? []);

    return base.filter((person) => {
      const matchesSearch = search
        ? person.fullName.toLowerCase().includes(search.toLowerCase()) || person.familyName.toLowerCase().includes(search.toLowerCase())
        : true;

      const matchesFamily = familyFilter === 'all' ? true : person.familyId === familyFilter;
      const matchesStage = stageFilter === 'all' ? true : person.developmentStage === stageFilter;

      return matchesSearch && matchesFamily && matchesStage;
    });
  }, [familiesQuery.data, familyFilter, profilesQuery.data, search, stageFilter]);

  const developmentStages = useMemo(
    () => Array.from(new Set(people.map((person) => person.developmentStage))).sort((left, right) => left.localeCompare(right, 'es')),
    [people],
  );

  const families = familiesQuery.data ?? [];

  const isLoading = familiesQuery.isLoading || profilesQuery.isLoading;

  const profileName = people[0]?.firstName ?? 'Comunidad activa';

  return (
    <NeurofamiliaMasterLayout profileName={profileName} activeLabel="Personas">
      <div className="space-y-8 pb-8">
        <section className="mt-8 overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,249,252,0.78))] p-6 shadow-[0_28px_80px_rgba(7,23,44,0.08)] backdrop-blur sm:mt-10 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-900">
              <Sparkles className="h-3.5 w-3.5" />
              Modulo Personas
            </div>
            <h1 className="max-w-4xl font-[family-name:var(--font-space)] text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Personas en una vista viva, no en una tabla administrativa.
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              La lista se construye con endpoints reales de familias y expedientes. El backend actual no expone una asignacion persistida de mentor por persona, por eso esa lectura queda marcada como no disponible.
            </p>
          </div>

          <Link
            href="/dashboard/personas/nueva"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#143d5c,#2f738f_55%,#3c8f8b)] px-6 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(31,82,113,0.22)] transition hover:-translate-y-0.5"
          >
            Nueva Persona
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-white/80 bg-white/65 p-4 shadow-[0_18px_50px_rgba(7,23,44,0.06)] sm:grid-cols-[1.2fr_0.8fr_0.8fr] sm:p-5">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar por nombre o familia"
              className="h-12 rounded-2xl border-white bg-white/80 pl-11"
            />
          </label>

          <label className="space-y-2 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 font-medium text-slate-700">
              <SlidersHorizontal className="h-4 w-4" />
              Familia
            </span>
            <select
              value={familyFilter}
              onChange={(event) => setFamilyFilter(event.target.value)}
              className="h-12 w-full rounded-2xl border border-white bg-white/80 px-4 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
            >
              <option value="all">Todas las familias</option>
              {families.map((family) => (
                <option key={family.id} value={family.id}>
                  {family.name}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 text-sm text-slate-600">
            <span className="font-medium text-slate-700">Etapa del desarrollo</span>
            <select
              value={stageFilter}
              onChange={(event) => setStageFilter(event.target.value)}
              className="h-12 w-full rounded-2xl border border-white bg-white/80 px-4 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
            >
              <option value="all">Todas las etapas</option>
              {developmentStages.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          </label>
        </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[320px] animate-pulse rounded-[1.9rem] border border-white/70 bg-white/55 shadow-[0_18px_50px_rgba(7,23,44,0.06)]"
                />
              ))
            : people.map((person) => (
                <article
                  key={person.id}
                  className="group rounded-[1.9rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(245,250,252,0.7))] p-5 shadow-[0_18px_50px_rgba(7,23,44,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,23,44,0.10)] sm:p-6"
                >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{describeRole(person.role)}</p>
                    <h2 className="mt-2 font-[family-name:var(--font-space)] text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                      {person.fullName}
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">{person.familyName}</p>
                  </div>
                  <div className="rounded-full border border-white/80 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-900">
                    {person.ageLabel}
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-[1.4rem] border border-white/70 bg-white/65 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Etapa del desarrollo</p>
                    <p className="mt-2 text-sm font-medium text-slate-800">{person.developmentStage}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-white/70 bg-white/65 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Mentor asignado</p>
                      <p className="mt-2 text-sm font-medium text-slate-800">{person.mentorAssignedLabel}</p>
                    </div>

                    <div className="rounded-[1.4rem] border border-white/70 bg-white/65 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Expediente</p>
                      <p className="mt-2 text-sm font-medium text-slate-800">
                        {person.profileId ? 'Disponible' : 'Pendiente de crear'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/dashboard/personas/${person.id}`}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/80 bg-white/80 px-5 text-sm font-semibold text-slate-800 transition group-hover:bg-white"
                  >
                    Ver perfil
                  </Link>
                  {person.profileId ? (
                    <Link
                      href={`/dashboard/expedientes/${person.profileId}`}
                      className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Abrir expediente
                    </Link>
                  ) : null}
                </div>
                </article>
              ))}
        </section>

        {!isLoading && people.length === 0 ? (
          <section className="rounded-[2rem] border border-dashed border-slate-300 bg-white/55 p-10 text-center shadow-[0_18px_50px_rgba(7,23,44,0.04)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Sin coincidencias</p>
            <h2 className="mt-3 font-[family-name:var(--font-space)] text-3xl font-semibold tracking-[-0.03em] text-slate-950">
              No hay personas que coincidan con esta lectura.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
              Ajusta la busqueda, cambia los filtros o registra una nueva persona para seguir construyendo el ecosistema.
            </p>
          </section>
        ) : null}
      </div>
    </NeurofamiliaMasterLayout>
  );
}