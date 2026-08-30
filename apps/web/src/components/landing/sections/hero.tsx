import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="js-hero relative flex min-h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-[#00285A] px-5 py-24 sm:px-8"
    >
      {/* VIDEO AÉREO REAL DE GALÁPAGOS — protagonista, sin marcos */}
      <video
        src="/images/landing/hero.mp4"
        poster="/images/landing/galapagos-aerial.jpg"
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="js-hero-image absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAY INSTITUCIONAL */}
      <div
        className="js-hero-overlay absolute inset-0 bg-[linear-gradient(rgba(0,40,90,0.45),rgba(0,40,90,0.6))]"
        aria-hidden="true"
      />

      {/* CONTENIDO PRINCIPAL — promesa de producto */}
      <main className="js-hero-content relative z-10 mx-auto w-full max-w-4xl text-center">
        <p className="js-hero-eyebrow text-xs font-bold uppercase tracking-[0.3em] text-white/75">
          NeuroFamilia Galápagos
        </p>

        <h1 className="js-hero-title mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Crecer en familia, con datos, guías y calma.
        </h1>

        <p className="js-hero-subtitle mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
          Sigue el avance de tu hijo, conversa con NeuroMentores y encuentra recursos y servicios
          para cada etapa.
        </p>

        <div className="js-hero-cta mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="mailto:neurofamiliagps@gmail.com?subject=Solicitud%20de%20acceso%20%2D%20NeuroFamilia"
            className="inline-flex items-center gap-2 rounded-full bg-[#00B8D9] px-8 py-3.5 text-sm font-bold text-[#0B3B82] shadow-[0_12px_32px_rgba(0,184,217,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            Solicitar acceso
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/plataforma"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
          >
            Ver la plataforma
          </Link>
        </div>
      </main>
    </section>
  );
}