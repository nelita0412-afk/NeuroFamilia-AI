import Link from 'next/link';

const STATS = [
  { value: '8', label: 'Dimensiones del desarrollo humano' },
  { value: '8', label: 'NeuroMentores con identidad propia' },
  { value: '5', label: 'Comunidades acompañadas: niños, adolescentes, familias, profesionales e instituciones' },
];

export function ImpactSection() {
  return (
    <section id="impacto" className="js-impact relative overflow-hidden bg-[#F0F7FF] py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <p className="js-impact-kicker text-center text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
          Impacto
        </p>
        <h2 className="js-impact-title mt-4 text-center text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
          Nuestro impacto
        </h2>

        <dl className="js-impact-stats mt-16 grid gap-10 text-center sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-6xl font-extrabold tracking-tight text-[#0066CC] sm:text-7xl">
                {stat.value}
              </dd>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#0B3B82]/75">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>

        <div className="mt-14 text-center">
          <Link
            href="/teoria-de-cambio"
            className="inline-flex items-center gap-2 border-b-2 border-[#0066CC] pb-1 text-sm font-bold uppercase tracking-[0.2em] text-[#0066CC] transition-colors duration-200 hover:border-[#00B8D9] hover:text-[#00B8D9]"
          >
            Explorar las dimensiones
          </Link>
        </div>
      </div>
    </section>
  );
}