'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Atom,
  Brain,
  Globe,
  Lightbulb,
  MonitorSmartphone,
  Network,
  Sprout,
} from 'lucide-react';

/* ── 1. QUIÉNES SOMOS ─────────────────────────────────── */

/* Componentes del modelo (línea de iconos · Quiénes Somos) */
const CONCEPTOS = [
  { icon: Atom, label: 'Ciencia' },
  { icon: Brain, label: 'Salud Mental' },
  { icon: Sprout, label: 'Desarrollo Humano' },
  { icon: Network, label: 'Innovación Social' },
  { icon: MonitorSmartphone, label: 'Transformación Digital' },
];

/* Métricas institucionales (Quiénes Somos) */
const METRICAS = [
  { valor: '4+', etiqueta: 'Islas conectadas' },
  { valor: '5', etiqueta: 'Componentes del modelo' },
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
      'Diseñamos e impulsamos soluciones colaborativas para responder a necesidades reales de las comunidades.',
    gradient: 'from-[#0B3B82]/10 via-[#00B8D9]/10 to-[#0B3B82]/15',
    iconBg: 'from-[#0B3B82] to-[#0066CC]',
  },
  {
    icon: Globe,
    title: 'Desarrollo Humano',
    detail:
      'Fortalecemos capacidades y oportunidades para favorecer el desarrollo integral de las personas y sus familias.',
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
  },
  {
    image: '/images/fundadora/BETSA.png',
    alt: 'Betsabé Córdova Wellington',
    name: 'Betsabé Córdova Wellington',
    role: 'Cofundadora',
    bio: 'Máster en Intervención Psicosocial. Cuenta con experiencia en atención psicológica a niños, adolescentes y adultos, neurodesarrollo, neuropsicología clínica, intervención comunitaria y acompañamiento a poblaciones vulnerables desde un enfoque basado en evidencia y derechos humanos.',
  },
];

/* ── 5. MIRANDO HACIA EL FUTURO ───────────────────────────── */

export function AboutSection() {
  return (
    <>
      {/* ── 1. QUIÉNES SOMOS · columna única centrada, estilo PNUD/UNICEF/BID ── */}
      <section id="proposito" className="js-about relative overflow-hidden bg-white py-10 sm:py-12">
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="js-about-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
            Quiénes Somos
          </p>
          <h2 className="js-about-title mx-auto mt-3 max-w-2xl text-[clamp(1.85rem,1.15rem+2.3vw,2.9rem)] font-extrabold leading-[1.12] tracking-tight text-[#0B3B82]">
            Conectamos comunidades insulares para fortalecer el bienestar y el
            desarrollo humano.
          </h2>

          {/* Componentes del modelo */}
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:-mx-[104px] lg:flex-nowrap">
            {CONCEPTOS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center justify-center gap-3 text-sm font-semibold text-[#0B3B82]/80 lg:whitespace-nowrap"
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.8}
                  className="h-10 w-10 shrink-0 text-[#0066CC]"
                />
                {label}
              </li>
            ))}
          </ul>

          {/* Métricas institucionales */}
          <dl className="mt-10 flex flex-wrap items-start justify-center gap-x-14 gap-y-8 border-t border-[#0B3B82]/10 pt-9">
            {METRICAS.map(({ valor, etiqueta }) => (
              <div key={etiqueta} className="js-about-metrica flex flex-col items-center">
                <dt className="order-2 mt-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B3B82]/60">
                  {etiqueta}
                </dt>
                <dd className="order-1 text-4xl font-extrabold leading-none text-[#0B3B82]">
                  {valor}
                </dd>
              </div>
            ))}
          </dl>

          {/* Bloque ODS · iconografía oficial de Naciones Unidas */}
          <div className="mt-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B3B82]/60">
              Contribuimos a los Objetivos de Desarrollo Sostenible
            </p>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-5">
              {ODS_OFICIALES.map(({ numero }) => (
                <li key={numero}>
                  <Image
                    src={`/images/ods/ods-${numero}.svg`}
                    alt={`ODS ${numero}`}
                    width={72}
                    height={72}
                    unoptimized
                    className="h-[72px] w-[72px] object-contain"
                  />
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
              Cómo generamos impacto
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
            Trabajamos para consolidar un ecosistema de bienestar que integra salud
            mental, innovación social, desarrollo humano y transformación digital,
            conectando comunidades y generando nuevas oportunidades desde Galápagos
            hacia el Ecuador y el mundo.
          </p>
        </div>

        {/* Ruta proyectiva Galápagos → Ecuador → El mundo */}
        <div className="js-future-route relative mx-auto mt-6 max-w-2xl px-8">
          <svg viewBox="0 0 600 88" fill="none" aria-hidden="true" className="w-full">
            <path
              d="M35,55 Q300,5 565,55"
              stroke="#00B8D9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 6"
              className="js-future-path"
            />
            {/* Galápagos · silueta real del archipiélago (Natural Earth) */}
            <g transform="translate(35,55)" fill="#0066CC">
              <path d="M0.7,15.0 L-0.2,15.0 L-1.3,14.1 L-0.4,12.5 L0.5,12.9 L1.2,13.4 L1.6,14.0 L0.7,15.0 Z M21.2,6.2 L18.8,7.0 L18.0,6.7 L17.5,6.2 L17.3,5.7 L18.7,4.5 L20.0,3.8 L21.1,2.3 L23.3,1.5 L23.9,1.7 L24.3,2.0 L24.5,2.5 L23.7,3.6 L22.4,4.5 L21.2,6.2 Z M2.5,3.3 L1.4,3.4 L-1.7,1.4 L-1.5,-0.5 L-0.3,-1.9 L3.8,-2.5 L5.5,-1.3 L5.4,1.0 L4.0,2.7 L2.9,3.0 L2.5,3.3 Z M-19.8,-3.0 L-21.9,-2.7 L-23.6,-3.4 L-24.3,-4.4 L-24.5,-6.1 L-24.3,-6.6 L-20.5,-7.2 L-19.3,-5.8 L-19.3,-3.8 L-19.8,-3.0 Z M-2.4,-5.6 L-3.3,-5.0 L-7.2,-5.7 L-8.4,-6.9 L-7.4,-8.5 L-6.6,-9.1 L-4.3,-8.5 L-2.0,-6.7 L-2.4,-5.6 Z M-16.7,-12.9 L-15.4,-11.6 L-14.7,-7.9 L-10.6,-3.9 L-10.1,-1.7 L-10.5,-0.7 L-10.3,-0.3 L-8.3,1.3 L-7.0,2.9 L-9.2,6.8 L-13.8,8.4 L-18.7,8.4 L-19.7,7.9 L-21.0,6.5 L-21.2,5.2 L-20.5,3.9 L-17.9,2.0 L-14.1,0.3 L-13.6,-1.0 L-15.1,-2.3 L-16.2,-4.8 L-18.6,-6.6 L-19.9,-12.0 L-20.7,-12.2 L-22.3,-11.5 L-23.2,-12.1 L-23.3,-12.5 L-21.5,-13.7 L-21.1,-14.6 L-18.5,-15.0 L-17.4,-14.3 L-16.7,-12.9 Z" />
            </g>
            {/* Ecuador · silueta real del territorio continental (Natural Earth) */}
            <g transform="translate(300,30)">
              <path d="M-3.5,-15.0 L-3.4,-14.9 L-2.9,-14.6 L-2.7,-14.2 L-2.2,-14.0 L-1.9,-13.8 L-1.0,-13.1 L-0.3,-12.7 L0.3,-12.4 L1.3,-12.1 L1.9,-12.1 L2.0,-11.9 L2.1,-11.6 L2.3,-11.4 L2.7,-11.3 L2.9,-11.3 L3.0,-11.2 L3.2,-10.2 L3.3,-10.1 L3.8,-9.9 L4.4,-9.8 L4.6,-9.9 L5.1,-9.6 L5.5,-9.5 L5.9,-9.4 L6.2,-9.4 L6.4,-9.4 L6.4,-9.5 L6.6,-9.5 L7.0,-9.3 L7.5,-9.3 L7.8,-9.4 L7.9,-9.6 L7.9,-10.0 L8.0,-10.1 L8.4,-10.3 L8.5,-10.3 L9.5,-9.8 L9.7,-9.7 L9.9,-9.4 L10.4,-8.9 L10.8,-8.6 L11.6,-8.5 L12.3,-8.0 L13.1,-7.7 L12.9,-7.6 L12.6,-7.5 L12.2,-7.5 L11.7,-7.7 L11.5,-7.7 L11.5,-7.5 L11.8,-7.3 L12.2,-7.1 L12.3,-6.7 L12.5,-6.3 L12.9,-5.9 L13.2,-5.6 L13.2,-5.5 L13.2,-5.2 L13.1,-4.9 L13.3,-3.8 L13.2,-3.7 L13.0,-3.7 L12.8,-3.7 L12.7,-3.9 L12.6,-3.9 L12.5,-3.7 L12.4,-3.2 L12.1,-2.1 L11.8,-1.1 L11.5,-0.7 L11.0,-0.2 L10.3,0.6 L9.4,1.7 L8.7,2.2 L8.1,2.6 L7.5,3.1 L6.6,3.7 L5.7,4.0 L4.4,4.5 L3.5,4.8 L2.8,5.1 L2.1,5.3 L1.1,5.7 L0.8,6.0 L0.2,6.7 L-0.1,7.1 L-0.4,7.4 L-0.4,7.5 L-0.4,7.6 L-0.3,7.7 L-0.2,7.9 L-0.4,8.0 L-0.6,8.0 L-0.6,7.9 L-0.7,7.8 L-0.8,7.6 L-1.0,7.5 L-1.1,7.6 L-1.1,7.7 L-1.4,8.5 L-1.4,8.9 L-1.5,9.0 L-1.5,9.4 L-1.7,9.7 L-1.8,9.9 L-1.9,10.2 L-2.1,10.3 L-2.1,10.6 L-2.3,11.1 L-2.5,11.5 L-2.7,11.9 L-2.7,12.2 L-2.6,12.4 L-2.5,12.5 L-2.6,12.8 L-2.7,13.0 L-3.0,13.1 L-3.5,13.5 L-3.7,13.7 L-3.8,14.0 L-3.8,14.2 L-3.8,14.4 L-4.0,14.5 L-4.1,14.6 L-4.3,14.9 L-4.5,15.0 L-5.0,14.8 L-5.4,14.8 L-5.7,14.7 L-6.0,14.3 L-6.3,14.0 L-6.5,13.5 L-6.6,12.9 L-6.8,12.7 L-7.1,12.5 L-7.5,12.6 L-7.9,12.6 L-8.1,12.5 L-8.6,12.2 L-9.1,11.9 L-9.5,11.8 L-9.7,11.8 L-9.9,12.0 L-10.2,12.3 L-10.6,12.5 L-10.8,12.5 L-11.0,12.4 L-11.1,12.2 L-10.9,12.0 L-10.5,11.4 L-10.9,11.3 L-11.1,11.2 L-11.1,10.9 L-11.2,10.7 L-11.1,10.4 L-10.8,10.3 L-10.5,10.4 L-10.2,10.4 L-10.1,10.2 L-9.9,10.0 L-9.7,10.0 L-9.6,9.8 L-9.8,9.4 L-9.9,9.2 L-9.8,9.0 L-9.8,8.8 L-9.8,8.6 L-9.9,8.4 L-10.0,8.2 L-10.0,8.0 L-10.1,7.9 L-10.1,7.7 L-10.2,7.6 L-10.3,7.5 L-10.2,7.5 L-9.6,7.2 L-9.3,7.0 L-8.9,6.8 L-8.6,6.5 L-8.4,6.2 L-8.0,4.7 L-7.6,3.8 L-7.6,3.3 L-8.0,2.7 L-8.1,1.9 L-8.0,1.6 L-8.1,1.4 L-8.3,1.8 L-8.3,3.1 L-8.5,3.6 L-8.8,3.8 L-9.0,3.7 L-8.8,2.7 L-9.1,2.9 L-9.4,3.5 L-10.0,4.0 L-10.0,4.2 L-10.1,4.4 L-10.6,4.2 L-10.9,4.0 L-12.0,2.9 L-12.7,2.7 L-13.1,2.3 L-13.2,2.2 L-13.3,2.0 L-12.8,1.7 L-12.4,1.4 L-12.3,0.8 L-12.4,0.3 L-12.7,-0.6 L-12.5,-1.8 L-12.6,-2.2 L-13.0,-3.2 L-12.7,-3.7 L-11.7,-4.0 L-11.4,-4.3 L-11.2,-5.0 L-10.9,-5.5 L-10.5,-5.3 L-10.1,-5.3 L-10.6,-5.5 L-11.0,-6.2 L-11.1,-6.5 L-10.3,-7.5 L-9.9,-7.7 L-9.4,-8.2 L-9.0,-8.9 L-8.9,-10.1 L-9.1,-11.0 L-9.2,-11.9 L-9.0,-12.1 L-8.4,-12.2 L-7.9,-12.5 L-7.6,-12.8 L-7.0,-12.7 L-6.3,-13.2 L-5.2,-13.4 L-3.7,-13.8 L-3.4,-14.3 L-3.5,-15.0 Z M-9.4,5.6 L-9.5,5.8 L-10.0,5.8 L-10.1,5.7 L-10.1,5.5 L-10.0,4.9 L-9.9,4.6 L-9.5,4.3 L-9.2,4.2 L-8.8,4.2 L-8.4,4.5 L-8.9,4.9 L-9.1,5.0 L-9.2,5.0 L-9.4,5.6 Z M-3.7,-14.1 L-4.0,-14.0 L-4.1,-14.2 L-3.8,-14.5 L-3.7,-14.6 L-3.7,-14.1 Z" fill="#0B3B82" />
            </g>
            {/* El Mundo · globo terráqueo minimalista */}
            <g transform="translate(565,55)" stroke="#00B8D9" strokeWidth="2">
              <circle r="15" />
              <ellipse rx="6.6" ry="15" />
              <line x1="-15" y1="0" x2="15" y2="0" />
            </g>
          </svg>
        </div>
      </section>
    </>
  );
}