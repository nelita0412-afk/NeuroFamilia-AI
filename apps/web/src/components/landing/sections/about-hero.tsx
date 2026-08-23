import Image from 'next/image';

export function AboutHeroSection() {
  return (
    <section className="js-about-hero relative flex w-full justify-center overflow-hidden bg-[#00285A]">
      {/* HERO-5 · portada institucional del ecosistema NeuroFamilia */}
      <Image
        src="/images/landing/hero-5.png"
        alt="Ecosistema NeuroFamilia: conexión entre comunidades insulares de Galápagos"
        width={1672}
        height={940}
        priority
        unoptimized
        className="js-about-hero-image block h-auto w-full max-w-[1100px] object-contain"
      />

      {/* Título institucional invisible — semántica/SEO sin competir con la imagen */}
      <h1 className="sr-only">
        Construyendo bienestar desde Galápagos para las nuevas generaciones
      </h1>
    </section>
  );
}
