'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  Building2,
  Globe,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Lock,
  MonitorSmartphone,
  Rocket,
  TrendingUp,
  Users,
} from 'lucide-react';

/* ── 1. QUIÉNES SOMOS · Ecosistema ─────────────────────────── */

/* Pentágono uniforme alrededor del centro (50,50) */
const NODES = [
  { icon: Brain, label: 'Salud Mental', position: 'lg:left-[50%] lg:top-[8%]' },
  { icon: Users, label: 'Familias', position: 'lg:left-[85%] lg:top-[30%]' },
  { icon: MonitorSmartphone, label: 'Tecnología', position: 'lg:left-[72%] lg:top-[78%]' },
  { icon: Lightbulb, label: 'Innovación Social', position: 'lg:left-[28%] lg:top-[78%]' },
  { icon: Globe, label: 'Comunidad', position: 'lg:left-[15%] lg:top-[30%]' },
];

const ECOSYSTEM_LINES = [
  'M50,50 L50,8',
  'M50,50 L85,30',
  'M50,50 L72,78',
  'M50,50 L28,78',
  'M50,50 L15,30',
];

/* Pilares institucionales (franja Quiénes Somos) */
const PILLARS = ['Ciencia', 'Salud Mental', 'Desarrollo Humano', 'Innovación Social'];

/* ── 3. NUESTRA HISTORIA · Resumen en tres actos ───────────── */

const ORIGIN_ACTS = [
  {
    number: '01',
    title: 'El contexto',
    detail: 'Vivir en una isla implica oportunidades y desafíos únicos.',
  },
  {
    number: '02',
    title: 'La necesidad',
    detail:
      'El acceso a especialistas en salud mental es limitado y las familias necesitan acompañamiento cercano y continuo.',
  },
  {
    number: '03',
    title: 'La respuesta',
    detail:
      'En septiembre de 2025 nace NeuroFamilia: tecnología con propósito, construida junto a la comunidad.',
  },
];

function EcosystemVisual() {
  return (
    <div className="js-eco relative mx-auto mt-10 hidden h-[460px] w-full max-w-[640px] lg:block">
      {/* Líneas de conexión */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="js-eco-lines absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {ECOSYSTEM_LINES.map((d, i) => {
          const [p1, p2] = d.split(' ');
          const [x1, y1] = p1.replace('M', '').split(',');
          const [x2, y2] = p2.replace('L', '').split(',');
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#00B8D9"
              strokeWidth="0.35"
              strokeDasharray="2 1.5"
              strokeLinecap="round"
              className="js-eco-line"
              opacity="0.5"
            />
          );
        })}
      </svg>

      {/* Nodo central */}
      <div className="js-eco-hub absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-[#0B3B82] to-[#0066CC] text-center shadow-[0_20px_48px_rgba(11,59,130,0.35)] ring-4 ring-white">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Neuro
            </p>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#00B8D9]">
              Familia
            </p>
          </div>
        </div>
      </div>

      {/* Nodos satélite */}
      {NODES.map(({ icon: Icon, label, position }) => (
        <div
          key={label}
          className={`js-eco-node absolute ${position} z-20 -translate-x-1/2 -translate-y-1/2`}
        >
          <div className="group flex flex-col items-center gap-2.5">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-[#0066CC] shadow-[0_16px_40px_rgba(11,59,130,0.16)] ring-1 ring-[#0066CC]/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#0066CC] group-hover:text-white group-hover:shadow-[0_20px_48px_rgba(0,102,204,0.35)]">
              <Icon className="h-7 w-7" />
            </span>
            <p className="whitespace-nowrap rounded-full bg-[#F0F7FF] px-4 py-1.5 text-[13px] font-bold text-[#0B3B82] ring-1 ring-[#0066CC]/10">
              {label}
            </p>
          </div>
        </div>
      ))}

      {/* Pulso decorativo del centro */}
      <span className="js-eco-pulse absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B8D9]/15 blur-2xl" />
    </div>
  );
}

function EcosystemMobile() {
  return (
    <div className="js-eco-mobile relative mx-auto mt-10 max-w-sm lg:hidden">
      <span className="absolute bottom-6 left-7 top-6 w-0.5 bg-gradient-to-b from-[#0066CC] to-[#00B8D9]/40" />
      <ul className="space-y-5">
        {NODES.map(({ icon: Icon, label }) => (
          <li key={label} className="js-eco-mobile-node relative flex items-center gap-4">
            <span className="relative z-10 grid h-13 w-13 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#0066CC] to-[#00B8D9] text-white shadow-[0_10px_24px_rgba(0,102,204,0.3)]">
              <Icon className="h-6 w-6" />
            </span>
            <p className="text-base font-bold text-[#0B3B82]">{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── 2. NUESTRO PROPÓSITO ──────────────────────────────────── */

const PURPOSE = [
  {
    icon: Brain,
    title: 'Salud Mental',
    detail:
      'Promovemos el bienestar emocional mediante acompañamiento preventivo, comunitario y digital.',
    gradient: 'from-[#0B3B82]/10 via-[#0066CC]/10 to-[#00B8D9]/15',
    iconBg: 'from-[#0066CC] to-[#00B8D9]',
  },
  {
    icon: Lightbulb,
    title: 'Innovación Social',
    detail:
      'Diseñamos soluciones humanas apoyadas en tecnología para responder a necesidades reales.',
    gradient: 'from-[#0B3B82]/10 via-[#00B8D9]/10 to-[#0B3B82]/15',
    iconBg: 'from-[#0B3B82] to-[#0066CC]',
  },
  {
    icon: Globe,
    title: 'Desarrollo Humano',
    detail:
      'Fortalecemos capacidades individuales, familiares y comunitarias para construir entornos más saludables.',
    gradient: 'from-[#0066CC]/10 via-[#0B3B82]/10 to-[#00B8D9]/15',
    iconBg: 'from-[#00B8D9] to-[#0B3B82]',
  },
];

/* ── 4. EQUIPO FUNDADOR ────────────────────────────────────── */

const FOUNDERS = [
  {
    image: '/images/fundadora/NELA.png',
    alt: 'Marianella Becerra Hernández',
    name: 'Marianella Becerra Hernández',
    role: 'Fundadora y Directora',
    bio: 'Licenciada en Trabajo Social y Especialista en Gestión de la Salud Digital. Fundadora de NeuroFamilia Galápagos y promotora de iniciativas de innovación social, salud mental, desarrollo humano y transformación digital para fortalecer el bienestar de niños, adolescentes, familias e instituciones.',
    tags: ['Trabajo Social', 'Salud Digital', 'Innovación Social', 'Desarrollo Humano', 'Gestión Comunitaria'],
  },
  {
    image: '/images/fundadora/BETSA.png',
    alt: 'Betsabé Córdova',
    name: 'Betsabé Córdova',
    role: 'Cofundadora y Psicóloga Clínica',
    bio: 'Psicóloga Clínica y Máster en Intervención Psicosocial. Cuenta con experiencia en atención psicológica a niños, adolescentes y adultos, neurodesarrollo, neuropsicología clínica, intervención comunitaria y acompañamiento a poblaciones vulnerables desde un enfoque basado en evidencia y derechos humanos.',
    tags: ['Psicología Clínica', 'Neurodesarrollo', 'Neuropsicología', 'Intervención Psicosocial', 'Salud Mental Comunitaria'],
  },
];

/* ── 5. VALORES ────────────────────────────────────────────── */

const VALUES = [
  { icon: HeartHandshake, label: 'Empatía' },
  { icon: Lightbulb, label: 'Innovación' },
  { icon: Lock, label: 'Confidencialidad' },
  { icon: Users, label: 'Inclusión' },
  { icon: Handshake, label: 'Colaboración' },
  { icon: TrendingUp, label: 'Impacto Social' },
];

/* ── 6. MIRANDO HACIA EL FUTURO ───────────────────────────── */

const FUTURE_STOPS = ['Galápagos', 'Ecuador', 'El mundo'];

export function AboutSection() {
  return (
    <>
      {/* ── 1. QUIÉNES SOMOS ─────────────────────────────────── */}
      <section id="proposito" className="js-about relative overflow-hidden bg-white py-12">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="js-about-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
              Quiénes Somos
            </p>
            <h2 className="js-about-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
              Ciencia, tecnología y acompañamiento humano para el bienestar de las familias
            </h2>
            <p className="js-about-body mx-auto mt-5 max-w-2xl text-base leading-7 text-[#0B3B82]/75 sm:text-lg">
              NeuroFamilia Galápagos integra trabajo social, psicología clínica, salud digital e
              innovación social para fortalecer el bienestar de niños, adolescentes, familias e
              instituciones.
            </p>
          </div>

          {/* Ecosistema visual */}
          <EcosystemVisual />
          <EcosystemMobile />

          {/* Franja institucional · Fundación */}
          <div className="js-about-foundation mx-auto mt-14 max-w-3xl">
            <div className="flex flex-col items-start gap-4 rounded-2xl border-l-4 border-[#00B8D9] bg-[#F0F7FF] p-6 ring-1 ring-[#0066CC]/10 sm:flex-row sm:items-center">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#0066CC] shadow-[0_8px_20px_rgba(11,59,130,0.10)] ring-1 ring-[#0066CC]/15">
                <Building2 className="h-5 w-5" />
              </span>
              <p className="text-[15px] leading-7 text-[#0B3B82]/80">
                NeuroFamilia nace en septiembre de 2025 como una iniciativa de la{' '}
                <span className="font-bold text-[#0B3B82]">
                  Fundación Centro Integral de Bienestar e Innovación Social
                </span>{' '}
                para fortalecer el bienestar, la salud mental y el desarrollo humano en
                Galápagos.
              </p>
            </div>

            {/* Pilares */}
            <ul className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
              {PILLARS.map((pillar, i) => (
                <li
                  key={pillar}
                  className={`js-about-pillar rounded-full px-5 py-2 text-sm font-bold text-[#0B3B82] ring-1 ${
                    i % 2 === 0
                      ? 'bg-white ring-[#0066CC]/20'
                      : 'bg-[#F0F7FF] ring-[#00B8D9]/25'
                  }`}
                >
                  {pillar}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 2. NUESTRO PROPÓSITO · Tarjetas premium ──────────── */}
      <section className="js-about-purpose relative overflow-hidden bg-white py-14">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="js-about-purpose-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
              Nuestro Propósito
            </p>
            <h2 className="js-about-purpose-title mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
              Tres motores, un mismo camino
            </h2>
          </div>

          <ul className="js-about-purpose-grid mt-12 grid gap-8 md:grid-cols-3">
            {PURPOSE.map(({ icon: Icon, title, detail, gradient, iconBg }, i) => (
              <li
                key={title}
                className="js-purpose-card group relative overflow-hidden rounded-[28px] p-8 ring-1 ring-[#0066CC]/10 transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_32px_64px_rgba(11,59,130,0.18)]"
              >
                <span
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient}`}
                />
                <span className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/40 blur-2xl" />
                <span className="absolute right-7 top-7 text-5xl font-extrabold text-[#0B3B82]/10">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`relative grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${iconBg} text-white shadow-[0_16px_36px_rgba(0,102,204,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <Icon className="h-10 w-10" />
                </span>
                <h3 className="relative mt-7 text-2xl font-extrabold text-[#0B3B82]">{title}</h3>
                <p className="relative mt-3 text-[15px] leading-7 text-[#0B3B82]/70">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. EQUIPO FUNDADOR · Retratos editoriales ────────── */}
      <section className="js-about-founders relative overflow-hidden bg-[#F0F7FF] py-16">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="js-about-founders-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
              Nuestro Equipo
            </p>
            <h2 className="js-about-founders-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
              Equipo Fundador
            </h2>
          </div>

          <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-16">
            {FOUNDERS.map((founder) => (
              <div key={founder.name} className="js-founder-block flex flex-col items-center text-center">
                {/* Retrato */}
                <div className="js-founder-photo relative">
                  <span className="absolute -inset-4 -z-10 rounded-full bg-[#00B8D9]/20 blur-2xl" />
                  <div className="relative h-52 w-52 overflow-hidden rounded-full shadow-[0_24px_56px_rgba(11,59,130,0.25)] ring-8 ring-white sm:h-60 sm:w-60">
                    <Image
                      src={founder.image}
                      alt={founder.alt}
                      width={1410}
                      height={1254}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Información */}
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#00B8D9]">
                  {founder.role}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold leading-tight text-[#0B3B82] sm:text-3xl">
                  {founder.name}
                </h3>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#0B3B82]/70">
                  {founder.bio}
                </p>

                {/* Áreas de experiencia */}
                <ul className="mt-5 flex flex-wrap items-center justify-center gap-2">
                  {founder.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-white px-4 py-1.5 text-[13px] font-bold text-[#0066CC] ring-1 ring-[#0066CC]/15"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. NUESTRA HISTORIA · Resumen + CTA a /historia ──── */}
      <section className="js-about-origin relative overflow-hidden bg-white py-20">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Fotografía aérea */}
            <div className="js-origin-photo relative">
              <div className="relative overflow-hidden rounded-[28px] shadow-[0_32px_72px_rgba(11,59,130,0.25)]">
                <Image
                  src="/images/landing/galapagos-aerial.jpg"
                  alt="Vista aérea de la costa de Galápagos"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B82]/50 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 rounded-full bg-white/90 px-5 py-2 text-sm font-extrabold text-[#0B3B82] backdrop-blur-sm">
                  Galápagos, Ecuador
                </p>
              </div>
              <span className="absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-full bg-[#00B8D9]/20 blur-2xl" />
            </div>

            {/* Narrativa en tres actos */}
            <div>
              <p className="js-about-origin-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
                Nuestra Historia
              </p>
              <h2 className="js-about-origin-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
                Un camino nacido en Galápagos
              </h2>

              <ol className="mt-9 space-y-8">
                {ORIGIN_ACTS.map((act) => (
                  <li key={act.number} className="js-origin-act group flex gap-5">
                    <span className="select-none text-5xl font-extrabold leading-none text-[#0B3B82]/10 transition-colors duration-300 group-hover:text-[#0066CC]/25">
                      {act.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#0B3B82]">{act.title}</h3>
                      <p className="mt-1 max-w-md text-[15px] leading-7 text-[#0B3B82]/70">
                        {act.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <Link
                href="/historia"
                className="js-about-origin-cta mt-10 inline-flex items-center gap-2 rounded-full border-2 border-[#0066CC]/25 bg-white px-7 py-3 text-sm font-bold text-[#0066CC] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0066CC] hover:bg-[#0066CC] hover:text-white"
              >
                Ver la historia completa
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. VALORES · Banda horizontal ────────────────────── */}
      <section className="js-about-values relative overflow-hidden bg-[#0B3B82] py-14">
        <div className="pointer-events-none absolute -left-24 top-0 h-full w-96 bg-[#00B8D9]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-0 h-full w-96 bg-[#0066CC]/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <p className="js-about-values-kicker text-center text-xs font-bold uppercase tracking-[0.3em] text-[#00B8D9]">
            Nuestros Valores
          </p>
          <ul className="js-about-values-band mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-5 lg:gap-x-6">
            {VALUES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="js-value-item flex items-center gap-3 rounded-full bg-white/5 px-5 py-3 ring-1 ring-white/10 backdrop-blur-sm transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:ring-[#00B8D9]/50"
              >
                <Icon className="h-5 w-5 text-[#00B8D9]" />
                <span className="text-sm font-bold text-white">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6. MIRANDO HACIA EL FUTURO · Ruta proyectiva ─────── */}
      <section className="js-about-future relative overflow-hidden bg-white py-20">
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="js-about-future-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
            Mirando hacia el Futuro
          </p>
          <h2 className="js-about-future-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
            Mirando hacia el futuro
          </h2>
          <p className="js-about-future-body mx-auto mt-5 max-w-2xl text-base leading-8 text-[#0B3B82]/75 sm:text-lg">
            Trabajamos para consolidar un ecosistema de bienestar que conecte personas,
            familias, profesionales e instituciones, generando nuevas oportunidades para el
            desarrollo humano en Galápagos y futuras comunidades.
          </p>
        </div>

        {/* Ruta proyectiva Galápagos → Ecuador → El mundo */}
        <div className="js-future-route relative mx-auto mt-14 max-w-2xl px-8">
          <svg viewBox="0 0 600 70" fill="none" aria-hidden="true" className="w-full">
            <path
              d="M20,55 Q300,5 580,55"
              stroke="#00B8D9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 6"
              className="js-future-path"
            />
            <circle cx="20" cy="55" r="5" fill="#0066CC" />
            <circle cx="300" cy="30" r="6" fill="#FFFFFF" stroke="#00B8D9" strokeWidth="2.5" />
            <circle cx="580" cy="55" r="7" fill="#00B8D9" opacity="0.35" />
            <circle cx="580" cy="55" r="4.5" fill="#00B8D9" className="js-future-dot" />
          </svg>
          <div className="mt-2 flex items-center justify-between">
            {FUTURE_STOPS.map((stop) => (
              <span
                key={stop}
                className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B3B82]/60"
              >
                {stop}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CIERRE INSPIRADOR ─────────────────────────────── */}
      <section className="js-about-closing relative overflow-hidden bg-gradient-to-br from-[#0B3B82] via-[#0066CC] to-[#00B8D9] py-24">
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#00B8D9]/25 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="js-about-closing-kicker text-xs font-bold uppercase tracking-[0.35em] text-[#00B8D9]">
            Galápagos · Ecuador
          </p>
          <h2 className="js-about-closing-title mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Construyendo bienestar desde Galápagos para el mundo
          </h2>
          <p className="js-about-closing-body mx-auto mt-8 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Creemos en una sociedad donde la salud mental, la innovación y el acompañamiento
            humano sean accesibles para todas las personas, sin importar dónde vivan.
          </p>
          <Link
            href="/teoria-de-cambio"
            className="js-about-closing-cta mt-10 inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 text-sm font-bold text-[#0B3B82] shadow-[0_16px_40px_rgba(0,40,90,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00B8D9] hover:text-white"
          >
            Conoce NeuroFamilia
            <Rocket className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}