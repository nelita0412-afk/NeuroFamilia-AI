import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="js-hero relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#0B3B82]"
    >
      {/* FOTOGRAFÍA AÉREA REAL DE GALÁPAGOS — fondo fullscreen */}
      <Image
        src="/images/landing/galapagos-aerial.jpg"
        alt="Vista aérea de la costa de Galápagos: aguas turquesa y acantilados rocosos"
        fill
        priority
        sizes="100vw"
        className="js-hero-image object-cover"
      />

      {/* OVERLAY AZUL SUAVE */}
      <div className="js-hero-overlay absolute inset-0 bg-[#0B3B82]/45" aria-hidden="true" />

      {/* NAVBAR — transparente con blur, logo y menú blancos */}
      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 pt-6 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="NeuroFamilia Galápagos - Inicio">
          <span className="text-2xl font-extrabold tracking-tight text-white">
            NeuroFamilia Galápagos
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="#dimensiones"
            className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#00B8D9]"
          >
            Dimensiones
          </Link>
          <Link
            href="#mentores"
            className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#00B8D9]"
          >
            Mentores
          </Link>
          <Link
            href="#plataforma"
            className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#00B8D9]"
          >
            Plataforma
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full bg-[#0066CC] px-6 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,102,204,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0B3B82]"
          >
            Conocer NeuroFamilia
          </Link>
        </nav>

        <Link
          href="/login"
          className="inline-flex items-center gap-2 rounded-full bg-[#0066CC] px-5 py-2 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,102,204,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0B3B82] lg:hidden"
        >
          Conocer NeuroFamilia
        </Link>
      </header>

      {/* MENSAJE CENTRADO — estilo Ola Igualdad */}
      <main className="js-hero-content relative z-10 flex h-full flex-col items-center justify-center px-5 pb-24 text-center sm:px-8">
        <p className="js-hero-kicker mb-8 max-w-2xl text-sm font-semibold uppercase tracking-[0.3em] text-[#00B8D9]">
          Plataforma digital para el desarrollo humano en Galápagos
        </p>

        <h1 className="js-hero-title text-6xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-9xl">
          NeuroFamilia
          <br />
          <span className="text-[#00B8D9]">Galápagos</span>
        </h1>
      </main>

      {/* SCROLL DOWN + INDICADOR DE SLIDE */}
      <div className="js-hero-scroll absolute inset-x-0 bottom-10 z-20 flex items-center justify-between px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 text-white/80">
          <span className="js-scroll-line block h-10 w-px bg-white/50" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em]">Scroll Down</span>
        </div>
        <span className="text-sm font-bold tracking-[0.3em] text-white/60">01</span>
      </div>
    </section>
  );
}