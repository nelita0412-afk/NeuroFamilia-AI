export function AboutHeroSection() {
  return (
    <section className="js-about-hero relative flex h-[70svh] min-h-[520px] w-full flex-col overflow-hidden bg-[#00285A]">
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

      {/* Velo navy suave para legibilidad sin opacar el paisaje */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,40,90,0.40),rgba(0,40,90,0.50))]"
        aria-hidden="true"
      />

      {/* Título institucional en el tercio superior — deja libre el logo central del video */}
      <main className="relative z-10 mx-auto w-full max-w-3xl px-5 pt-[9svh] text-center sm:px-8">
        <p className="js-about-hero-kicker text-xs font-bold uppercase tracking-[0.35em] text-[#00B8D9]">
          Acerca de NeuroFamilia
        </p>
        <h1 className="js-about-hero-title mt-4 text-[1.875rem] font-extrabold leading-[1.15] tracking-tight text-white sm:mt-5 sm:text-5xl sm:leading-[1.08]">
          Construyendo bienestar desde Galápagos para las nuevas generaciones
        </h1>
      </main>
    </section>
  );
}
