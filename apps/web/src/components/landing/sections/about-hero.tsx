export function AboutHeroSection() {
  return (
    <section className="js-about-hero relative flex h-[100svh] min-h-[700px] w-full flex-col overflow-hidden bg-[#00285A]">
      {/* VIDEO HERO V1 — único protagonista del Hero */}
      <video
        src="/images/landing/hero-v1.mp4"
        poster="/images/landing/galapagos-aerial.jpg"
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="js-about-hero-video absolute inset-0 h-full w-full object-cover"
      />

      {/* Velo muy suave solo para contraste, sin opacar el contenido del video */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,40,90,0.15),rgba(0,40,90,0.32))]"
        aria-hidden="true"
      />

      {/* Título institucional invisible — mantiene la semántica/SEO sin competir visualmente */}
      <h1 className="sr-only">
        Construyendo bienestar desde Galápagos para las nuevas generaciones
      </h1>
    </section>
  );
}
