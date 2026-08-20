import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
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
      </div>

      <WavesBack className="js-hero-waves-back absolute inset-x-0 bottom-16 h-56 w-full opacity-50" />
      <WavesFront className="js-hero-waves-front absolute inset-x-0 bottom-0 h-64 w-full opacity-80" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 pt-6 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="NeuroFamilia Galápagos">
          <Image src="/images/logo/logo.png" alt="Logo NeuroFamilia" width={40} height={40} className="h-10 w-10 object-contain" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F8FBFF]/85">
            NeuroFamilia <span className="text-[#29C7D8]">Galápagos</span>
          </p>
        </Link>
        <Link
          href="/login"
          className="inline-flex items-center gap-2 rounded-full bg-[#F8FBFF] px-5 py-2.5 text-sm font-semibold text-[#0A4E9B] shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
        >
          Entrar
          <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-5 pb-28 pt-10 sm:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="js-hero-content text-center lg:text-left">
            <p className="js-hero-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#29C7D8]">
              Ecosistema de crecimiento humano
            </p>
            <h1 className="js-hero-title mt-5 text-4xl font-extrabold leading-[1.08] text-[#F8FBFF] sm:text-5xl xl:text-6xl">
              Cada niño tiene un potencial <span className="text-[#29C7D8]">extraordinario</span>
            </h1>
            <p className="js-hero-subtitle mx-auto mt-6 max-w-xl text-base leading-7 text-[#F8FBFF]/85 sm:text-lg lg:mx-0">
              NeuroFamilia conecta ciencia, familia y comunidad para acompañar el desarrollo humano.
            </p>
            <div className="js-hero-cta mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#proposito"
                className="inline-flex items-center gap-2 rounded-full bg-[#F8FBFF] px-7 py-3.5 text-sm font-bold text-[#0A4E9B] shadow-[0_18px_44px_rgba(2,32,76,0.45)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Conocer NeuroFamilia
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#archipielago"
                className="inline-flex items-center gap-2 rounded-full border border-[#29C7D8]/50 bg-[#29C7D8]/10 px-7 py-3.5 text-sm font-bold text-[#F8FBFF] backdrop-blur transition-colors duration-200 hover:bg-[#29C7D8]/20"
              >
                <Compass className="h-4 w-4 text-[#29C7D8]" />
                Explorar el Archipiélago
              </a>
            </div>
          </div>

          <div className="js-hero-turtle-wrap relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#29C7D8]/20 blur-3xl"
              aria-hidden="true"
            />
            <HeroTurtle className="js-hero-turtle relative w-full drop-shadow-[0_28px_56px_rgba(2,32,76,0.6)]" />
          </div>
        </div>
      </div>
    </section>
  );
}