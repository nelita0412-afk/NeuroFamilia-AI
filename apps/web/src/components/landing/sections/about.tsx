'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Brain,
  Globe,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Lock,
  MapPin,
  MonitorSmartphone,
  Rocket,
  Sparkles,
  Stethoscope,
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

/* ── 2. NUESTRA HISTORIA · Línea de tiempo ─────────────────── */

const TIMELINE = [
  {
    icon: Sparkles,
    date: 'Septiembre 2025',
    title: 'Creación de NeuroFamilia',
    detail: 'Creación de NeuroFamilia Galápagos.',
  },
  {
    icon: Brain,
    date: 'Modelo NeuroFamilia',
    title: 'Ciencia + Comunidad',
    detail: 'Integración de salud mental, trabajo social, psicología e innovación social.',
  },
  {
    icon: MonitorSmartphone,
    date: 'Plataforma Digital',
    title: 'Ecosistema digital',
    detail: 'Desarrollo del ecosistema digital NeuroFamilia.',
  },
  {
    icon: Users,
    date: 'NeuroMentores',
    title: 'Acompañamiento vivo',
    detail: 'Creación de espacios de mentoría y acompañamiento.',
  },
  {
    icon: Rocket,
    date: 'Futuro',
    title: 'Galápagos → El mundo',
    detail: 'Escalamiento del modelo hacia nuevas comunidades.',
  },
];

/* ── 3. NUESTRO PROPÓSITO ──────────────────────────────────── */

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

/* ── 5. ¿POR QUÉ NACE NEUROFAMILIA? ────────────────────────── */

const WHY = [
  {
    icon: MapPin,
    title: 'Contexto insular',
    detail: 'Vivir en una isla implica oportunidades y desafíos únicos.',
  },
  {
    icon: Stethoscope,
    title: 'Acceso limitado',
    detail: 'La disponibilidad de especialistas en salud mental es reducida.',
  },
  {
    icon: HeartHandshake,
    title: 'Apoyo familiar',
    detail: 'Las familias necesitan acompañamiento cercano y continuo.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación social',
    detail: 'Diseñamos soluciones construidas junto a la comunidad.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Tecnología con propósito',
    detail: 'Utilizamos herramientas digitales para ampliar el acceso al bienestar.',
  },
];

/* ── 6. VALORES ────────────────────────────────────────────── */

const VALUES = [
  { icon: HeartHandshake, label: 'Empatía' },
  { icon: Lightbulb, label: 'Innovación' },
  { icon: Lock, label: 'Confidencialidad' },
  { icon: Users, label: 'Inclusión' },
  { icon: Handshake, label: 'Colaboración' },
  { icon: TrendingUp, label: 'Impacto Social' },
];

/* ── 7. MÉTRICAS ───────────────────────────────────────────── */

const METRICS = [
  { value: 'Septiembre 2025', count: null, label: 'Nacimiento de NeuroFamilia' },
  { value: '2', count: 2, label: 'Fundadoras' },
  { value: '5', count: 5, label: 'Áreas Estratégicas' },
  { value: '1', count: 1, label: 'Ecosistema Digital' },
];

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1200;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = String(Math.round(target * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);
  return <span ref={ref}>0</span>;
}

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
        </div>
      </section>

      {/* ── 2. NUESTRA HISTORIA · Línea de tiempo horizontal ── */}
      <section className="js-about-history relative overflow-hidden bg-[#F0F7FF] py-14">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="js-about-history-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
              Nuestra Historia
            </p>
            <h2 className="js-about-history-title mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
              Un camino nacido en Galápagos
            </h2>
            <p className="js-about-history-body mx-auto mt-4 max-w-2xl text-base leading-7 text-[#0B3B82]/70">
              Cada hito fue diseñado junto a familias, profesionales e instituciones, con la
              mirada puesta en las próximas generaciones.
            </p>
          </div>

          {/* Línea de tiempo horizontal */}
          <div className="js-timeline relative mt-14 hidden lg:block">
            <span className="js-timeline-line absolute left-0 right-0 top-8 h-0.5 bg-[#00B8D9]/30" />
            <ol className="grid grid-cols-5 gap-5">
              {TIMELINE.map((item) => (
                <li key={item.title} className="js-timeline-item relative text-center">
                  <span className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full bg-white text-[#0066CC] shadow-[0_12px_28px_rgba(11,59,130,0.14)] ring-4 ring-[#F0F7FF]">
                    <item.icon className="h-7 w-7" />
                  </span>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00B8D9]">
                    {item.date}
                  </p>
                  <h3 className="mt-1 text-base font-extrabold text-[#0B3B82]">{item.title}</h3>
                  <p className="mx-auto mt-1.5 max-w-[190px] text-[13px] leading-5 text-[#0B3B82]/65">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Línea de tiempo vertical (móvil) */}
          <ol className="js-timeline-mobile relative mx-auto mt-12 max-w-md space-y-7 border-l-2 border-[#00B8D9]/30 pl-7 lg:hidden">
            {TIMELINE.map((item, i) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[38px] grid h-7 w-7 place-items-center rounded-full bg-[#0066CC] text-white ring-4 ring-[#F0F7FF]">
                  <item.icon className="h-3.5 w-3.5" />
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00B8D9]">
                  {item.date}
                </p>
                <h3 className="mt-0.5 text-base font-extrabold text-[#0B3B82]">{item.title}</h3>
                <p className="mt-1 text-[13px] leading-5 text-[#0B3B82]/65">{item.detail}</p>
                {i < TIMELINE.length - 1 && (
                  <span className="absolute -left-px top-8 h-full w-0.5 bg-[#00B8D9]/30" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 3. NUESTRO PROPÓSITO · Tarjetas premium ──────────── */}
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

      {/* ── 4. EQUIPO FUNDADOR · Retratos editoriales ────────── */}
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

      {/* ── 5. ¿POR QUÉ NACE NEUROFAMILIA? ───────────────────── */}
      <section className="js-about-why relative overflow-hidden bg-white py-20">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Fotografía aérea */}
            <div className="js-why-photo relative">
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

            {/* Texto adaptado */}
            <div>
              <p className="js-about-why-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
                Nuestro origen
              </p>
              <h2 className="js-about-why-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
                ¿Por qué nace NeuroFamilia?
              </h2>
              <p className="js-about-why-lead mt-5 text-base leading-8 text-[#0B3B82]/75 sm:text-lg">
                Nacemos para responder a una realidad concreta: el bienestar no llega igual a
                todas las comunidades.
              </p>

              <ul className="js-about-why-list mt-8 space-y-5">
                {WHY.map(({ icon: Icon, title, detail }) => (
                  <li key={title} className="js-why-item group flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#F0F7FF] text-[#0066CC] ring-1 ring-[#0066CC]/15 transition-colors duration-300 group-hover:bg-[#0066CC] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-base font-extrabold text-[#0B3B82]">{title}</p>
                      <p className="mt-0.5 text-sm leading-6 text-[#0B3B82]/70">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. VALORES · Banda horizontal ────────────────────── */}
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

      {/* ── 7. MÉTRICAS INSTITUCIONALES ──────────────────────── */}
      <section className="js-about-metrics relative overflow-hidden bg-white py-20">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <dl className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric) => (
              <div key={metric.label} className="js-metric relative">
                <span className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B8D9]/10 blur-2xl" />
                <dd className="relative text-4xl font-extrabold tracking-tight text-[#0066CC] sm:text-5xl">
                  {metric.count !== null ? <Counter target={metric.count} /> : metric.value}
                </dd>
                <p className="relative mt-3 text-sm font-semibold text-[#0B3B82]/65">
                  {metric.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 8. CIERRE INSPIRADOR ─────────────────────────────── */}
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
            href="#dimensiones"
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