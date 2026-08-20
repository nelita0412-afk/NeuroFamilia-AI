import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, Sparkles, Waves } from 'lucide-react';
import { MENTORS } from '@/lib/constants';

const mentorImages: Record<string, string> = {
  ALBA: '/images/mentores/v2/ALBA.PNG',
  NIA: '/images/mentores/v2/NIA.PNG',
  MAKI: '/images/mentores/v2/MAKI.PNG',
  BOBBY: '/images/mentores/v2/BOBBY.PNG',
  LEO: '/images/mentores/v2/LEO.PNG',
  CORA: '/images/mentores/v2/CORA.PNG',
  PINGO: '/images/mentores/v2/PINGO.PNG',
  DARWIN: '/images/mentores/v2/DARWIN.PNG',
};

const values = [
  {
    icon: HeartHandshake,
    title: 'Acompanamiento sensible',
    detail: 'Ocho mentores con identidad propia que escuchan, orientan y acompanan cada etapa.',
  },
  {
    icon: Sparkles,
    title: 'Evidencia de crecimiento',
    detail: 'Lecturas claras de desarrollo para decidir con calma y confianza.',
  },
  {
    icon: Waves,
    title: 'Comunidad Galapagos',
    detail: 'Un espacio sereno inspirado en el archipielago para crecer en familia.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-ocean-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-600">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full border border-white/15" />
          <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full border-2 border-ocean-400/40" />
          <div className="absolute bottom-10 left-1/4 h-3 w-3 rounded-full bg-ocean-400/90" />
          <div className="absolute right-1/3 top-16 h-2 w-2 rounded-full bg-white/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/logo.jpg"
                alt="Logo NeuroFamilia AI"
                width={44}
                height={44}
                className="h-11 w-11 rounded-2xl bg-white object-cover ring-1 ring-white/25"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ocean-100">NeuroFamilia AI</p>
                <p className="text-sm font-semibold text-white/90 [font-family:var(--font-nunito)]">Galapagos</p>
              </div>
            </div>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ocean-800 shadow-ocean-lift transition-transform duration-200 hover:-translate-y-0.5"
            >
              Entrar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </header>

          <div className="mt-16 grid items-center gap-12 lg:mt-20 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ocean-100 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Archipielago de Mentores
              </p>

              <h1 className="mt-6 max-w-xl text-4xl leading-[1.12] text-white [font-family:var(--font-nunito)] sm:text-5xl xl:text-6xl">
                Ocho islas, ocho formas de acompanar a tu familia.
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-ocean-100 sm:text-lg">
                Una plataforma premium y serena para el bienestar familiar con intencion, constancia y evidencia
                sensible.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ocean-800 shadow-ocean-glow transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Comenzar ahora
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors duration-200 hover:bg-white/20"
                >
                  Ver mentores
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {MENTORS.map((mentor, index) => (
                  <div
                    key={mentor}
                    className={`relative overflow-hidden rounded-2xl bg-white/10 shadow-[0_22px_50px_rgba(0,42,104,0.5)] ring-1 ring-white/25 ${
                      index % 3 === 1 ? 'translate-y-4' : ''
                    } ${index % 2 === 0 ? 'hidden sm:block' : ''}`}
                  >
                    <Image
                      src={mentorImages[mentor]}
                      alt={`Mentor ${mentor}`}
                      width={200}
                      height={356}
                      className="aspect-[9/16] w-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/75 via-transparent to-transparent" />
                    <p className="absolute bottom-2 left-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white [font-family:var(--font-nunito)]">
                      {mentor}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-500">Por que NeuroFamilia</p>
        <h2 className="mt-3 max-w-2xl text-3xl text-ocean-900 [font-family:var(--font-nunito)] sm:text-4xl">
          Cuidamos procesos humanos con calma, ciencia y comunidad.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-[28px] bg-white p-6 shadow-ocean-card transition-transform duration-200 hover:-translate-y-1 sm:p-7"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-ocean-400 to-ocean-600 text-white">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl text-ocean-900 [font-family:var(--font-nunito)]">{value.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ocean-700">{value.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ocean-600 to-ocean-500 px-8 py-3.5 text-sm font-semibold text-white shadow-ocean-glow transition-transform duration-200 hover:-translate-y-0.5"
          >
            Entrar a la comunidad
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-ocean-100 bg-white/70 py-8 text-center">
        <p className="text-sm text-ocean-600">
          NeuroFamilia Galapagos · Cuidamos procesos humanos con calma, ciencia y comunidad.
        </p>
      </footer>
    </main>
  );
}