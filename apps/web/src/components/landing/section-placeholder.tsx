import Link from 'next/link';
import { ArrowLeft, Hammer } from 'lucide-react';
import { HeroTurtle } from './svg/hero-turtle';

export function SectionPlaceholder({ title }: { title: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F7FF] via-white to-[#F0F7FF] py-24">
      <span
        className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#00B8D9]/15 blur-3xl"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-[#0066CC]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#0066CC] text-white shadow-[0_16px_36px_rgba(0,102,204,0.35)]">
          <Hammer className="h-8 w-8" />
        </span>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">{title}</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
          Estamos construyendo esta experiencia
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#0B3B82]/70 sm:text-lg">
          Nuestro equipo está trabajando para ofrecerte este espacio con la misma dedicación con
          la que acompañamos a cada familia en Galápagos. Mientras tanto, te invitamos a conocer
          el resto de NeuroFamilia.
        </p>

        <div className="relative mx-auto mt-12 max-w-[240px]">
          <span
            className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B8D9]/20 blur-3xl"
            aria-hidden="true"
          />
          <HeroTurtle className="relative w-full opacity-90" />
        </div>

        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#0B3B82] px-8 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_rgba(11,59,130,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0066CC]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}