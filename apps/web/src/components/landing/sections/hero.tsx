import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WavesBack, WavesFront } from '../svg/waves';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="js-hero relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-[#0A4E9B] via-[#1476C6] to-[#0A4E9B]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full border border-white/10" />
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full border-2 border-[#29C7D8]/30" />
        <div className="absolute bottom-1/4 left-1/4 h-3 w-3 rounded-full bg-[#29C7D8]/80" />
        <div className="absolute right-1/3 top-16 h-2 w-2 rounded-full bg-[#F8FBFF]/70" />
        <div className="absolute bottom-10 right-1/4 h-2 w-2 rounded-full bg-[#F8FBFF]/50" />
      </div>

      <WavesBack className="js-hero-waves-back absolute inset-x-0 bottom-20 h-56 w-full opacity-50" />
      <WavesFront className="js-hero-waves-front absolute inset-x-0 bottom-0 h-72 w-full opacity-80" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 pt-6 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="NeuroFamilia Galápagos">
          <Image src="/images/logo/logo.png" alt="Logo NeuroFamilia" width={40} height={40} className="h-10 w-10 object-contain" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F8FBFF]/80">NeuroFamilia</p>
            <p className="text-sm font-medium text-[#F8FBFF]">Galápagos</p>
          </div>
        </Link>
        <Link
          href="/login"
          className="inline-flex items-center gap-2 rounded-full bg-[#F8FBFF] px-5 py-2.5 text-sm font-semibold text-[#0A4E9B] shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
        >
          Conocer NeuroFamilia
          <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-5 pb-32 pt-10 text-center sm:px-8">
        <p className="js-hero-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#29C7D8]">
          Ecosistema de crecimiento humano
        </p>
        <h1 className="js-hero-title mt-4 text-4xl font-extrabold leading-[1.1] text-[#F8FBFF] sm:text-5xl xl:text-6xl">
          Cada historia merece un camino para crecer.
        </h1>
        <p className="js-hero-subtitle mx-auto mt-5 max-w-xl text-base leading-7 text-[#F8FBFF]/85 sm:text-lg">
          NeuroFamilia es un ecosistema humano y digital que acompaña a niños, adolescentes, familias y profesionales.
        </p>
        <div className="js-hero-cta mt-8 flex flex-col lg:flex-row items-center justify-center gap-4">
          <a
            href="#proposito"
            className="inline-flex items-center gap-2 rounded-full bg-[#F8FBFF] px-7 py-3.5 text-sm font-bold text-[#0A4E9B] shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
          >
            Conocer NeuroFamilia
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#archipielago"
            className="inline-flex items-center gap-2 rounded-full border border-[#29C7D8]/50 bg-[#29C7D8]/10 px-7 py-3.5 text-sm font-bold text-[#F8FBFF] backdrop-blur transition-colors duration-200 hover:bg-[#29C7D8]/20"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4 text-[#29C7D8] flex items-center justify-center"
              viewBox="0 0 24 24"
            >
              <path d="M12 5v14M12 5l14-14M5 12h14M5 12l-14 14"/>
            </svg>
            Explorar Archipiélago
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 right-1/4 h-2 w-2 rounded-full bg-[#F8FBFF]/50" />
    </section>
  );
}