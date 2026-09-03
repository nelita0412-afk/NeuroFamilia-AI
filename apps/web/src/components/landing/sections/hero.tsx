import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="js-hero relative flex min-h-[800px] w-full flex-col items-center justify-center overflow-hidden bg-[#00285A] px-5 py-28 sm:px-8"
    >
      {/* VIDEO AÉREO — protagonista, overlay liviano para que el paisaje respire */}
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

      <div
        className="js-hero-overlay absolute inset-0 bg-[linear-gradient(rgba(0,40,90,0.28),rgba(0,40,90,0.42))]"
        aria-hidden="true"
      />

      <main className="js-hero-content relative z-10 mx-auto w-full max-w-4xl text-center">
        <p className="js-hero-eyebrow text-xs font-bold uppercase tracking-[0.3em] text-white/80">
          NeuroFamilia Galápagos
        </p>

        <h1 className="js-hero-title mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Crecer en familia, con guías, datos y calma.
        </h1>

        <p className="js-hero-subtitle mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
          Mentores con identidad propia, evidencia científica y un lugar para cada pregunta sobre
          crecer.{' '}
          <span className="font-semibold text-white/95">Nacido en Galápagos.</span>
        </p>

        <div className="js-hero-cta mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="mailto:neurofamiliagps@gmail.com?subject=Quiero%20que%20mi%20familia%20crezca%20con%20gu%C3%ADa%20%2D%20NeuroFamilia"
            className="inline-flex items-center gap-2 rounded-full bg-[#00B8D9] px-8 py-3.5 text-sm font-bold text-[#0B3B82] shadow-[0_12px_32px_rgba(0,184,217,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            Hablemos de tu familia
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/plataforma"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-8 py-3.5 text-sm font-bold text-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 hover:text-white"
          >
            Ver cómo funciona
          </Link>
        </div>
      </main>
    </section>
  );
}