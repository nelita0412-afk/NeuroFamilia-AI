import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutPreviewSection() {
  return (
    <section
      id="acerca-preview"
      className="js-about-preview relative overflow-hidden bg-[#F0F7FF] py-24"
    >
      <span
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#00B8D9]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="js-about-preview-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
          Acerca de
        </p>
        <h2 className="js-about-preview-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
          Crecer con ciencia, calma y comunidad
        </h2>
        <p className="js-about-preview-body mx-auto mt-5 max-w-2xl text-base leading-7 text-[#0B3B82]/70 sm:text-lg">
          NeuroFamilia nace en Galápagos para unir la evidencia científica, la tecnología y el
          acompañamiento humano en un solo ecosistema que potencia el desarrollo de niños,
          adolescentes y familias, paso a paso y a medida de cada persona.
        </p>
        <Link
          href="/acerca"
          className="js-about-preview-cta mt-9 inline-flex items-center gap-2 rounded-full bg-[#0066CC] px-8 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_rgba(0,102,204,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0B3B82]"
        >
          Conoce nuestra historia
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
