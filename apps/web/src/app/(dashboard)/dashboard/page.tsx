'use client';

import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { NeurofamiliaMasterLayout } from '@/components/layout/neurofamilia-master-layout';
import { NeuroSurface } from '@/components/ui/neuro-surface';
import { api } from '@/lib/api';
import { MENTORS } from '@/lib/constants';
import { MENTOR_IDENTITY } from '@/lib/mentor-identity';

function getGreetingName(rawName: string | undefined) {
  if (!rawName) {
    return 'familia';
  }

  return rawName.split(' ')[0] ?? 'familia';
}

function getTimeGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return 'Buenos dias';
  }

  if (hour < 19) {
    return 'Buenas tardes';
  }

  return 'Buenas noches';
}

function getTodayLabel() {
  return new Intl.DateTimeFormat('es-EC', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  }).format(new Date());
}

type Resource = {
  title: string;
  type: string;
  detail: string;
};

type Activity = {
  title: string;
  time: string;
  detail: string;
};

type QuickLink = {
  title: string;
  subtitle: string;
  href: string;
};

export default function DashboardPage() {
  const profilesQuery = useQuery({ queryKey: ['profiles'], queryFn: api.listProfiles });
  const familiesQuery = useQuery({ queryKey: ['families'], queryFn: api.listFamilies });

  const primaryProfileId = profilesQuery.data?.[0]?.id;

  const growthReportQuery = useQuery({
    queryKey: ['growth-report', primaryProfileId],
    queryFn: () => api.getGrowthReport(primaryProfileId as string),
    enabled: Boolean(primaryProfileId),
  });

  const recommendedMentor = useMemo(() => {
    const score = growthReportQuery.data?.growthScore;
    const opportunities = growthReportQuery.data?.growthOpportunities.length ?? 0;

    if (typeof score !== 'number') {
      return MENTORS[0];
    }

    if (score < 55 || opportunities >= 3) {
      return 'ALBA';
    }

    if (score < 70) {
      return 'NIA';
    }

    return 'LEO';
  }, [growthReportQuery.data?.growthOpportunities.length, growthReportQuery.data?.growthScore]);

  const greetingName = getGreetingName(profilesQuery.data?.[0]?.fullName ?? familiesQuery.data?.[0]?.name);

  const profileName = useMemo(() => {
    if (!greetingName || greetingName === 'familia') {
      return 'Comunidad activa';
    }

    return greetingName;
  }, [greetingName]);

  const resources: Resource[] = [
    { title: 'Guia breve para conversaciones de confianza', type: 'Lectura', detail: '8 min • Familia' },
    { title: `Ritual de cierre del dia con ${recommendedMentor.toLowerCase()}`, type: 'Audio', detail: '6 min • Bienestar' },
    { title: 'Checklist semanal de crecimiento', type: 'Plantilla', detail: 'Editable • Growth' },
  ];

  const activity: Activity[] = useMemo(() => {
    const profileEvents = (profilesQuery.data ?? []).map((profile) => ({
      title: `Expediente activo: ${profile.fullName}`,
      time: new Intl.DateTimeFormat('es-EC', { day: '2-digit', month: 'short' }).format(new Date(profile.birthDate)),
      detail: profile.developmentStage,
      timestamp: profile.birthDate,
    }));

    const familyEvents = (familiesQuery.data ?? []).map((family) => ({
      title: `Familia registrada: ${family.name}`,
      time: new Intl.DateTimeFormat('es-EC', { day: '2-digit', month: 'short' }).format(new Date(family.createdAt)),
      detail: `${family.members.length} miembros vinculados`,
      timestamp: family.createdAt,
    }));

    return [...profileEvents, ...familyEvents]
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 3)
      .map(({ title, time, detail }) => ({ title, time, detail }));
  }, [familiesQuery.data, profilesQuery.data]);

  const quickLinks: QuickLink[] = [
    { title: 'Personas', subtitle: 'Perfiles y bienestar personal', href: '/dashboard/personas' },
    { title: 'Familias', subtitle: 'Vinculos, acuerdos y rutinas', href: '/dashboard/familias' },
    { title: 'Expedientes', subtitle: 'Evidencias y seguimiento', href: '/dashboard/expedientes' },
    { title: 'Growth', subtitle: 'Ruta y logros evolutivos', href: '/dashboard/growth' },
  ];

  const growthStages = ['Diagnostico sensible', 'Ritmo diario compartido', 'Consolidacion y expansion'];

  const greeting = `${getTimeGreeting()}, ${greetingName}. Hoy seguimos creciendo juntos.`;
  const mentorTagline = MENTOR_IDENTITY[recommendedMentor].tagline;

  return (
    <NeurofamiliaMasterLayout profileName={profileName}>
      <section className="mt-8 sm:mt-10">
        <p className="text-xs uppercase tracking-[0.16em] text-[#008CC7]">{getTodayLabel()}</p>
        <h1 className="mt-3 max-w-3xl text-3xl leading-tight text-[#002A68] [font-family:Nunito,ui-rounded,system-ui,sans-serif] sm:text-4xl lg:text-[42px]">
          {greeting}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-[#0069B7] sm:text-lg">
          Un espacio premium y sereno para acompanar el bienestar familiar con intencion, constancia y evidencia sensible.
        </p>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-3">
        <article className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#008CC7] via-[#0069B7] to-[#003D78] p-6 text-white shadow-[0_24px_52px_rgba(0,61,120,0.32)] sm:p-8 lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.15em] text-[#DDF5FC]">Mentor {recommendedMentor}</p>
          <h2 className="mt-3 max-w-xl text-2xl leading-tight [font-family:Nunito,ui-rounded,system-ui,sans-serif] sm:text-3xl">
            {mentorTagline}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-[#DDF5FC] sm:text-base">
            Activa una practica breve para alinear emociones, habitos y metas de crecimiento con acompanamiento sensible.
          </p>
          <Link
            href="/dashboard/mentores"
            className="mt-6 inline-flex w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#003D78] shadow-[0_10px_24px_rgba(255,255,255,0.25)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
          >
            Iniciar practica con {recommendedMentor}
          </Link>

          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-6 -top-8 h-44 w-44 rounded-full border border-white/35" />
            <div className="absolute right-10 top-12 h-24 w-24 rounded-full border-2 border-[#00BDEB]/60" />
            <div className="absolute right-24 top-20 h-3 w-3 rounded-full bg-white/80" />
            <div className="absolute right-16 top-28 h-2 w-2 rounded-full bg-[#00BDEB]" />
            <div className="absolute bottom-8 right-8 h-20 w-28 rotate-12 rounded-[42%] border border-white/40" />
            <div className="absolute bottom-10 right-12 h-12 w-16 -rotate-6 rounded-[48%] border border-[#DDF5FC]/60" />
          </div>
        </article>

        <aside className="rounded-[26px] bg-white p-6 shadow-[0_18px_40px_rgba(0,61,120,0.12)] transition-transform duration-200 hover:-translate-y-0.5 sm:p-7">
          <p className="text-xs uppercase tracking-[0.14em] text-[#008CC7]">Ritmo diario</p>
          <h3 className="mt-3 text-xl text-[#002A68] [font-family:Nunito,ui-rounded,system-ui,sans-serif]">Tu compas de hoy</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#0069B7]">
            <li className="flex items-center justify-between rounded-xl bg-[#F7FBFD] px-3 py-2">
              <span>Chequeo emocional</span>
              <span className="font-medium text-[#003D78]">08:30</span>
            </li>
            <li className="flex items-center justify-between rounded-xl bg-[#F7FBFD] px-3 py-2">
              <span>Micro practica {recommendedMentor}</span>
              <span className="font-medium text-[#003D78]">12:00</span>
            </li>
            <li className="flex items-center justify-between rounded-xl bg-[#F7FBFD] px-3 py-2">
              <span>Cierre en familia</span>
              <span className="font-medium text-[#003D78]">19:30</span>
            </li>
          </ul>
        </aside>
      </section>

      <NeuroSurface className="mt-10 rounded-[28px] shadow-[0_18px_38px_rgba(0,61,120,0.10)]">
        <h3 className="text-xl text-[#002A68] [font-family:Nunito,ui-rounded,system-ui,sans-serif]">Ruta de crecimiento</h3>
        <ol className="mt-5 hidden items-center gap-3 md:flex">
          {growthStages.map((stage, index) => (
            <li key={stage} className="flex flex-1 items-center gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#DDF5FC] text-sm font-semibold text-[#003D78]">
                {index + 1}
              </div>
              <p className="text-sm text-[#0069B7]">{stage}</p>
              {index < growthStages.length - 1 ? (
                <div className="h-px flex-1 bg-gradient-to-r from-[#00BDEB] to-[#DDF5FC]" />
              ) : null}
            </li>
          ))}
        </ol>
        <ol className="mt-4 space-y-3 md:hidden">
          {growthStages.map((stage, index) => (
            <li key={stage} className="flex items-start gap-3 rounded-2xl bg-[#F7FBFD] px-3 py-3">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#DDF5FC] text-xs font-semibold text-[#003D78]">
                {index + 1}
              </div>
              <p className="pt-1 text-sm text-[#0069B7]">{stage}</p>
            </li>
          ))}
        </ol>
      </NeuroSurface>

      <section className="mt-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl text-[#002A68] [font-family:Nunito,ui-rounded,system-ui,sans-serif] sm:text-3xl">
              Archipiélago de Mentores
            </h3>
            <p className="mt-2 max-w-xl text-sm text-[#0069B7] sm:text-base">
              Conoce a tus 8 mentores, cada uno con un superpoder único para acompañarte.
            </p>
          </div>
          <p className="hidden shrink-0 rounded-full bg-[#EAF8FE] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#0069B7] sm:block">
            8 mentores, infinitas posibilidades
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MENTORS.map((mentor) => {
            const identity = MENTOR_IDENTITY[mentor];

            return (
              <article
                key={mentor}
                className="flex flex-col items-center rounded-[32px] bg-white p-6 text-center shadow-[0_18px_40px_rgba(0,61,120,0.12)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[24px] bg-[#F3FAFE]">
                  {/* Se muestra solo el lado derecho de la ilustracion (donde vive el personaje), recortando el panel de texto del poster original. */}
                  <img
                    src={identity.imageUrl}
                    alt={`Mentor ${mentor}`}
                    className="absolute inset-0 h-full w-full object-cover object-right"
                  />
                </div>
                <h4 className="mt-5 text-lg text-[#002A68] [font-family:Nunito,ui-rounded,system-ui,sans-serif]">{mentor}</h4>
                <p className="mt-1 text-sm text-[#0069B7]">{identity.specialty}</p>
                <Link
                  href={`/dashboard/mentores?mentor=${mentor}`}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-[#0069B7] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#003D78]"
                >
                  Conversar
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <NeuroSurface>
          <h3 className="text-xl text-[#002A68] [font-family:Nunito,ui-rounded,system-ui,sans-serif]">Recursos recomendados</h3>
          <ul className="mt-4 space-y-3">
            {resources.map((item) => (
              <li key={item.title} className="rounded-2xl bg-[#F7FBFD] px-4 py-3">
                <p className="text-sm font-semibold text-[#003D78]">{item.title}</p>
                <p className="mt-1 text-xs text-[#008CC7]">
                  {item.type} • {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </NeuroSurface>

        <NeuroSurface>
          <h3 className="text-xl text-[#002A68] [font-family:Nunito,ui-rounded,system-ui,sans-serif]">Actividad reciente</h3>
          <ul className="mt-4 space-y-3">
            {activity.map((item) => (
              <li key={item.title} className="rounded-2xl bg-[#F7FBFD] px-4 py-3">
                <p className="text-sm font-semibold text-[#003D78]">{item.title}</p>
                <p className="mt-1 text-xs text-[#0069B7]">{item.detail}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#00BDEB]">{item.time}</p>
              </li>
            ))}
          </ul>
        </NeuroSurface>
      </section>

      <section className="mt-10">
        <h3 className="text-xl text-[#002A68] [font-family:Nunito,ui-rounded,system-ui,sans-serif]">Accesos rapidos</h3>
        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-2xl bg-white p-4 shadow-[0_14px_28px_rgba(0,61,120,0.10)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(0,61,120,0.14)]"
            >
              <p className="text-sm font-semibold text-[#003D78]">{item.title}</p>
              <p className="mt-1 text-xs text-[#0069B7]">{item.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-10 border-t border-[#DDF5FC] pt-5">
        <p className="text-sm text-[#008CC7]">NeuroFamilia Galapagos • Cuidamos procesos humanos con calma, ciencia y comunidad.</p>
      </footer>
    </NeurofamiliaMasterLayout>
  );
}