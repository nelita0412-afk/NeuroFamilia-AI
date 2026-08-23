import Image from 'next/image';

export function AboutHeroSection() {
  return (
    <section className="js-about-hero relative flex w-full justify-center overflow-hidden bg-[#032458]">
      {/* HERO-5 · portada institucional del ecosistema NeuroFamilia */}
      {/* Banner estático de ancho completo: la altura deriva del aspect ratio nativo (1672×940) */}
      <Image
        src="/images/landing/hero-5.png"
        alt="Ecosistema NeuroFamilia: conexión entre comunidades insulares de Galápagos"
        width={1672}
        height={940}
        priority
        unoptimized
        className="js-about-hero-image block h-auto w-full object-contain"
      />

      {/* Neblina institucional sutil — degradado navy que unifica sin ocultar contenido */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,36,88,0.20)_0%,rgba(3,36,88,0.04)_36%,rgba(2,31,76,0.10)_68%,rgba(1,24,62,0.30)_100%)]"
      />

      {/* Título institucional invisible — semántica/SEO sin competir con la imagen */}
      <h1 className="sr-only">
        Construyendo bienestar desde Galápagos para las nuevas generaciones
      </h1>
    </section>
  );
}
