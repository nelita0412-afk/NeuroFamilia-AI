import {
  Brain,
  Briefcase,
  Globe,
  Handshake,
  Heart,
  HeartHandshake,
  Lightbulb,
  Lock,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const HISTORY = [
  {
    date: 'Septiembre 2025',
    title: 'Creación de NeuroFamilia',
    detail: 'Desarrollo del modelo NeuroFamilia Galápagos.',
  },
  {
    date: 'Modelo NeuroFamilia',
    title: 'Ciencia + Comunidad + Tecnología',
    detail: 'Integración de salud mental, innovación social y tecnología.',
  },
  {
    date: 'Plataforma digital',
    title: 'Bienestar comunitario',
    detail: 'Construcción de una plataforma digital para el bienestar comunitario.',
  },
];

const PURPOSE = [
  {
    icon: Brain,
    title: 'Salud Mental',
    detail: 'Promover bienestar emocional y acceso a servicios especializados.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación Social',
    detail: 'Diseñar soluciones para desafíos reales de las familias y comunidades.',
  },
  {
    icon: Globe,
    title: 'Desarrollo Humano',
    detail: 'Fortalecer capacidades, oportunidades y redes de apoyo.',
  },
];

const FOUNDERS = [
  {
    initials: 'MB',
    name: 'Marianella Becerra Hernández',
    role: 'Fundadora y Directora',
    credentials: 'Licenciada en Trabajo Social y Especialista en Gestión de la Salud Digital.',
    bio: 'Impulsa la creación de NeuroFamilia Galápagos integrando innovación social, salud mental y tecnología para fortalecer el bienestar de niños, adolescentes, familias e instituciones.',
    gradient: 'from-[#0066CC] to-[#00B8D9]',
  },
  {
    initials: 'BC',
    name: 'Betsabé Córdova',
    role: 'Cofundadora y Psicóloga Clínica',
    credentials: 'Psicóloga Clínica y Máster en Intervención Psicosocial.',
    bio: 'Cuenta con experiencia en atención psicológica a niños, adolescentes y adultos, intervención comunitaria, neurodesarrollo, neuropsicología clínica y acompañamiento a poblaciones vulnerables desde un enfoque basado en evidencia y derechos humanos.',
    gradient: 'from-[#0B3B82] to-[#0066CC]',
  },
];

const VALUES = [
  { icon: HeartHandshake, label: 'Empatía' },
  { icon: Lightbulb, label: 'Innovación' },
  { icon: Lock, label: 'Confidencialidad' },
  { icon: Users, label: 'Inclusión' },
  { icon: Handshake, label: 'Colaboración' },
  { icon: TrendingUp, label: 'Impacto Social' },
];

const PILLARS = [
  { icon: Heart, label: 'Familias' },
  { icon: Sparkles, label: 'Ciencia' },
  { icon: Users, label: 'Comunidad' },
  { icon: Briefcase, label: 'Tecnología' },
  { icon: Target, label: 'Confianza' },
];

export function AboutSection() {
  return (
    <>
      {/* ── 1. QUIÉNES SOMOS ─────────────────────────────────── */}
      <section id="proposito" className="js-about relative overflow-hidden bg-white py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="js-about-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
              Acerca de
            </p>
            <h2 className="js-about-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
              Quiénes Somos
            </h2>
            <div className="js-about-body mt-8 space-y-5 text-left sm:text-center">
              <p className="text-base leading-8 text-[#0B3B82]/75 sm:text-lg">
                NeuroFamilia Galápagos es una iniciativa de innovación social creada en septiembre
                de 2025 para fortalecer el bienestar, la salud mental y el desarrollo humano en
                contextos insulares.
              </p>
              <p className="text-base leading-8 text-[#0B3B82]/75 sm:text-lg">
                Integramos ciencia, tecnología y acompañamiento humano para generar soluciones
                accesibles que apoyen a niños, adolescentes, familias, profesionales e
                instituciones en Galápagos.
              </p>
              <p className="text-base leading-8 text-[#0B3B82]/75 sm:text-lg">
                Nuestro enfoque combina trabajo social, psicología clínica, salud digital e
                innovación social para construir una red de apoyo colaborativa orientada al
                bienestar comunitario.
              </p>
            </div>

            {/* Cinco pilares del ecosistema */}
            <ul className="js-about-pillars mt-12 flex flex-wrap items-center justify-center gap-3">
              {PILLARS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-[#F0F7FF] px-5 py-2.5 text-sm font-semibold text-[#0B3B82] ring-1 ring-[#0066CC]/15 transition-colors duration-200 hover:bg-[#00B8D9]/10"
                >
                  <Icon className="h-4 w-4 text-[#0066CC]" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 2. NUESTRA HISTORIA ──────────────────────────────── */}
      <section className="js-about-history relative overflow-hidden bg-[#F0F7FF] py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Texto narrativo */}
            <div>
              <p className="js-about-history-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
                Nuestra Historia
              </p>
              <h2 className="js-about-history-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
                Un camino nacido en Galápagos
              </h2>
              <div className="js-about-history-body mt-6 space-y-5">
                <p className="text-base leading-8 text-[#0B3B82]/75">
                  NeuroFamilia Galápagos nació en septiembre de 2025 con una convicción: que el
                  bienestar, la salud mental y el desarrollo humano son derechos que deben llegar a
                  cada familia, sin importar dónde viva.
                </p>
                <p className="text-base leading-8 text-[#0B3B82]/75">
                  Desde entonces hemos construido un modelo propio que integra la salud mental, la
                  innovación social y la tecnología, y lo hemos convertido en una plataforma
                  digital pensada para el bienestar de toda la comunidad.
                </p>
                <p className="text-base leading-8 text-[#0B3B82]/75">
                  Cada paso ha sido diseñado junto a familias, profesionales e instituciones, con
                  la mirada puesta en las próximas generaciones.
                </p>
              </div>
            </div>

            {/* Tarjeta visual con línea de tiempo */}
            <div className="js-about-timeline-card rounded-3xl bg-white p-8 shadow-[0_24px_64px_rgba(11,59,130,0.12)] ring-1 ring-[#0066CC]/10">
              <ol className="relative space-y-10 border-l-2 border-[#00B8D9]/40 pl-8">
                {HISTORY.map((item, i) => (
                  <li key={item.title} className="relative">
                    <span className="absolute -left-[41px] grid h-5 w-5 place-items-center rounded-full bg-[#0066CC] ring-4 ring-[#F0F7FF]">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B8D9]">
                      {item.date}
                    </p>
                    <h3 className="mt-1.5 text-lg font-extrabold text-[#0B3B82]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#0B3B82]/70">{item.detail}</p>
                    {i < HISTORY.length - 1 && (
                      <span className="absolute -left-px top-10 h-full w-0.5 bg-[#00B8D9]/40" />
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. NUESTRO PROPÓSITO ─────────────────────────────── */}
      <section className="js-about-purpose relative overflow-hidden bg-white py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="js-about-purpose-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
              Nuestro Propósito
            </p>
            <h2 className="js-about-purpose-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
              Tres motores, un mismo camino
            </h2>
          </div>

          <ul className="js-about-purpose-grid mt-16 grid gap-6 md:grid-cols-3">
            {PURPOSE.map(({ icon: Icon, title, detail }) => (
              <li
                key={title}
                className="group rounded-3xl bg-[#F0F7FF] p-8 text-center ring-1 ring-[#0066CC]/10 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_24px_56px_rgba(11,59,130,0.14)]"
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#0066CC] to-[#00B8D9] shadow-[0_12px_28px_rgba(0,102,204,0.3)] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-white" />
                </span>
                <h3 className="mt-6 text-xl font-extrabold text-[#0B3B82]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#0B3B82]/70">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. EQUIPO FUNDADOR ───────────────────────────────── */}
      <section className="js-about-founders relative overflow-hidden bg-[#F0F7FF] py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="js-about-founders-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
              Nuestro Equipo
            </p>
            <h2 className="js-about-founders-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
              Equipo Fundador
            </h2>
          </div>

          <ul className="js-about-founders-grid mt-16 grid gap-8 md:grid-cols-2">
            {FOUNDERS.map((founder) => (
              <li
                key={founder.name}
                className="group flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-[0_16px_48px_rgba(11,59,130,0.1)] ring-1 ring-[#0066CC]/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_64px_rgba(11,59,130,0.18)] sm:flex-row"
              >
                <div className="flex flex-col items-center gap-4 sm:items-start">
                  <span
                    className={`grid h-24 w-24 shrink-0 place-items-center rounded-full bg-gradient-to-br ${founder.gradient} text-3xl font-extrabold text-white shadow-[0_12px_32px_rgba(11,59,130,0.25)]`}
                  >
                    {founder.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#00B8D9]">
                    {founder.role}
                  </p>
                  <h3 className="mt-1.5 text-xl font-extrabold text-[#0B3B82]">{founder.name}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#0066CC]">
                    {founder.credentials}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#0B3B82]/70">{founder.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. VALORES ───────────────────────────────────────── */}
      <section className="js-about-values relative overflow-hidden bg-white py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="js-about-values-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
              Nuestros Valores
            </p>
            <h2 className="js-about-values-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
              Principios que nos guían
            </h2>
          </div>

          <ul className="js-about-values-grid mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="group flex items-center gap-4 rounded-2xl bg-[#F0F7FF] px-6 py-5 ring-1 ring-[#0066CC]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(11,59,130,0.12)]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-[#0066CC] ring-1 ring-[#0066CC]/15 transition-colors duration-300 group-hover:bg-[#0066CC] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="text-base font-extrabold text-[#0B3B82]">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6. CIERRE ────────────────────────────────────────── */}
      <section className="js-about-closing relative overflow-hidden bg-gradient-to-br from-[#0B3B82] via-[#0066CC] to-[#00B8D9] py-24">
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="js-about-closing-title text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Construyendo bienestar para las nuevas generaciones
          </h2>
          <p className="js-about-closing-body mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Creemos en una sociedad donde la salud mental, la innovación y el acompañamiento humano
            sean accesibles para todas las personas, sin importar dónde vivan.
          </p>
          <Link
            href="#dimensiones"
            className="js-about-closing-cta mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#0B3B82] shadow-[0_12px_32px_rgba(0,40,90,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00B8D9] hover:text-white"
          >
            Conoce nuestra Teoría de Cambio
          </Link>
        </div>
      </section>
    </>
  );
}