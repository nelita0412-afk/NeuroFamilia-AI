'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  Globe,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Lock,
  Rocket,
  TrendingUp,
  Users,
} from 'lucide-react';

/* ── 1. QUIÉNES SOMOS ─────────────────────────────────── */

/* Conceptos institucionales (línea ✦ Quiénes Somos) */
const CONCEPTOS = ['Ciencia', 'Salud Mental', 'Desarrollo Humano', 'Innovación Social'];

/* Métricas institucionales (Quiénes Somos) */
const METRICAS = [
  { valor: '4+', etiqueta: 'Islas conectadas' },
  { valor: '5', etiqueta: 'Áreas estratégicas' },
  { valor: '1', etiqueta: 'Ecosistema digital' },
];

/* ODS con iconografía oficial de Naciones Unidas (public/images/ods) */
const ODS_OFICIALES = [
  { numero: 3, titulo: 'Salud y Bienestar' },
  { numero: 4, titulo: 'Educación de Calidad' },
  { numero: 10, titulo: 'Reducción de las Desigualdades' },
  { numero: 16, titulo: 'Paz, Justicia e Instituciones Sólidas' },
  { numero: 17, titulo: 'Alianzas para Lograr los Objetivos' },
];

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
      {/* ── 1. QUIÉNES SOMOS · dos columnas, estilo PNUD/UNICEF/BID ── */}
      <section id="proposito" className="js-about relative overflow-hidden bg-white py-10 sm:py-12">
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
          {/* IZQUIERDA (~60%) */}
          <div>
            <p className="js-about-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
              Quiénes Somos
            </p>
            <h2 className="js-about-title mt-3 text-[clamp(1.75rem,1.1rem+2.2vw,2.6rem)] font-extrabold leading-[1.12] tracking-tight text-[#0B3B82]">
              Conectando a las comunidades insulares para fortalecer el bienestar y el
              desarrollo humano
            </h2>
            <p className="js-about-body mt-4 max-w-xl text-[15px] leading-7 text-[#0B3B82]/75 sm:text-base">
              NeuroFamilia Galápagos impulsa soluciones innovadoras para acercar apoyo,
              información y oportunidades de desarrollo a las comunidades insulares,
              integrando ciencia, salud mental, educación y transformación digital.
            </p>

            {/* Línea de conceptos */}
            <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              {CONCEPTOS.map((concepto) => (
                <li
                  key={concepto}
                  className="text-sm font-semibold text-[#0B3B82]/80"
                >
                  <span className="mr-1.5 text-[#00B8D9]" aria-hidden="true">✦</span>
                  {concepto}
                </li>
              ))}
            </ul>

            {/* Métricas institucionales */}
            <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-6 border-t border-[#0B3B82]/10 pt-7">
              {METRICAS.map(({ valor, etiqueta }) => (
                <div key={etiqueta} className="js-about-metrica">
                  <dt className="order-2 mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B3B82]/60">
                    {etiqueta}
                  </dt>
                  <dd className="order-1 text-4xl font-extrabold leading-none text-[#0B3B82]">
                    {valor}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Bloque ODS · iconografía oficial de Naciones Unidas */}
            <div className="mt-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B3B82]/60">
                Contribuimos a los Objetivos de Desarrollo Sostenible
              </p>
              <ul className="mt-3 flex flex-wrap items-center gap-3">
                {ODS_OFICIALES.map(({ numero, titulo }) => (
                  <li key={numero}>
                    <Image
                      src={`/images/ods/ods-${numero}.svg`}
                      alt={`ODS ${numero} — ${titulo}`}
                      width={44}
                      height={44}
                      unoptimized
                      className="h-11 w-11 object-contain"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* DERECHA (~40%) · contexto territorial — comunidades insulares conectadas */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/landing/comunidad-insular.png"
              alt="Comunidades insulares de Galápagos conectadas por el ecosistema NeuroFamilia"
              width={1672}
              height={941}
              priority
              sizes="(max-width: 1024px) 90vw, 460px"
              className="js-about-territorio h-auto w-full max-w-[420px] rounded-[20px] object-contain shadow-[0_24px_48px_-24px_rgba(4,43,96,0.35)]"
            />
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