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

/* Nodos distribuidos en pentágono alrededor del centro (50,50) */
const NODES = [
  { icon: Brain, label: 'Salud Mental', position: 'lg:left-[50%] lg:top-[14%]' },
  { icon: Users, label: 'Familias', position: 'lg:left-[85%] lg:top-[32%]' },
  { icon: MonitorSmartphone, label: 'Tecnología', position: 'lg:left-[72%] lg:top-[79%]' },
  { icon: Globe, label: 'Comunidad', position: 'lg:left-[28%] lg:top-[79%]' },
  { icon: Lightbulb, label: 'Innovación Social', position: 'lg:left-[15%] lg:top-[32%]' },
];

const ECOSYSTEM_LINES = [
  'M50,50 L50,14',
  'M50,50 L85,32',
  'M50,50 L72,79',
  'M50,50 L28,79',
  'M50,50 L15,32',
];

function EcosystemVisual() {
  return (
    <div className="js-eco relative mx-auto mt-8 hidden h-[420px] w-full max-w-[620px] lg:block">
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
          <div className="group flex flex-col items-center gap-3">
            <span className="grid h-20 w-20 place-items-center rounded-2xl bg-white text-[#0066CC] shadow-[0_16px_40px_rgba(11,59,130,0.16)] ring-1 ring-[#0066CC]/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#0066CC] group-hover:text-white">
              <Icon className="h-9 w-9" />
            </span>
            <p className="rounded-full bg-[#F0F7FF] px-4 py-1.5 text-sm font-bold text-[#0B3B82] ring-1 ring-[#0066CC]/10">
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
    <div className="js-eco-mobile relative mx-auto mt-14 max-w-sm lg:hidden">
      <span className="absolute bottom-8 left-7 top-8 w-0.5 bg-gradient-to-b from-[#0066CC] to-[#00B8D9]/40" />
      <ul className="space-y-6">
        {NODES.map(({ icon: Icon, label }) => (
          <li key={label} className="js-eco-mobile-node relative flex items-center gap-5">
            <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#0066CC] to-[#00B8D9] text-white shadow-[0_10px_24px_rgba(0,102,204,0.3)]">
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
    detail: 'Nace el modelo NeuroFamilia Galápagos.',
  },
  {
    icon: Brain,
    date: 'Modelo NeuroFamilia',
    title: 'Ciencia + Comunidad',
    detail: 'Integración de salud mental e innovación social.',
  },
  {
    icon: MonitorSmartphone,
    date: 'Plataforma digital',
    title: 'Bienestar comunitario',
    detail: 'Una plataforma para el bienestar de todos.',
  },
  {
    icon: Users,
    date: 'NeuroMentores',
    title: 'Ocho guías con identidad',
    detail: 'Acompañamiento vivo del crecimiento humano.',
  },
  {
    icon: Rocket,
    date: 'Futuro',
    title: 'Galápagos → El mundo',
    detail: 'Bienestar accesible para cada familia.',
  },
];

/* ── 3. NUESTRO PROPÓSITO ──────────────────────────────────── */

const PURPOSE = [
  {
    icon: Brain,
    title: 'Salud Mental',
    detail: 'Promover bienestar emocional y acceso a servicios especializados.',
    gradient: 'from-[#0B3B82]/10 via-[#0066CC]/10 to-[#00B8D9]/15',
    iconBg: 'from-[#0066CC] to-[#00B8D9]',
  },
  {
    icon: Lightbulb,
    title: 'Innovación Social',
    detail: 'Diseñar soluciones para desafíos reales de las familias y comunidades.',
    gradient: 'from-[#0B3B82]/10 via-[#00B8D9]/10 to-[#0B3B82]/15',
    iconBg: 'from-[#0B3B82] to-[#0066CC]',
  },
  {
    icon: Globe,
    title: 'Desarrollo Humano',
    detail: 'Fortalecer capacidades, oportunidades y redes de apoyo.',
    gradient: 'from-[#0066CC]/10 via-[#0B3B82]/10 to-[#00B8D9]/15',
    iconBg: 'from-[#00B8D9] to-[#0B3B82]',
  },
];

/* ── 4. EQUIPO FUNDADOR ────────────────────────────────────── */

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

/* ── 5. ¿POR QUÉ NACE NEUROFAMILIA? ────────────────────────── */

const WHY = [
  {
    icon: MapPin,
    title: 'Contexto insular',
    detail: 'Vivir en una isla define oportunidades, ritmos y necesidades únicas.',
  },
  {
    icon: Stethoscope,
    title: 'Acceso limitado',
    detail: 'Los especialistas en salud mental son escasos y difíciles de alcanzar.',
  },
  {
    icon: HeartHandshake,
    title: 'Apoyo familiar',
    detail: 'Las familias necesitan acompañamiento para sostener su bienestar.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación social',
    detail: 'Soluciones diseñadas con y para la comunidad de Galápagos.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Tecnología que acerca',
    detail: 'La tecnología reduce barreras geográficas y acerca el cuidado.',
  },
];

/* ── 6. VALORES ────────────────────────────────────────────── */

const VALUES = [
  { icon: HeartHandshake, label: 'Empatía' },
  { icon: Lightbulb, label: 'Innovación' },
  { icon: Users, label: 'Inclusión' },
  { icon: Lock, label: 'Confidencialidad' },
  { icon: Handshake, label: 'Colaboración' },
  { icon: TrendingUp, label: 'Impacto Social' },
];

/* ── 7. MÉTRICAS ───────────────────────────────────────────── */

const METRICS = [
  { value: 'Septiembre 2025', label: 'Nacimiento de NeuroFamilia' },
  { value: '2', label: 'Fundadoras' },
  { value: '5', label: 'Áreas Estratégicas' },
  { value: '1', label: 'Ecosistema Digital' },
];

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
      <section className="js-about-history relative overflow-hidden bg-[#F0F7FF] py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="js-about-history-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
              Nuestra Historia
            </p>
            <h2 className="js-about-history-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
              Un camino nacido en Galápagos
            </h2>
            <p className="js-about-history-body mx-auto mt-5 max-w-2xl text-base leading-7 text-[#0B3B82]/70">
              Cada hito fue diseñado junto a familias, profesionales e instituciones, con la
              mirada puesta en las próximas generaciones.
            </p>
          </div>

          {/* Línea de tiempo horizontal */}
          <div className="js-timeline relative mt-20 hidden lg:block">
            <span className="js-timeline-line absolute left-0 right-0 top-9 h-0.5 bg-[#00B8D9]/30" />
            <ol className="grid grid-cols-5 gap-6">
              {TIMELINE.map((item) => (
                <li key={item.title} className="js-timeline-item relative text-center">
                  <span className="relative z-10 mx-auto grid h-[72px] w-[72px] place-items-center rounded-full bg-white text-[#0066CC] shadow-[0_12px_32px_rgba(11,59,130,0.16)] ring-4 ring-[#F0F7FF]">
                    <item.icon className="h-8 w-8" />
                  </span>
                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#00B8D9]">
                    {item.date}
                  </p>
                  <h3 className="mt-1.5 text-base font-extrabold text-[#0B3B82]">{item.title}</h3>
                  <p className="mx-auto mt-1.5 max-w-[180px] text-[13px] leading-5 text-[#0B3B82]/65">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Línea de tiempo vertical (móvil) */}
          <ol className="js-timeline-mobile relative mx-auto mt-14 max-w-md space-y-8 border-l-2 border-[#00B8D9]/30 pl-8 lg:hidden">
            {TIMELINE.map((item, i) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[43px] grid h-8 w-8 place-items-center rounded-full bg-[#0066CC] text-white ring-4 ring-[#F0F7FF]">
                  <item.icon className="h-4 w-4" />
                </span>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00B8D9]">
                  {item.date}
                </p>
                <h3 className="mt-1 text-base font-extrabold text-[#0B3B82]">{item.title}</h3>
                <p className="mt-1 text-[13px] leading-5 text-[#0B3B82]/65">{item.detail}</p>
                {i < TIMELINE.length - 1 && (
                  <span className="absolute -left-px top-10 h-full w-0.5 bg-[#00B8D9]/30" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 3. NUESTRO PROPÓSITO · Tarjetas premium ──────────── */}
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

          <ul className="js-about-purpose-grid mt-16 grid gap-8 md:grid-cols-3">
            {PURPOSE.map(({ icon: Icon, title, detail, gradient, iconBg }, i) => (
              <li
                key={title}
                className={`js-purpose-card group relative overflow-hidden rounded-[28px] bg-gradient-to-br ${gradient} p-10 ring-1 ring-[#0066CC]/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_64px_rgba(11,59,130,0.18)]`}
              >
                <span className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/40 blur-2xl" />
                <span className="absolute right-8 top-8 text-5xl font-extrabold text-[#0B3B82]/10">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${iconBg} text-white shadow-[0_16px_36px_rgba(0,102,204,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <Icon className="h-10 w-10" />
                </span>
                <h3 className="mt-8 text-2xl font-extrabold text-[#0B3B82]">{title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#0B3B82]/70">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. EQUIPO FUNDADOR · Layout editorial ────────────── */}
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

          <div className="mt-20 space-y-24">
            {FOUNDERS.map((founder, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={founder.name}
                  className="js-founder-block grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Fotografía / panel visual */}
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <div className="js-founder-photo group relative overflow-hidden rounded-[28px] bg-gradient-to-br shadow-[0_32px_72px_rgba(11,59,130,0.25)]">
                      <div className={`absolute inset-0 bg-gradient-to-br ${founder.gradient}`} />
                      <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
                      <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-[#00B8D9]/30 blur-3xl" />
                      <div className="relative flex aspect-[4/5] flex-col items-center justify-center">
                        <span className="text-7xl font-extrabold tracking-tight text-white/95 sm:text-8xl">
                          {founder.initials}
                        </span>
                        <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                          <HeartHandshake className="h-4 w-4" />
                          NeuroFamilia Galápagos
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Información */}
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00B8D9]">
                      {founder.role}
                    </p>
                    <h3 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
                      {founder.name}
                    </h3>
                    <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#0066CC] to-[#00B8D9]" />
                    <p className="mt-5 text-sm font-bold leading-6 text-[#0066CC]">
                      {founder.credentials}
                    </p>
                    <p className="mt-4 text-base leading-8 text-[#0B3B82]/70">{founder.bio}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. ¿POR QUÉ NACE NEUROFAMILIA? ───────────────────── */}
      <section className="js-about-why relative overflow-hidden bg-white py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
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
              <h2 className="js-about-why-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
                ¿Por qué nace NeuroFamilia?
              </h2>
              <p className="js-about-why-lead mt-6 text-base leading-8 text-[#0B3B82]/75 sm:text-lg">
                Nacemos para responder a una realidad concreta: el bienestar no llega igual a
                todas las comunidades.
              </p>

              <ul className="js-about-why-list mt-10 space-y-6">
                {WHY.map(({ icon: Icon, title, detail }) => (
                  <li key={title} className="js-why-item group flex gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#F0F7FF] text-[#0066CC] ring-1 ring-[#0066CC]/15 transition-colors duration-300 group-hover:bg-[#0066CC] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-base font-extrabold text-[#0B3B82]">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#0B3B82]/70">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. VALORES · Banda horizontal ────────────────────── */}
      <section className="js-about-values relative overflow-hidden bg-[#0B3B82] py-16">
        <div className="pointer-events-none absolute -left-24 top-0 h-full w-96 bg-[#00B8D9]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-0 h-full w-96 bg-[#0066CC]/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <p className="js-about-values-kicker text-center text-xs font-bold uppercase tracking-[0.3em] text-[#00B8D9]">
            Nuestros Valores
          </p>
          <ul className="js-about-values-band mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-6 lg:gap-x-6">
            {VALUES.map(({ icon: Icon, label }, i) => (
              <li
                key={label}
                className="js-value-item flex items-center gap-3 rounded-full bg-white/5 px-5 py-3 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:ring-[#00B8D9]/50"
              >
                <Icon className="h-5 w-5 text-[#00B8D9]" />
                <span className="text-sm font-bold text-white">{label}</span>
                {i < VALUES.length - 1 && (
                  <span className="ml-1 hidden h-1 w-1 rounded-full bg-[#00B8D9]/60 lg:block" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 7. MÉTRICAS INSTITUCIONALES ──────────────────────── */}
      <section className="js-about-metrics relative overflow-hidden bg-white py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <dl className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric) => (
              <div key={metric.label} className="js-metric relative">
                <span className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B8D9]/10 blur-2xl" />
                <dd className="relative text-4xl font-extrabold tracking-tight text-[#0066CC] sm:text-5xl">
                  {metric.value}
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
      <section className="js-about-closing relative overflow-hidden bg-gradient-to-br from-[#0B3B82] via-[#0066CC] to-[#00B8D9] py-32">
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#00B8D9]/25 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="js-about-closing-kicker text-xs font-bold uppercase tracking-[0.35em] text-[#00B8D9]">
            Galápagos · Ecuador
          </p>
          <h2 className="js-about-closing-title mt-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Construyendo bienestar desde Galápagos para el mundo
          </h2>
          <p className="js-about-closing-body mx-auto mt-8 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            NeuroFamilia integra ciencia, tecnología y acompañamiento humano para fortalecer el
            desarrollo de niños, adolescentes, familias, profesionales e instituciones en
            Galápagos.
          </p>
          <Link
            href="#dimensiones"
            className="js-about-closing-cta mt-12 inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 text-sm font-bold text-[#0B3B82] shadow-[0_16px_40px_rgba(0,40,90,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00B8D9] hover:text-white"
          >
            Conoce nuestra Teoría de Cambio
            <Rocket className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}