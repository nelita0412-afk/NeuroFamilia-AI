import Image from 'next/image';
import { ArrowRight, Waves } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { LoginForm } from '@/components/forms/login-form';
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

export default function LoginPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-[1.1fr_1fr]">
      <section
        aria-hidden="true"
        className="relative hidden overflow-hidden bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-600 lg:flex lg:flex-col lg:justify-between"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full border border-white/15" />
          <div className="absolute -right-16 top-1/3 h-64 w-64 rounded-full border-2 border-ocean-400/40" />
          <div className="absolute bottom-1/4 left-1/3 h-3 w-3 rounded-full bg-ocean-400/80" />
          <div className="absolute left-1/2 top-24 h-2 w-2 rounded-full bg-white/70" />
          <div className="absolute bottom-16 left-16 h-2 w-2 rounded-full bg-white/50" />
        </div>

        <div className="relative z-10 px-12 pb-6 pt-14">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logos/nfg-logo.png"
              alt="Logo NFG · NeuroFamilia Galápagos"
              width={1189}
              height={512}
              className="h-12 w-auto object-contain"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ocean-100">NeuroFamilia AI</p>
              <p className="text-sm font-semibold text-white/90 [font-family:var(--font-nunito)]">Galapagos</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 px-12">
          <h1 className="max-w-lg text-4xl leading-[1.15] text-white [font-family:var(--font-nunito)] xl:text-5xl">
            Ocho mentores, una comunidad que crece contigo.
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-ocean-100">
            Acompanamiento familiar sensible, con evidencia y la calma del archipielago.
          </p>
          <div className="mt-10 grid max-w-xl grid-cols-4 gap-3">
            {MENTORS.map((mentor, index) => (
<div
                  key={mentor}
                  className={`relative overflow-hidden rounded-2xl bg-white/10 shadow-[0_18px_40px_rgba(0,42,104,0.45)] ring-1 ring-white/25 ${
                    index % 3 === 1 ? 'translate-y-3' : ''
                  }`}
                >
                  <Image
                    src={mentorImages[mentor]}
                    alt=""
                    width={200}
                    height={356}
                    className="aspect-[9/16] w-full object-contain"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/70 via-transparent to-transparent" />
                <p className="absolute bottom-2 left-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white [font-family:var(--font-nunito)]">
                  {mentor}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-2 px-12 pb-12 pt-8 text-xs uppercase tracking-[0.18em] text-ocean-100">
          <ArrowRight className="h-3.5 w-3.5" />
          Comunidad NeuroFamilia Galapagos
        </div>
      </section>

      <section className="relative flex items-center justify-center overflow-hidden bg-ocean-50 px-4 py-12 lg:px-10">
        <div className="pointer-events-none absolute inset-0 lg:hidden">
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-ocean-900 to-transparent opacity-20" />
        </div>

        <Card className="w-full max-w-md rounded-[28px] border-white/70 p-7 shadow-ocean-card sm:p-9">
          <div className="flex items-center gap-3 lg:hidden">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-ocean-400 to-ocean-600 text-white">
              <Waves className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-600">NeuroFamilia AI</p>
              <p className="text-xs text-ocean-500">Galapagos</p>
            </div>
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-500 lg:mt-0">
            Acceso seguro
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-ocean-900 [font-family:var(--font-nunito)]">
            Ingresa a tu comunidad
          </h2>
          <p className="mb-7 mt-2 text-sm leading-6 text-ocean-700">
            Plataforma digital para acompanamiento familiar y desarrollo integral.
          </p>

          <LoginForm />

          <p className="mt-6 text-center text-xs leading-5 text-ocean-500">
            Al ingresar aceptas el cuidado responsable de tus datos.
            <br />
            Comunidad NeuroFamilia Galapagos.
          </p>
        </Card>
      </section>
    </main>
  );
}