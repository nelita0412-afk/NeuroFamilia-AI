import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroTurtle } from '../svg/hero-turtle';

export function CtaSection() {
  return (
    <section
      id="cta"
      className="js-cta relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#0B3B82] via-[#0066CC] to-[#00B8D9]"
    >
      <div
        className="js-sun pointer-events-none absolute right-[14%] top-[12%] h-44 w-44 rounded-full bg-[#F8FBFF]/60 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-28 text-center sm:px-8">
        <h2 className="js-cta-title text-4xl font-extrabold leading-tight text-[#F8FBFF] sm:text-5xl xl:text-6xl">
          El futuro se construye acompañando el presente.
        </h2>

        <Link
          href="/login"
          className="js-cta-button mt-10 inline-flex items-center gap-2 rounded-full bg-[#F8FBFF] px-10 py-4 text-base font-bold text-[#0B3B82] shadow-[0_22px_60px_rgba(2,32,76,0.55)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Comenzar el recorrido
          <ArrowRight className="h-5 w-5" />
        </Link>

        <div className="js-cta-turtle-wrap relative mx-auto mt-16 max-w-xs opacity-0">
          <div
            className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8FBFF]/15 blur-3xl"
            aria-hidden="true"
          />
          <HeroTurtle className="js-cta-turtle relative w-full drop-shadow-[0_24px_48px_rgba(2,32,76,0.6)]" />
        </div>
      </div>
    </section>
  );
}