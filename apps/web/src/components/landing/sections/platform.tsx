import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  BookOpen,
  Compass,
  GraduationCap,
  MessageCircleHeart,
  MoveRight,
} from 'lucide-react';
import { MENTOR_NAMES } from '@neurofamilia/shared';
import { MENTOR_IDENTITY } from '@/lib/mentor-identity';
import { MENTOR_COLORS } from '@/lib/mentor-visuals';

/* ── Escena 2 · Cómo te ayuda ─────────────────────────────── */

const CAPABILITIES = [
  {
    icon: Activity,
    title: 'Ver el avance',
    detail: 'Saber qué está funcionando y qué necesita atención, sin depender de suposiciones.',
  },
  {
    icon: Compass,
    title: 'Un camino propio',
    detail: 'Cada persona avanza a su ritmo, con un recorrido claro para esta semana.',
  },
  {
    icon: MessageCircleHeart,
    title: 'Un mentor cuando dudas',
    detail: 'Pregunta cuando no sepas qué hacer: una respuesta con un paso concreto.',
  },
  {
    icon: BookOpen,
    title: 'El recurso adecuado',
    detail: 'Contenido y prácticas listas para lo que estás viviendo hoy.',
  },
];

/* ── Escena 4 · Todo conectado ────────────────────────────── */

const FLOW = [
  {
    n: '01',
    title: 'La familia ve el avance',
    detail: 'El progreso se muestra cada semana, sin reuniones ni reportes pendientes.',
  },
  {
    n: '02',
    title: 'Un mentor responde la duda',
    detail: 'Deja un siguiente paso claro dentro de la ruta.',
  },
  {
    n: '03',
    title: 'Los recursos siguen el camino',
    detail: 'Aparecen justo donde el progreso los pide.',
  },
  {
    n: '04',
    title: 'El profesional ajusta con datos',
    detail: 'Actúa con la misma evidencia que la familia ya está viendo.',
  },
];

/* ── Escena 5 · Confianza ─────────────────────────────────── */

const PROOF = [
  {
    title: 'UNC Chapel Hill',
    note: 'Práctica presentada en un escenario internacional de investigación.',
  },
  {
    title: 'ODS 3 · 4 · 10 · 16 · 17',
    note: 'Diseñada en línea con los Objetivos de Desarrollo Sostenible.',
  },
  {
    title: '500+ conversaciones reales',
    note: 'Probada con familias de las islas antes de hablar de cifras.',
  },
];

/* ── Escena 3 · Así se ve por dentro · leyendas ───────────── */

const CAPTIONS = [
  {
    device: 'Escritorio',
    title: 'El mapa de los últimos meses',
    text: 'Qué avanza y qué pide atención.',
  },
  {
    device: 'Móvil',
    title: 'El mentor en el bolsillo',
    text: 'Una duda, una respuesta y un paso concreto para hoy.',
  },
];

/* ═══════════════════════════════════════════════════════════
   MOCKUPS EXISTENTES — no se modifican (activo visual clave)
   ═══════════════════════════════════════════════════════════ */

function MiniPoster({ name }: { name: string }) {
  const identity = MENTOR_IDENTITY[name];
  const color = MENTOR_COLORS[name];
  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-[#F8FBFF]">
      <Image
        src={identity.image}
        alt={`Mentor ${name}`}
        fill
        sizes="80px"
        loading="lazy"
        className="object-contain"
      />
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-1.5 py-0.5 text-[7px] font-extrabold" style={{ color: color.primary }}>
        {name}
      </span>
    </div>
  );
}

function DesktopFrame() {
  return (
    <div className="js-platform-desktop w-full overflow-hidden rounded-2xl bg-[#F8FBFF] shadow-[0_40px_90px_rgba(2,32,76,0.6)] ring-1 ring-white/20">
      <div className="flex items-center gap-2 border-b border-[#0A4E9B]/10 bg-white px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#29C7D8]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#1476C6]/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#0A4E9B]/40" />
        <span className="ml-3 h-5 flex-1 rounded-full bg-[#0A4E9B]/5" />
      </div>
      <div className="flex gap-4 p-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-[#29C7D8] to-[#1476C6]" />
            <span className="text-[10px] font-bold text-[#0A4E9B]">Archipiélago</span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {MENTOR_NAMES.map((name) => (
              <MiniPoster key={name} name={name} />
            ))}
          </div>
        </div>
        <div className="hidden w-44 flex-col gap-2 sm:flex">
          <div className="rounded-xl bg-[#0A4E9B]/5 p-3">
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#0A4E9B]/60">Seguimiento</p>
            <div className="mt-2 h-2 w-full rounded-full bg-[#29C7D8]/30" />
            <div className="mt-1.5 h-2 w-3/4 rounded-full bg-[#1476C6]/30" />
            <div className="mt-1.5 h-2 w-1/2 rounded-full bg-[#29C7D8]/20" />
          </div>
          <div className="rounded-xl bg-white p-3 shadow-sm">
            <p className="text-[9px] font-bold text-[#0A4E9B]">Mentor IA</p>
            <p className="mt-1 text-[9px] leading-4 text-[#0A4E9B]/60">ALBA · Proyecto de vida</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileFrame({ large = false }: { large?: boolean }) {
  const identity = MENTOR_IDENTITY['ALBA'];
  const color = MENTOR_COLORS['ALBA'];
  return (
    <div className={`js-platform-mobile overflow-hidden rounded-2xl bg-[#F8FBFF] shadow-[0_30px_70px_rgba(2,32,76,0.55)] ring-1 ring-white/20 ${large ? 'w-64' : 'w-44'}`}>
      <div className={`flex items-center gap-2 bg-white ${large ? 'px-4 py-3' : 'px-3 py-2.5'}`}>
        <div className={`overflow-hidden rounded-full ${large ? 'h-9 w-9' : 'h-6 w-6'}`} style={{ backgroundColor: color.primary }}>
          <Image src={identity.image} alt="ALBA" width={large ? 36 : 24} height={large ? 36 : 24} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className={`${large ? 'text-xs' : 'text-[9px]'} font-extrabold`} style={{ color: color.primary }}>ALBA</p>
          <p className={`${large ? 'text-[8px]' : 'text-[7px]'} text-[#0A4E9B]/50`}>Proyecto de vida</p>
        </div>
      </div>
      <div className={`flex flex-col gap-2 ${large ? 'p-3.5' : 'p-3'}`}>
        <div className={`ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#29C7D8]/25 text-[#0A4E9B] ${large ? 'px-4 py-3 text-[11px] leading-[17px]' : 'px-3 py-2 text-[9px] leading-4'}`}>
          Quiero encontrar un rumbo para mi hijo
        </div>
        <div className={`mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-white text-[#0A4E9B]/80 shadow-sm ${large ? 'px-4 py-3 text-[11px] leading-[17px]' : 'px-3 py-2 text-[9px] leading-4'}`}>
          Podemos explorar juntos su proyecto de vida, paso a paso y sin prisas.
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PEQUEÑOS COMPONENTES DE UI
   ═══════════════════════════════════════════════════════════ */

function SceneHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">{kicker}</p>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">{title}</h2>
    </div>
  );
}

function CtaPrimary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
      style={{ backgroundColor: '#00B8D9', color: '#0B3B82', border: '1.5px solid #00B8D9', boxShadow: '0 8px 24px rgba(0,184,217,0.35)' }}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function CtaGhost({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 hover:bg-[#0066CC]/5"
      style={{ color: '#0066CC', border: '1.5px solid rgba(0,102,204,0.35)' }}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════
   PÁGINA · 6 ESCENAS
   ═══════════════════════════════════════════════════════════ */

export function PlatformSection() {
  return (
    <div className="relative bg-white">
      {/* ══ ESCENA 1 · HERO · "¿Qué hace esta herramienta por mí?" ══ */}
      <section className="js-platform-hero relative overflow-hidden bg-[#F0F7FF] px-5 pb-12 pt-12 text-center sm:px-8 sm:pt-14">
        <span className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#00B8D9]/15 blur-3xl" aria-hidden="true" />
        <span className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#0066CC]/15 blur-3xl" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="js-platform-hero-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
            Lo que cambia
          </p>
          <h1 className="js-platform-hero-h1 mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] text-[#0B3B82] sm:text-5xl">
            El crecimiento, hecho visible.
          </h1>
          <p className="js-platform-hero-sub mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#0B3B82]/70 sm:text-base">
            Sigue el avance, conversa con mentores y encuentra recursos en un mismo lugar.
          </p>
          <div className="js-platform-hero-cta mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaPrimary href="mailto:neurofamiliagps@gmail.com?subject=Solicito%20acceso%20a%20la%20plataforma%20%2D%20NeuroFamilia">
              Solicitar acceso
            </CtaPrimary>
            <CtaGhost href="#asi-se-ve">Ver la plataforma en acción</CtaGhost>
          </div>
        </div>

        <div className="js-platform-hero-visual relative z-10 mx-auto mt-8">
          <MobileFrame large />
        </div>
      </section>

      {/* ══ ESCENA 2 · CÓMO TE AYUDA · 4 capacidades-resultado ══ */}
      <section className="js-platform-capabilities relative overflow-hidden bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SceneHead kicker="Lo que cambia" title="Dejar de adivinar." />
          <ul className="js-platform-features mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map(({ icon: Icon, title, detail }) => (
              <li
                key={title}
                className="flex h-full flex-col rounded-2xl border border-[#0066CC]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(11,59,130,0.14)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#0066CC]/8 text-[#0066CC]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-[#0B3B82]">{title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-6 text-[#072A5C]">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══ ESCENA 3 · ASÍ SE VE POR DENTRO · CLÍMAX VISUAL ══ */}
      <section
        id="asi-se-ve"
        className="js-platform-demo relative overflow-hidden bg-gradient-to-b from-[#0066CC] to-[#0B3B82] px-5 pb-16 pt-14 text-center sm:px-8 sm:pb-16 sm:pt-16"
      >
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="js-platform-demo-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#00B8D9]">
            Así se ve
          </p>
          <h2 className="js-platform-demo-title mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            La pantalla de quien empieza hoy
          </h2>
          <p className="js-platform-demo-sub mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-white/80">
            Cada familia llega con una pregunta distinta. Así se ve el punto de partida: un mapa de
            avance, un mentor disponible y un profesional mirando los mismos datos.
          </p>

          <div className="js-platform-stage relative mt-10 flex flex-col items-center gap-8">
            <div className="js-platform-desktop-wrap w-full lg:w-[min(680px,90vw)]">
              <DesktopFrame />
            </div>
            <div className="js-platform-mobile-wrap w-full max-w-[300px] lg:hidden">
              <MobileFrame large />
            </div>
          </div>

          <ul className="js-platform-captions mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {CAPTIONS.map(({ device, title, text }) => (
              <li
                key={device}
                className="rounded-2xl bg-white/10 p-6 text-left ring-1 ring-white/20 backdrop-blur-sm"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00B8D9]">{device}</p>
                <p className="mt-2 text-base font-extrabold text-white">{title}</p>
                <p className="mt-1.5 text-[13px] leading-6 text-white/70">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══ ESCENA 4 · TODO CONECTADO · flujo-mecanismo ══ */}
      <section className="js-platform-flow-sec relative overflow-hidden bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SceneHead kicker="Todo encaja" title="Cuatro piezas, un mismo hilo" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-7 text-[#072A5C]">
            No se trata de sumar herramientas: se trata de que cada persona del entorno de tu hijo lea la
            misma información y actúe en el mismo sentido.
          </p>

          <div className="js-platform-flow mt-12 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
            {FLOW.map((item, i) => (
              <Fragment key={item.n}>
                <div className="group relative flex-1 rounded-2xl border border-[#0066CC]/10 bg-[#F7FAFF] p-6">
                  <span className="absolute -top-3 left-6 grid h-7 w-7 place-items-center rounded-full bg-[#00B8D9] text-[11px] font-extrabold text-[#0B3B82]">
                    {item.n}
                  </span>
                  <h3 className="text-base font-extrabold text-[#0B3B82]">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#072A5C]">{item.detail}</p>
                </div>
                {i < FLOW.length - 1 && (
                  <MoveRight
                    className="mx-auto h-6 w-6 shrink-0 rotate-90 text-[#00B8D9] lg:rotate-0"
                    aria-hidden="true"
                  />
                )}
              </Fragment>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] font-bold leading-7 text-[#0B3B82]">
            Conversación → recurso → seguimiento → conversación.
          </p>
        </div>
      </section>

      {/* ══ ESCENA 5 · CONFIANZA · ligera ══ */}
      <section className="js-platform-proof-sec relative overflow-hidden bg-[#F0F7FF] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-extrabold leading-tight text-[#0B3B82] sm:text-3xl">
            Hecho en Galápagos, con respaldo global
          </h2>
          <div className="js-platform-proof mt-10 grid gap-8 sm:grid-cols-3">
            {PROOF.map(({ title, note }) => (
              <div key={title} className="border-l-4 border-[#00B8D9] pl-5">
                <p className="inline-flex items-center gap-2 text-[15px] font-extrabold leading-6 text-[#0B3B82]">
                  {title.includes('UNC') && <GraduationCap className="h-4 w-4 text-[#0066CC]" />}
                  {title}
                </p>
                <p className="mt-1.5 text-[13px] leading-6 text-[#072A5C]/80">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ESCENA 6 · CONVERSIÓN ══ */}
      <section className="js-platform-close relative overflow-hidden bg-gradient-to-b from-[#0B3B82] to-[#06285C] px-5 py-20 text-center sm:px-8 sm:py-24">
        <span className="pointer-events-none absolute left-1/2 top-0 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[#00B8D9]/20 blur-3xl" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#00B8D9]">Paso siguiente</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Verla en acción vale más que cualquier descripción
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-white/75">
            Cuéntanos qué quieres resolver y te mostramos la plataforma con datos y casos reales.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaPrimary href="mailto:neurofamiliagps@gmail.com?subject=Solicitud%20de%20demostración%20%2D%20NeuroFamilia">
              Solicitar una demostración
            </CtaPrimary>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 hover:bg-white/10"
              style={{ color: '#FFFFFF', border: '1.5px solid rgba(255,255,255,0.35)' }}
            >
              Conocer los servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}