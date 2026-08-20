import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ImmersiveOcean } from '../svg/immersive-ocean';
import { HeroTurtlePremium } from '../svg/hero-turtle-premium';
import { NeuralParticles } from '../svg/neural-particles';
import { FourPillars } from './four-pillars';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="js-hero relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #061A3A 0%, #0A2E5A 35%, #0A4E9B 60%, #1476C6 85%, #0A4E9B 100%)' }}
    >
      {/* Fondo inmersivo: océano cinematográfico */}
      <ImmersiveOcean className="absolute inset-0 w-full h-full -z-10" />
      
      {/* Partículas neuronales flotando en toda la pantalla */}
      <NeuralParticles count={40} className="absolute inset-0 pointer-events-none -z-10" />

      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 pt-8 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-4" aria-label="NeuroFamilia Galápagos - Inicio">
          <Image
            src="/images/logo/logo.png"
            alt="Logo NeuroFamilia Galápagos"
            width={60}
            height={60}
            className="h-16 w-16 object-contain drop-shadow-[0_8px_32px_rgba(2,32,76,0.5)]"
            priority
          />
          <div className="hidden lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F8FBFF]/80">Ecosistema de crecimiento humano</p>
            <p className="text-xl font-extrabold text-[#F8FBFF] leading-tight">NeuroFamilia <span className="text-[#29C7D8]">Galápagos</span></p>
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link
            href="/caminos"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-[#F8FBFF]/80 hover:text-[#29C7D8] transition-colors duration-200"
          >
            Caminos
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full bg-[#F8FBFF] px-6 py-3 text-sm font-bold text-[#0A4E9B] shadow-[0_12px_32px_rgba(248,251,255,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(248,251,255,0.4)]"
          >
            Conocer NeuroFamilia
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-10 sm:px-8 lg:px-12">
          <div className="js-hero-layout grid lg:grid-cols-[40fr_60fr] gap-12 lg:gap-16 items-center min-h-[calc(100vh-16rem)]">
            
            {/* LADO IZQUIERDO - CONTENIDO (40%) */}
            <div className="js-hero-content relative z-10 text-center lg:text-left">
              <p className="js-hero-kicker text-xs font-bold uppercase tracking-[0.35em] text-[#29C7D8] mb-4">
                Ecosistema de crecimiento humano
              </p>
              
              <h1 className="js-hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.02] text-[#F8FBFF] mb-6 lg:pr-8">
                Cada historia
                <br />
                <span className="text-[#29C7D8]">merece un camino</span>
                <br />
                <span className="text-[#F8FBFF]">para crecer.</span>
              </h1>
              
              <p className="js-hero-subtitle text-lg sm:text-xl text-[#F8FBFF]/85 max-w-lg lg:max-w-xl mb-10 leading-relaxed">
                NeuroFamilia es un ecosistema humano y digital que acompaña a niños, adolescentes, 
                familias y profesionales en su desarrollo integral.
              </p>
              
              {/* CTAs */}
              <div className="js-hero-cta flex flex-col sm:flex-row items-center gap-4 mb-14">
                <a
                  href="#proposito"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#F8FBFF] px-8 py-4 text-base font-bold text-[#0A4E9B] shadow-[0_16px_40px_rgba(248,251,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(248,251,255,0.45)]"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Conocer NeuroFamilia
                </a>
                <a
                  href="#archipielago"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#29C7D8]/60 bg-[#29C7D8]/10 px-8 py-4 text-base font-bold text-[#F8FBFF] backdrop-blur transition-all duration-300 hover:bg-[#29C7D8]/20 hover:border-[#29C7D8] hover:-translate-y-1"
                >
                  <svg className="h-5 w-5 text-[#29C7D8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" strokeWidth="2.5" />
                    <path d="M12 2v20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
                  </svg>
                  Explorar el Archipiélago
                </a>
              </div>
              
              {/* 4 Pilares visibles inmediatamente */}
              <FourPillars />
              
              {/* Indicador de scroll */}
              <div className="js-scroll-indicator mt-10 flex items-center justify-center lg:justify-start gap-2 text-[#F8FBFF]/50 text-xs font-medium uppercase tracking-[0.3em]">
                <svg className="js-scroll-mouse h-6 w-6 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="6" strokeWidth="1.5" />
                  <circle cx="12" cy="9" r="1" fill="currentColor" />
                </svg>
                <span className="hidden sm:inline">Explorar el viaje</span>
              </div>
            </div>
            
            {/* LADO DERECHO - HERO TORTUGA (60%) */}
            <div className="js-hero-turtle-side relative z-10 flex items-end justify-center lg:justify-center">
              <div className="js-hero-turtle-wrap relative w-full max-w-lg lg:max-w-2xl mx-auto">
                {/* Halo de luz cinematográfico detrás de Hero */}
                <div
                  className="absolute left-1/2 bottom-0 -translate-x-1/2 h-72 w-72 rounded-full bg-gradient-to-t from-[#29C7D8]/30 via-[#1476C6]/15 to-transparent blur-3xl"
                  aria-hidden="true"
                />
                {/* Reflejo en el suelo */}
                <ellipse
                  className="js-hero-floor-reflection"
                  cx="50%"
                  cy="100%"
                  rx="55%"
                  ry="8%"
                  fill="#29C7D8"
                  opacity="0.12"
                  style={{ filter: 'blur(40px)' }}
                />
                
                {/* Hero Tortuga Premium */}
                <HeroTurtlePremium 
                  className="js-hero-turtle relative w-full drop-shadow-[0_40px_80px_rgba(2,32,76,0.7)]" 
                  scale={1}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Onda decorativa en la base del hero */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <svg viewBox="0 0 1440 128" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,80 Q360,100 720,80 Q1080,60 1440,80 L1440,128 L0,128 Z"
            fill="url(#wave-gradient)"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#29C7D8" stopOpacity="0" />
              <stop offset="100%" stopColor="#29C7D8" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}