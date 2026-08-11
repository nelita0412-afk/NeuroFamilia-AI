'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type EcosystemThresholdProps = {
  greeting: string;
  mentorName: string;
  mentorTagline: string;
  onOpenMentor: () => void;
};

// Momento de apertura: sin tarjetas, el usuario entra directo al ecosistema, no a un panel.
export function EcosystemThreshold({ greeting, mentorName, mentorTagline, onOpenMentor }: EcosystemThresholdProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[34rem] flex-col items-center justify-center overflow-hidden rounded-[2.5rem] px-6 py-20 text-center sm:px-10">
      {/* Fondo atmosferico inspirado en el oceano y los anillos del logotipo oficial. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.22),transparent_45%),radial-gradient(circle_at_84%_8%,rgba(21,94,155,0.18),transparent_42%),linear-gradient(160deg,#eaf4ff,#f7fbff_55%,#eef7ff)]"
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/60"
        animate={reduceMotion ? undefined : { scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/70"
        animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#155e9b] to-[#1d88d6] opacity-90"
        animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-semibold uppercase tracking-[0.32em] text-[#155e9b]"
      >
        NeuroFamilia Galápagos
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] text-[#0d2340] sm:text-5xl"
      >
        {greeting}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="mt-5 max-w-xl text-base text-slate-600 sm:text-lg"
      >
        Este es tu ecosistema vivo de acompañamiento: aquí la ciencia y la calma conviven contigo, un paso a la vez.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.16 }}
        className="mt-8 flex flex-col items-center gap-3"
      >
        <button
          type="button"
          onClick={onOpenMentor}
          className="group inline-flex items-center gap-2 rounded-full bg-[#155e9b] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,76,129,0.32)] transition hover:bg-[#124e82] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155e9b]"
        >
          Conversar con {mentorName}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
        </button>
        <p className="text-xs text-slate-500">{mentorTagline}</p>
      </motion.div>
    </section>
  );
}
