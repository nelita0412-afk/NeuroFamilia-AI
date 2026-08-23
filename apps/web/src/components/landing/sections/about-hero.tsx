export function AboutHeroSection() {
  return (
    <section className="js-about-hero relative flex w-full justify-center overflow-hidden bg-[#00285A]">
      {/* VIDEO HERO V4 · ecosistema NeuroFamilia — pieza institucional completa */}
      <video
        src="/images/landing/hero-v4.mp4"
        preload="auto"
        autoPlay
        muted
        playsInline
        aria-label="Ecosistema NeuroFamilia: conexión entre comunidades insulares de Galápagos"
        className="js-about-hero-video block h-auto w-full max-w-[1100px] object-contain"
      />

      {/* Título institucional invisible — semántica/SEO sin competir con el video */}
      <h1 className="sr-only">
        Construyendo bienestar desde Galápagos para las nuevas generaciones
      </h1>
    </section>
  );
}
