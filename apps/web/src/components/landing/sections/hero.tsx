import Link from 'next/link';
import { HeroTurtlePremium } from '../svg/hero-turtle-premium';
import { GalapagosScene } from '../svg/galapagos-scene';

const BOTTOM_ITEMS = [
  {
    icon: '🏝️',
    label: 'Archipiélago',
    desc: '8 dimensiones del desarrollo humano',
    href: '#archipielago',
  },
  {
    icon: '🤖',
    label: 'ALBA',
    desc: 'Mentora IA para acompañamiento familiar',
    href: '#mentores',
  },
  {
    icon: '📚',
    label: 'Recursos',
    desc: 'Guías y herramientas',
    href: '#recursos',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    label: 'Comunidad',
    desc: 'Familias, jóvenes y profesionales',
    href: '#comunidad',
  },
  {
    icon: '📈',
    label: 'Seguimiento',
    desc: 'Visualización del crecimiento',
    href: '#seguimiento',
  },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="js-hero relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1F44 0%, #0E3060 25%, #144A7A 50%, #1A6BA5 70%, #1E7BB8 100%)' }}
    >
      {/* Fondo Galápagos inmersivo */}
      <GalapagosScene className="absolute inset-0 w-full h-full -z-10" />

      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 pt-6 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="NeuroFamilia Galápagos - Inicio">
          <span className="text-2xl font-extrabold text-[#F8FBFF] tracking-tight">
            NeuroFamilia <span className="text-[#FFD700]">Galápagos</span>
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="#archipielago"
            className="text-sm font-medium text-[#F8FBFF]/80 hover:text-[#FFD700] transition-colors duration-200"
          >
            Archipiélago
          </Link>
          <Link
            href="#mentores"
            className="text-sm font-medium text-[#F8FBFF]/80 hover:text-[#FFD700] transition-colors duration-200"
          >
            Mentores
          </Link>
          <Link
            href="#recursos"
            className="text-sm font-medium text-[#F8FBFF]/80 hover:text-[#FFD700] transition-colors duration-200"
          >
            Recursos
          </Link>
          <Link
            href="#comunidad"
            className="text-sm font-medium text-[#F8FBFF]/80 hover:text-[#FFD700] transition-colors duration-200"
          >
            Comunidad
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-6 py-2.5 text-sm font-bold text-[#0A1F44] shadow-[0_8px_24px_rgba(255,215,0,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(255,215,0,0.5)]"
          >
            Conocer NeuroFamilia
          </Link>
        </nav>
        
        <Link
          href="/login"
          className="lg:hidden inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-5 py-2 text-sm font-bold text-[#0A1F44] shadow-[0_8px_24px_rgba(255,215,0,0.4)] transition-all duration-200 hover:-translate-y-0.5"
        >
          Conocer NeuroFamilia
        </Link>
      </header>

      <main className="relative z-10 flex-1 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:px-12">
          <div className="js-hero-layout grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-14rem)]">
            
            {/* LADO IZQUIERDO - CONTENIDO (50%) */}
            <div className="js-hero-content relative z-10">
              <p className="js-hero-kicker text-xs font-bold uppercase tracking-[0.35em] text-[#FFD700] mb-5">
                Ecosistema humano y digital
              </p>
              
              <h1 className="js-hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.02] text-[#FFFFFF] mb-7 lg:pr-10">
                Cada persona tiene un
                <br />
                <span className="text-[#FFD700]">potencial extraordinario</span>
              </h1>
              
              <p className="js-hero-subtitle text-lg sm:text-xl text-[#F8FBFF]/85 max-w-xl lg:max-w-2xl mb-10 leading-relaxed">
                NeuroFamilia es un ecosistema humano y digital que integra ciencia, tecnología y comunidad para acompañar el desarrollo humano a lo largo de la vida.
              </p>
              
              {/* CTAs */}
              <div className="js-hero-cta flex flex-col sm:flex-row items-center gap-4 mb-14">
                <a
                  href="#proposito"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#FFD700] px-8 py-4 text-base font-bold text-[#0A1F44] shadow-[0_12px_32px_rgba(255,215,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,215,0,0.5)]"
                >
                  Conocer NeuroFamilia
                </a>
                <a
                  href="#archipielago"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#FFD700]/60 bg-transparent px-8 py-4 text-base font-bold text-[#FFD700] backdrop-blur transition-all duration-300 hover:bg-[#FFD700]/10 hover:-translate-y-1"
                >
                  Explorar el Archipiélago
                </a>
              </div>
              
              {/* Indicador de scroll */}
              <div className="js-scroll-indicator flex items-center justify-center gap-2 text-[#F8FBFF]/50 text-xs font-medium uppercase tracking-[0.3em]">
                <svg className="js-scroll-mouse h-6 w-6 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="6" strokeWidth="1.5" />
                  <circle cx="12" cy="9" r="1" fill="currentColor" />
                </svg>
                <span className="hidden sm:inline">Descubre el ecosistema</span>
              </div>
            </div>
            
            {/* LADO DERECHO - ILUSTRACIÓN HERO (50%) */}
            <div className="js-hero-turtle-side relative z-10 flex items-end justify-center">
              <div className="js-hero-turtle-wrap relative w-full max-w-lg lg:max-w-xl mx-auto">
                {/* Halo protector suave */}
                <div
                  className="absolute left-1/2 bottom-0 -translate-x-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-t from-[#FFD700]/25 via-[#FFA500]/10 to-transparent blur-3xl"
                  aria-hidden="true"
                />
                {/* Reflejo en el suelo */}
                <ellipse
                  className="js-hero-floor-reflection"
                  cx="50%"
                  cy="100%"
                  rx="55%"
                  ry="7%"
                  fill="#FFD700"
                  opacity="0.08"
                  style={{ filter: 'blur(40px)' }}
                />
                
                {/* Hero Tortuga Premium */}
                <HeroTurtlePremium 
                  className="js-hero-turtle relative w-full drop-shadow-[0_32px_64px_rgba(30,123,184,0.5)]" 
                  scale={1}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* BARRA INFERIOR DEL HERO - 5 pilares del ecosistema */}
      <div className="js-hero-bottom-bar relative z-10 mx-auto max-w-7xl px-5 pb-8 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-[#0A1F44] via-[#0E3060] to-[#0A1F44] p-4 sm:p-6 ring-1 ring-[#FFD700]/20 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {BOTTOM_ITEMS.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-300 hover:bg-[#FFD700]/5 hover:scale-[1.02]"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="text-2xl sm:text-3xl" aria-hidden="true">
                  {item.icon}
                </span>
                <p className="text-sm font-bold text-[#FFFFFF] group-hover:text-[#FFD700] transition-colors">
                  {item.label}
                </p>
                <p className="text-[11px] text-[#F8FBFF]/60 text-center group-hover:text-[#FFD700]/80 transition-colors max-w-xs">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FFD700] rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Onda decorativa suave en la base */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
        <svg viewBox="0 0 1440 96" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,60 Q360,40 720,60 Q1080,80 1440,60 L1440,96 L0,96 Z"
            fill="#0A1F44"
            opacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
}