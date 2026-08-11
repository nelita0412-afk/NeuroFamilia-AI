'use client';

import { motion, useReducedMotion } from 'framer-motion';

type GrowthTideProps = {
  score: number | undefined;
  isLoading: boolean;
  strengths: string[];
  opportunities: string[];
};

function getTideLabel(score: number) {
  if (score >= 80) return 'en plenitud';
  if (score >= 60) return 'en buen cauce';
  if (score >= 40) return 'en movimiento';
  return 'iniciando su cauce';
}

// El growth score se vive como una marea, no como un numero suelto en una tarjeta.
export function GrowthTide({ score, isLoading, strengths, opportunities }: GrowthTideProps) {
  const reduceMotion = useReducedMotion();
  const level = Math.min(100, Math.max(0, score ?? 0));

  return (
    <section aria-labelledby="growth-tide-heading" className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#155e9b]">La corriente de tu familia</p>
        <h2 id="growth-tide-heading" className="mt-2 text-2xl font-semibold text-[#0d2340] sm:text-3xl">
          {isLoading ? 'Observando la corriente…' : `Tu marea de crecimiento está ${getTideLabel(level)}`}
        </h2>
        <p className="mt-3 max-w-md text-sm text-slate-600">
          Este nivel se mueve con cada observación registrada, como la marea que sube con el cuidado diario.
        </p>
      </div>

      <div className="relative mx-auto h-56 w-full max-w-md overflow-hidden rounded-[2.5rem] border border-sky-100 bg-[linear-gradient(180deg,#f3f9ff,#eaf4ff)] shadow-[0_20px_50px_rgba(15,76,129,0.12)]">
        {/* Nivel de agua animado como representacion organica del growth score. */}
        <motion.div
          aria-hidden
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#155e9b] via-[#1d88d6] to-[#5fb6f0]"
          initial={{ height: 0 }}
          animate={{ height: `${level}%` }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute inset-x-[-20%] h-10 rounded-[50%] bg-white/25"
          style={{ bottom: `${level}%` }}
          animate={reduceMotion ? undefined : { x: ['-4%', '4%', '-4%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative flex h-full flex-col items-center justify-center text-center">
          <span className="text-4xl font-semibold text-white drop-shadow-sm">{isLoading ? '···' : level}</span>
          <span className="text-xs uppercase tracking-[0.2em] text-white/90">de 100</span>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
        <div className="rounded-2xl border border-sky-100 bg-white/70 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#155e9b]">Lo que florece</p>
          <p className="mt-1 text-sm text-slate-700">
            {strengths.length > 0 ? strengths.join(' · ') : 'Aún no hay fortalezas registradas.'}
          </p>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-white/70 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#155e9b]">Lo que estamos cultivando</p>
          <p className="mt-1 text-sm text-slate-700">
            {opportunities.length > 0 ? opportunities.join(' · ') : 'Aún no hay oportunidades registradas.'}
          </p>
        </div>
      </div>
    </section>
  );
}
