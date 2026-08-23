'use client';

const HERO_SEGMENT_SECONDS = 7;

export function AboutHeroSection() {
  return (
    <section
      id="inicio-acerca"
      className="js-about-hero relative flex min-h-[56svh] w-full items-center justify-center overflow-hidden bg-[#00285A]"
    >
      {/* VIDEO HERO V1 · segmento 0:00–0:07 en bucle — presentación institucional */}
      <video
        src="/images/landing/hero-v1.mp4"
        poster="/images/landing/galapagos-aerial.jpg"
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Video institucional de NeuroFamilia Galápagos"
        onTimeUpdate={(e) => {
          if (e.currentTarget.currentTime >= HERO_SEGMENT_SECONDS) {
            e.currentTarget.currentTime = 0;
          }
        }}
        className="js-about-hero-video h-[56svh] w-auto max-w-full object-contain sm:h-auto sm:max-h-[92svh] sm:w-full"
      />

      {/* Título institucional invisible — semántica/SEO sin competir con el video */}
      <h1 className="sr-only">
        Construyendo bienestar desde Galápagos para las nuevas generaciones
      </h1>
    </section>
  );
}
