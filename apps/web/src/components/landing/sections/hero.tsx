import Link from 'next/link';
import { Heart, Microscope, Users, Cpu, ShieldCheck } from 'lucide-react';

const PILLARS = [
  { icon: Heart, label: 'Familias', href: '#proposito' },
  { icon: Microscope, label: 'Ciencia', href: '#archipielago' },
  { icon: Users, label: 'Comunidad', href: '#comunidad' },
  { icon: Cpu, label: 'Tecnología', href: '#plataforma' },
  { icon: ShieldCheck, label: 'Confianza', href: '#mentores' },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="js-hero relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#061A3A]"
    >
      {/* VIDEO AÉREO DE GALÁPAGOS — fondo fullscreen */}
      <video
        className="js-hero-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="https://cdn.pixabay.com/video/2026/04/25/348904_small.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY OSCURO 40% */}
      <div className="js-hero-overlay absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Transición suave hacia la sección siguiente */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#F8FBFF]"
        aria-hidden="true"
      />

      {/* HEADER — minimalista, un solo logo */}
      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 pt-6 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="NeuroFamilia Galápagos - Inicio">
          <span className="text-2xl font-extrabold tracking-tight text-white">
            NeuroFamilia <span className="text-[#FFD700]">Galápagos</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="#archipielago"
            className="text-sm font-medium text-white/85 transition-colors duration-200 hover:text-[#FFD700]"
          >
            Archipiélago
          </Link>
          <Link
            href="#mentores"
            className="text-sm font-medium text-white/85 transition-colors duration-200 hover:text-[#FFD700]"
          >
            Mentores
          </Link>
          <Link
            href="#comunidad"
            className="text-sm font-medium text-white/85 transition-colors duration-200 hover:text-[#FFD700]"
          >
            Comunidad
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-6 py-2.5 text-sm font-bold text-[#0A1F44] shadow-[0_8px_24px_rgba(255,215,0,0.4)] transition-all duration-200 hover:-translate-y-0.5"
          >
            Conocer NeuroFamilia
          </Link>
        </nav>

        <Link
          href="/login"
          className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-5 py-2 text-sm font-bold text-[#0A1F44] shadow-[0_8px_24px_rgba(255,215,0,0.4)] transition-all duration-200 hover:-translate-y-0.5 lg:hidden"
        >
          Conocer NeuroFamilia
        </Link>
      </header>

      {/* MENSAJE CENTRADO */}
      <main className="js-hero-content relative z-10 flex h-full flex-col items-center justify-center px-5 pb-28 text-center sm:px-8">
        <p className="js-hero-kicker mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[#FFD700]">
          Desde las Islas Galápagos
        </p>

        <h1 className="js-hero-title max-w-4xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Cada persona tiene un{' '}
          <span className="text-[#FFD700]">potencial extraordinario</span>
        </h1>

        <p className="js-hero-subtitle mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
          NeuroFamilia es un ecosistema humano y digital que integra ciencia, tecnología y
          comunidad para acompañar el desarrollo humano a lo largo de la vida.
        </p>

        <div className="js-hero-cta mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#proposito"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#FFD700] px-8 py-4 text-base font-bold text-[#0A1F44] shadow-[0_12px_32px_rgba(255,215,0,0.4)] transition-all duration-300 hover:-translate-y-1 sm:w-auto"
          >
            Conocer NeuroFamilia
          </a>
          <a
            href="#archipielago"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/70 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto"
          >
            Explorar el Archipiélago
          </a>
        </div>
      </main>

      {/* BANDA FLOTANTE — 5 PILARES */}
      <div className="js-hero-pillars absolute inset-x-0 bottom-8 z-20 flex justify-center px-5">
        <div className="w-full max-w-5xl rounded-2xl bg-[#061A3A]/70 ring-1 ring-white/15 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-5 sm:gap-0 sm:p-2">
            {PILLARS.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                className="group flex flex-col items-center gap-2 rounded-xl px-2 py-4 transition-colors duration-200 hover:bg-white/10 sm:py-5"
              >
                <Icon className="h-5 w-5 text-[#FFD700] transition-transform duration-200 group-hover:scale-110" />
                <span className="text-sm font-semibold tracking-wide text-white">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}