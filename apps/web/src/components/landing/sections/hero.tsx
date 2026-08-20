import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Dimensiones', href: '#dimensiones' },
  { label: 'Mentores', href: '#mentores' },
  { label: 'Comunidad', href: '#impacto' },
  { label: 'Plataforma', href: '#plataforma' },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="js-hero relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#00285A]"
    >
      {/* VIDEO AÉREO REAL DE GALÁPAGOS — protagonista fullscreen, sin marcos */}
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

      {/* OVERLAY GRADIENTE INSTITUCIONAL */}
      <div
        className="js-hero-overlay absolute inset-0 bg-[linear-gradient(rgba(0,40,90,0.25),rgba(0,40,90,0.35))]"
        aria-hidden="true"
      />

      {/* NAVBAR TRANSPARENTE — logo oficial + menú */}
      <header className="absolute inset-x-0 top-0 z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="NeuroFamilia Galápagos - Inicio">
          <Image
            src="/images/logo/logo.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
          <span className="text-lg font-extrabold tracking-tight text-white">
            NeuroFamilia Galápagos
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Menú principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-white/90 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* CONTENIDO PRINCIPAL — centrado */}
      <main className="js-hero-content relative z-10 flex h-full flex-col items-center justify-center px-5 text-center sm:px-8">
        <h1 className="js-hero-title text-6xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
          NeuroFamilia
          <br />
          <span className="text-white">Galápagos</span>
        </h1>

        <p className="js-hero-subtitle mt-8 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
          Plataforma digital para el desarrollo humano, la salud mental y el bienestar comunitario.
        </p>

        <Link
          href="/login"
          className="js-hero-cta mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#00285A] shadow-[0_12px_32px_rgba(0,40,90,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00B8D9] hover:text-white"
        >
          Conocer NeuroFamilia
        </Link>
      </main>
    </section>
  );
}