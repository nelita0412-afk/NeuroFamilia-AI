import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WavesBack, WavesFront } from '../svg/waves';
import { HeroTurtle } from '../svg/hero-turtle';

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

      <WavesBack className="js-hero-waves-back absolute inset-x-0 bottom-16 h-56 w-full opacity-50" />
      <WavesFront className="js-hero-waves-front absolute inset-x-0 bottom-0 h-64 w-full opacity-80" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-end px-5 pt-6 sm:px-8">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 rounded-full bg-[#F8FBFF] px-5 py-2.5 text-sm font-semibold text-[#0A4E9B] shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
        >
          Entrar
          <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 pb-44 pt-10 text-center sm:px-8">
        <div className="js-hero-turtle-wrap relative">
          <div
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#29C7D8]/20 blur-3xl"
            aria-hidden="true"
          />
          <HeroTurtle className="js-hero-turtle relative w-64 drop-shadow-[0_24px_48px_rgba(2,32,76,0.55)] sm:w-80" />
        </div>

        <div className="js-hero-content mt-6">
          <h1 className="js-hero-title text-4xl font-extrabold leading-[1.1] text-[#F8FBFF] sm:text-6xl">
            NeuroFamilia <span className="text-[#29C7D8]">Galápagos</span>
          </h1>
          <p className="js-hero-subtitle mx-auto mt-5 max-w-xl text-base leading-7 text-[#F8FBFF]/85 sm:text-lg">
            Cada historia importa. Cada potencial puede crecer.
          </p>
        </div>
      </div>
    </section>
  );
}