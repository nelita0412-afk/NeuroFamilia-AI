import { TrendingUp } from 'lucide-react';

import { IMPACT_METRICS } from '@/lib/impact-metrics';
import { Counter } from '../counter';

export function ImpactReachedSection() {
  return (
    <section
      id="impacto-alcanzado"
      className="js-impact-reached relative overflow-hidden bg-[#F0F7FF] py-24"
    >
      <span
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#00B8D9]/10 blur-3xl"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#0066CC]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="js-impact-reached-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
            Nuestro impacto en cifras
          </p>
          <h2 className="js-impact-reached-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
            Impacto Alcanzado
          </h2>
          <p className="js-impact-reached-body mx-auto mt-5 max-w-2xl text-base leading-7 text-[#0B3B82]/70 sm:text-lg">
            Cada número representa personas, familias y comunidades que estamos acompañando a
            través de la innovación social, la salud mental y el desarrollo humano.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {IMPACT_METRICS.map(({ id, icon: Icon, value, suffix, label, description }) => (
            <li
              key={id}
              className="js-impact-reached-card group relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-[#0066CC]/10 transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_32px_64px_rgba(11,59,130,0.16)]"
            >
              {/* Halo de luz detrás del número */}
              <span
                className="pointer-events-none absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-[#00B8D9]/15 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              {/* Icono premium */}
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#0066CC] to-[#00B8D9] text-white shadow-[0_12px_28px_rgba(0,102,204,0.3)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </span>

              {/* Número + flecha ascendente */}
              <p className="relative mt-6 flex items-baseline gap-2 text-5xl font-extrabold tracking-tight text-[#0B3B82]">
                <Counter target={value} thousandSeparator />
                {suffix && <span className="text-3xl text-[#0066CC]">{suffix}</span>}
                <TrendingUp
                  className="h-5 w-5 self-center text-[#00B8D9]"
                  strokeWidth={3}
                  aria-hidden="true"
                />
              </p>

              <h3 className="mt-3 text-lg font-extrabold text-[#0B3B82]">{label}</h3>
              <p className="mt-1.5 text-sm leading-6 text-[#0B3B82]/65">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}