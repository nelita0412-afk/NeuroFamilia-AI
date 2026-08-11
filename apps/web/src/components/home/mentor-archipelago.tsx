'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MENTOR_IDENTITY } from '@/lib/mentor-identity';
import { MENTORS } from '@/lib/constants';

// Desplazamientos verticales fijos para que las islas se sientan dispersas, no alineadas en grid.
const DRIFT_OFFSETS = ['md:mt-0', 'md:mt-9', 'md:-mt-4', 'md:mt-12', 'md:mt-3', 'md:-mt-7', 'md:mt-7', 'md:-mt-2'];

type MentorArchipelagoProps = {
  recommendedMentor: string;
  onSelectMentor: (mentor: string) => void;
};

export function MentorArchipelago({ recommendedMentor, onSelectMentor }: MentorArchipelagoProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="archipelago-heading">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#155e9b]">El archipiélago de mentores</p>
        <h2 id="archipelago-heading" className="mt-2 text-2xl font-semibold text-[#0d2340] sm:text-3xl">
          Ocho islas, ocho formas de acompañarte
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Cada mentor vive en su propia isla dentro de tu ecosistema. Elige una para comenzar una conversación.
        </p>
      </div>

      <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-12 sm:gap-x-8">
        {MENTORS.map((mentor, index) => {
          const identity = MENTOR_IDENTITY[mentor];
          const Icon = identity.icon;
          const recommended = mentor === recommendedMentor;

          return (
            <li key={mentor} className={cn('w-[9.5rem] sm:w-[10.5rem]', DRIFT_OFFSETS[index % DRIFT_OFFSETS.length])}>
              {/* Flotacion idle independiente por isla para transmitir vida, no mecanica de boton. */}
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
                transition={{ duration: 4.5 + index * 0.3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 }}
              >
                <button
                  type="button"
                  onClick={() => onSelectMentor(mentor)}
                  aria-label={`Conversar con ${mentor}, ${identity.tagline}`}
                  className={cn(
                    'group flex w-full flex-col items-center gap-3 rounded-[2rem] border bg-white/70 px-4 py-6 text-center shadow-[0_16px_36px_rgba(15,76,129,0.1)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(15,76,129,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155e9b]',
                    recommended ? 'border-[#1d88d6]' : 'border-sky-100',
                  )}
                >
                  <span
                    className={cn(
                      'grid place-items-center rounded-full text-white shadow-inner',
                      recommended
                        ? 'h-16 w-16 bg-gradient-to-br from-[#155e9b] to-[#1d88d6]'
                        : 'h-14 w-14 bg-gradient-to-br from-[#2a7cc0] to-[#5fb6f0]',
                    )}
                  >
                    <Icon className={recommended ? 'h-7 w-7' : 'h-6 w-6'} aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-[#0d2340]">{mentor}</span>
                  <span className="text-xs leading-snug text-slate-500">{identity.tagline}</span>
                  {recommended ? (
                    <span className="rounded-full bg-[#eaf4ff] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#155e9b]">
                      Recomendado hoy
                    </span>
                  ) : null}
                </button>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
