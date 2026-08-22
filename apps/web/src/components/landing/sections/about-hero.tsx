export function AboutHeroSection() {
  return (
    <section className="js-about-hero relative flex h-[70svh] min-h-[520px] w-full items-center justify-center overflow-hidden bg-[#00285A]">
      {/* VIDEO HERO V1 — protagonista cinematográfico del Hero */}
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

      {/* Velo navy institucional para legibilidad del texto */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,40,90,0.45),rgba(0,40,90,0.62))]"
        aria-hidden="true"
      />

      {/* Contenido mínimo — kicker + título */}
      <main className="relative z-10 mx-auto max-w-5xl px-5 pb-6 text-center sm:px-8">
        <p className="js-about-hero-kicker text-xs font-bold uppercase tracking-[0.35em] text-[#00B8D9]">
          Acerca de NeuroFamilia
        </p>
        <h1 className="js-about-hero-title mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
          Construyendo bienestar desde Galápagos para las nuevas generaciones
        </h1>
      </main>
    </section>
  );
}
