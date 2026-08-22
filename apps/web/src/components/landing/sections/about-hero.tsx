import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export function AboutHeroSection() {
  return (
    <section className="js-about-hero relative flex h-[70svh] min-h-[520px] w-full items-center justify-center overflow-hidden bg-[#00285A]">
      {/* Fotografía aérea de Galápagos — mismo recurso que el Home, tratamiento institucional */}
      <Image
        src="/images/landing/galapagos-aerial.jpg"
        alt="Vista aérea de la costa de Galápagos"
        fill
        priority
        sizes="100vw"
        className="js-about-hero-image object-cover"
      />

      {/* Velo navy institucional (más profundo que el Home) */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,40,90,0.45),rgba(0,40,90,0.62))]"
        aria-hidden="true"
      />

      {/* Contenido centrado */}
      <main className="relative z-10 mx-auto max-w-5xl px-5 pb-10 text-center sm:px-8">
        <p className="js-about-hero-kicker text-xs font-bold uppercase tracking-[0.35em] text-[#00B8D9]">
          Acerca de NeuroFamilia
        </p>
        <h1 className="js-about-hero-title mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
          Construyendo bienestar desde Galápagos para las nuevas generaciones
        </h1>
        <p className="js-about-hero-subtitle mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
          NeuroFamilia integra salud mental, desarrollo humano e innovación social para
          fortalecer a niños, adolescentes, familias y comunidades.
        </p>
        <a
          href="#proposito"
          className="js-about-hero-cta mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#00285A] shadow-[0_12px_32px_rgba(0,40,90,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00B8D9] hover:text-white"
        >
          Conoce nuestro propósito
          <ArrowDown className="h-4 w-4" />
        </a>
      </main>
    </section>
  );
}
