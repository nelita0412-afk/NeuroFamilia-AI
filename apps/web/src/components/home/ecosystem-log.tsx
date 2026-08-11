'use client';

import { motion } from 'framer-motion';

type ActivityItem = { label: string; timestamp: string };

type EcosystemLogProps = {
  activity: ActivityItem[];
};

function formatTide(timestamp: string) {
  return new Date(timestamp).toLocaleDateString('es', { day: '2-digit', month: 'short' });
}

// Actividad reciente como huellas en la orilla, no como lista administrativa.
export function EcosystemLog({ activity }: EcosystemLogProps) {
  return (
    <section aria-labelledby="log-heading">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#155e9b]">Bitácora reciente</p>
      <h2 id="log-heading" className="mt-2 text-2xl font-semibold text-[#0d2340] sm:text-3xl">
        Huellas recientes en la orilla
      </h2>

      {activity.length === 0 ? (
        <p className="mt-4 text-sm text-slate-600">
          Aún no hay huellas recientes por aquí. Cuando registres actividad, aparecerá en esta bitácora.
        </p>
      ) : (
        <ol className="relative mt-8 space-y-6 border-l border-sky-100 pl-6">
          {activity.map((item, index) => (
            <motion.li
              key={`${item.label}-${index}`}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative"
            >
              <span aria-hidden className="absolute -left-[1.68rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[#1d88d6]" />
              <p className="text-sm font-medium text-[#0d2340]">{item.label}</p>
              <p className="text-xs text-slate-500">{formatTide(item.timestamp)}</p>
            </motion.li>
          ))}
        </ol>
      )}
    </section>
  );
}
