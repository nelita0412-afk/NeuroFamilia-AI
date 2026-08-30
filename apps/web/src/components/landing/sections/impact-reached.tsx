import { GraduationCap, TrendingUp } from 'lucide-react';

import { IMPACT_METRICS } from '@/lib/impact-metrics';
import { Counter } from '../counter';

export function ImpactReachedSection() {
  return (
    <section
      id="impacto-alcanzado"
      className="js-impact-reached relative overflow-hidden bg-gradient-to-br from-[#0B3B82] via-[#0B3B82] to-[#0066CC] px-5 py-16 sm:px-8"
    >
      <span
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-[#00B8D9]/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center">
          <p className="js-impact-reached-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#00B8D9]">
            Impacto en cifras
          </p>
          <h2 className="js-impact-reached-title mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Resultados con una historia detrás
          </h2>
          <p className="js-impact-reached-body mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-white/75">
            Cada número responde a conversaciones y prácticas reales con familias de las islas.
          </p>
        </div>

        <ul className="mt-10 grid gap-10 sm:grid-cols-3">
          {IMPACT_METRICS.map(({ id, icon: Icon, value, suffix, label }) => (
            <li
              key={id}
              className="js-impact-reached-card flex flex-col items-center text-center"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#00B8D9]/15 text-[#00B8D9] ring-1 ring-[#00B8D9]/40">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-4 flex items-baseline gap-1.5 text-5xl font-extrabold tracking-tight text-white [text-shadow:0_0_40px_rgba(0,184,217,0.45)] sm:text-6xl">
                <Counter target={value} thousandSeparator />
                {suffix && <span className="text-3xl text-[#00B8D9] sm:text-4xl">{suffix}</span>}
                <TrendingUp className="h-5 w-5 self-center text-[#00B8D9]" strokeWidth={3} aria-hidden="true" />
              </p>
              <p className="mt-2 max-w-[220px] text-sm leading-6 text-white/75">{label}</p>
            </li>
          ))}
        </ul>

        <p className="js-impact-reached-unc mx-auto mt-10 flex max-w-xl flex-col items-center gap-2 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[12px] font-bold text-[#00B8D9] ring-1 ring-white/20">
            <GraduationCap className="h-4 w-4" />
            Presentado en el Global Research Symposium de UNC Chapel Hill
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
            Alineados con los ODS 3 · 4 · 10 · 16 · 17
          </span>
        </p>
      </div>
    </section>
  );
}