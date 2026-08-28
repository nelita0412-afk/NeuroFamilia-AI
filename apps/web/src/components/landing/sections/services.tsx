import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  Briefcase,
  Compass,
  GraduationCap,
  Globe,
  Home,
  Landmark,
  Mail,
  MessageCircleHeart,
  MonitorSmartphone,
  Phone,
  Presentation,
  Rocket,
  Sparkles,
  Users,
} from 'lucide-react';
import { Counter } from '../counter';
import { IMPACT_METRICS } from '@/lib/impact-metrics';

/* ── 1. HERO · Qué problema resolvemos ─────────────────── */

/* ── 2. A quién ayudamos ───────────────────────────────── */

const AUDIENCES = [
  {
    icon: Home,
    href: '/caminos/familia',
    title: 'Familias',
    detail: 'Rutinas, emociones y proyectos de vida para cuidar en casa. Ideas claras para la semana, no teorías.',
  },
  {
    icon: Rocket,
    href: '/caminos/adolescente',
    title: 'Adolescentes',
    detail: 'Un espacio para preguntar sin vergüenza: quién soy, qué quiero, cómo me siento.',
  },
  {
    icon: Briefcase,
    href: '/caminos/profesional',
    title: 'Profesionales',
    detail: 'Herramientas con evidencia para hacer seguimiento y decidir con datos, no con intuición.',
  },
  {
    icon: Landmark,
    href: '/caminos/institucion',
    title: 'Instituciones',
    detail: 'El modelo completo, desplegado por etapas con formación y soporte para tu equipo.',
  },
];

/* ── 3. Cómo lo hacemos ────────────────────────────────── */

const METHODS = [
  {
    icon: MessageCircleHeart,
    title: 'Primeros Auxilios Psicológicos',
    detail: 'Cuando la angustia no puede esperar: una primera conversación inmediata y confidencial.',
    badge: '+500 conversaciones',
    href: 'mailto:neurofamiliagps@gmail.com?subject=Necesito%20orientaci%C3%B3n%20ahora%20%2D%20NeuroFamilia',
    linkLabel: 'Necesito orientación ahora',
  },
  {
    icon: Sparkles,
    title: 'NeuroMentores',
    detail: 'Ocho voces que convierten cada dimensión del crecimiento en un consejo práctico para hoy.',
    href: '/neuromentores',
    linkLabel: 'Probar un mentor',
  },
  {
    icon: Compass,
    title: 'Plataforma',
    detail: 'Un modo de crecer con evidencia: seguimiento, prácticas y recursos donde esté la familia.',
    href: '/plataforma',
    linkLabel: 'Ver la plataforma',
  },
  {
    icon: Presentation,
    title: 'Formación y talleres',
    detail: 'Equipos y comunidades con método para sostener el cambio junto a especialistas.',
    href: '/caminos/institucion',
    linkLabel: 'Explorar para instituciones',
  },
];

/* ── 4. Por qué confiar en nosotros ────────────────────── */

const TRUST_PILLARS = [
  {
    icon: Globe,
    title: 'Nacido donde el acceso escasea',
    detail: 'Galápagos es el laboratorio: si funciona en una isla, puede funcionar en cualquier comunidad.',
  },
  {
    icon: Brain,
    title: 'Una mirada integral',
    detail: 'No fragmentamos: propósito, emociones, aprendizaje, vínculos, resiliencia, participación, creatividad y transformación digital se trabajan en conjunto.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Tecnología con rostro humano',
    detail: 'La IA y los datos existen para acercar conversaciones y cuidados, nunca para reemplazarlos.',
  },
  {
    icon: BadgeCheck,
    title: 'Evidencia y redes',
    detail: 'Reconocido en el Global Research Symposium de la UNC y alineado con los ODS de Naciones Unidas.',
  },
];

const ODS = [3, 4, 10, 16, 17];

function ImpactNumber({ icon: Icon, value, suffix, label }: { icon: typeof Users; value: number; suffix?: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-[#00B8D9]/15 ring-1 ring-[#00B8D9]/40">
        <Icon className="h-6 w-6 text-[#00B8D9]" />
      </span>
      <p className="mt-5 flex items-baseline gap-1 text-6xl font-extrabold tracking-tight text-white [text-shadow:0_0_40px_rgba(0,184,217,0.45)] sm:text-7xl">
        <Counter target={value} thousandSeparator />
        {suffix && <span className="text-4xl text-[#00B8D9] sm:text-5xl">{suffix}</span>}
      </p>
      <p className="mt-3 max-w-[240px] text-sm leading-6 text-white/75">{label}</p>
    </div>
  );
}

/* ── 5. Cómo iniciar una conversación ─────────────────── */

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

export function ServicesSection() {
  return (
    <div className="relative bg-white">
      {/* ═══════════ 1 · HERO — QUÉ PROBLEMA RESOLVEMOS ═══════════ */}
      <section className="js-servicios-hero relative overflow-hidden bg-[#F0F7FF] px-5 pb-16 pt-12 sm:px-8 sm:pt-14">
        <span className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#00B8D9]/15 blur-3xl" aria-hidden="true" />
        <span className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#0066CC]/15 blur-3xl" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="js-servicios-hero-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
            El punto de partida
          </p>
          <h1 className="js-servicios-hero-title mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-[1.12] text-[#0B3B82] sm:text-[2.75rem]">
            Ninguna pregunta sobre crecer debería quedarse sin respuesta.
          </h1>
          <p className="js-servicios-hero-sub mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#0B3B82]/70 sm:text-base">
            En muchas comunidades no faltan ganas ni talento: faltan espacios, tiempo y especialistas
            en el momento en que se los necesita. NeuroFamilia acorta esa distancia con conversaciones,
            herramientas y un modelo que ya funciona en las islas.
          </p>
          <div className="js-servicios-hero-cta mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaPrimary href="#contactar">Empezar la conversación</CtaPrimary>
            <CtaGhost href="/neuromentores">Conocer los NeuroMentores</CtaGhost>
          </div>
        </div>

        <div className="js-servicios-hero-visual relative mx-auto mt-8 max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/60 shadow-[0_40px_80px_rgba(11,59,130,0.22)]">
            <Image
              src="/images/landing/hero-5.png"
              alt="Ecosistema NeuroFamilia: conexión entre las comunidades insulares de Galápagos"
              width={1672}
              height={940}
              priority
              unoptimized
              className="h-auto w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B3B82]/35 via-transparent to-transparent" aria-hidden="true" />
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-[#0066CC]/10 bg-white px-4 py-3 shadow-[0_20px_48px_rgba(11,59,130,0.16)] sm:left-10">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#00B8D9]/10 text-[#0066CC]">
              <MessageCircleHeart className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[12px] leading-4 font-bold text-[#0B3B82]">Conversaciones con rostro</p>
              <p className="text-[11px] leading-4 text-[#0B3B82]/60">ocho mentores, un mismo territorio</p>
            </div>
          </div>
          <div className="absolute -bottom-5 right-6 rounded-full bg-[#00B8D9] px-4 py-2 text-[11px] font-extrabold text-[#0B3B82] shadow-[0_12px_28px_rgba(0,184,217,0.45)] sm:right-10">
            +500 conversaciones
          </div>
        </div>
      </section>

      {/* ═══════════ 2 · A QUIÉN AYUDAMOS ═══════════ */}
      <section className="js-servicios-audiences relative overflow-hidden bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SceneHead kicker="A quién ayudamos" title="¿Qué necesitas hoy?" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-7 text-[#072A5C]">
            Cuatro puntos de partida, un mismo objetivo: crecer con más recursos y menos dudas.
          </p>
          <ul className="js-servicios-audience-grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map(({ icon: Icon, href, title, detail }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-2xl border border-[#0066CC]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(11,59,130,0.14)]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#0066CC]/8 text-[#0066CC] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-[#0B3B82]">{title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-6 text-[#072A5C]">{detail}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0066CC]">
                    Explorar este camino
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════ 3 · CÓMO LO HACEMOS ═══════════ */}
      <section className="js-servicios-methods relative overflow-hidden bg-[#F0F7FF] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SceneHead kicker="Cómo lo hacemos" title="Cuatro puertas de entrada" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-7 text-[#072A5C]">
            Cada puerta responde a un momento distinto: cuando urge, cuando se quiere crecer, cuando se
            quiere sostener o cuando se quiere escalar.
          </p>
          <ul className="js-servicios-methods-grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {METHODS.map(({ icon: Icon, title, detail, badge, href, linkLabel }) => (
              <li key={title} className="flex h-full flex-col rounded-2xl border border-[#0066CC]/10 bg-white p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#0066CC]/8 text-[#0066CC]">
                    <Icon className="h-6 w-6" />
                  </span>
                  {badge && (
                    <span className="rounded-full bg-[#00B8D9]/10 px-3 py-1 text-[11px] font-bold text-[#0066CC]">
                      {badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-base font-extrabold text-[#0B3B82]">{title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-6 text-[#072A5C]">{detail}</p>
                {href && (
                  <Link
                    href={href}
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0066CC]"
                  >
                    {linkLabel}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════ 4 · POR QUÉ CONFIAR EN NOSOTROS ═══════════ */}
      <section className="js-servicios-trust relative overflow-hidden bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SceneHead kicker="Por qué confiar en nosotros" title="Un modelo probado, no una promesa" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-7 text-[#072A5C]">
            Cuatro razones que hacen de NeuroFamilia una respuesta distinta a las que existen hoy.
          </p>
          <ul className="js-servicios-trust-grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_PILLARS.map(({ icon: Icon, title, detail }) => (
              <li key={title} className="flex h-full flex-col rounded-2xl border border-[#0066CC]/10 bg-white p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#0B3B82] text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-extrabold text-[#0B3B82]">{title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-[#072A5C]">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════ IMPACTO · VISUAL · EL MOMENTO DE CONFIANZA ═══════════ */}
      <section className="js-servicios-impact relative overflow-hidden bg-gradient-to-br from-[#0B3B82] via-[#0B3B82] to-[#0066CC] px-5 py-16 sm:px-8 sm:py-24">
        <span className="pointer-events-none absolute left-1/2 top-0 h-96 w-[760px] -translate-x-1/2 rounded-full bg-[#00B8D9]/25 blur-3xl" aria-hidden="true" />
        <span className="pointer-events-none absolute -bottom-24 left-1/2 h-80 w-[620px] -translate-x-1/2 rounded-full bg-[#00B8D9]/15 blur-3xl" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#00B8D9]">Nuestro impacto en cifras</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Resultados que se conversan en números
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-white/70">
              Un modelo nacido en una isla, hoy leído en conversaciones y datos reales.
            </p>
          </div>

          <div className="relative">
            <span className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[880px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B8D9]/20 blur-3xl" aria-hidden="true" />
            <dl className="js-servicios-impact-grid relative mt-10 grid gap-12 sm:grid-cols-3">
              {IMPACT_METRICS.map(({ icon, value, suffix, label }) => (
                <ImpactNumber key={label} icon={icon} value={value} suffix={suffix} label={label} />
              ))}
            </dl>
          </div>

          <div className="js-servicios-unc mx-auto mt-10 flex max-w-3xl flex-col items-center gap-5 rounded-3xl bg-white/10 px-6 py-8 text-center ring-1 ring-white/25 backdrop-blur-sm sm:px-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#00B8D9]/20 text-[#00B8D9] ring-1 ring-[#00B8D9]/40">
              <GraduationCap className="h-7 w-7" />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#00B8D9]">Reconocimiento internacional</p>
              <p className="mt-2 text-xl font-extrabold leading-snug text-white sm:text-2xl">
                Presentado en el Global Research Symposium de UNC Chapel Hill
              </p>
              <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-white/70">
                Una práctica que nació en escuelas de Galápagos, en un escenario global de investigación.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">
              Alineados con los ODS de Naciones Unidas
            </p>
            <div className="js-servicios-ods flex flex-wrap items-center justify-center gap-3">
              {ODS.map((n) => (
                <span key={n} className="rounded-full bg-white/10 px-3 py-1 text-[12px] font-bold text-[#00B8D9] ring-1 ring-white/20">
                  ODS {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 5 · CÓMO INICIAR UNA CONVERSACIÓN ═══════════ */}
      <section id="contactar" className="js-servicios-contact relative overflow-hidden bg-[#F0F7FF] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">Cómo iniciar</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
            Conversemos
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#072A5C]">
            Cuéntanos qué necesita tu familia, tu institución o tu comunidad. En dos pasos llegamos a ti.
          </p>

          <ol className="mx-auto mt-10 grid max-w-2xl gap-4 text-left sm:grid-cols-2">
            <li className="rounded-2xl border border-[#0066CC]/10 bg-white p-6">
              <span className="text-3xl font-extrabold text-[#0B3B82]/10">01</span>
              <h3 className="mt-2 text-base font-extrabold text-[#0B3B82]">Cuéntanos tu punto de partida</h3>
              <p className="mt-1.5 text-[13px] leading-6 text-[#072A5C]">
                Escríbenos por correo o llámanos: quién eres y qué necesitas hoy.
              </p>
            </li>
            <li className="rounded-2xl border border-[#0066CC]/10 bg-white p-6">
              <span className="text-3xl font-extrabold text-[#0B3B82]/10">02</span>
              <h3 className="mt-2 text-base font-extrabold text-[#0B3B82]">Recibe el primer paso concreto</h3>
              <p className="mt-1.5 text-[13px] leading-6 text-[#072A5C]">
                Te proponemos un punto de partida claro, dentro del modelo, sin compromisos.
              </p>
            </li>
          </ol>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaPrimary href="mailto:neurofamiliagps@gmail.com?subject=Solicitud%20de%20conversación%20%2D%20NeuroFamilia">
              Solicitar una conversación
            </CtaPrimary>
            <a
              href="tel:+593980406055"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 hover:bg-[#0B3B82]/5"
              style={{ color: '#0B3B82', border: '1.5px solid rgba(11,59,130,0.35)' }}
            >
              <Phone className="h-4 w-4" />
              Llamar · +593 98 040 6055
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-[13px] text-[#0B3B82]/60">
            <Mail className="h-4 w-4" />
            neurofamiliagps@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}