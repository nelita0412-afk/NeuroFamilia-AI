import Link from 'next/link';

const STATS = [
  {
    value: '8',
    title: 'Dimensiones del desarrollo humano',
    description: 'Ámbitos que integra el modelo para acompañar el desarrollo humano integral.',
  },
  {
    value: '8',
    title: 'NeuroMentores',
    description: 'Guías con identidad propia que acompañan a cada persona en su recorrido.',
  },
  {
    value: '5',
    title: 'Poblaciones acompañadas',
    description: 'NNA, familias, profesionales e instituciones atendidos desde el modelo.',
  },
];

export function ImpactSection() {
  return (
    <section id="impacto" className="js-impact relative overflow-hidden bg-[#F0F7FF] py-14">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="js-impact-title mt-4 text-center text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
          Alcance del Modelo NeuroFamilia
        </h2>

        <p className="js-impact-bridge mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-[#0B3B82]/75 sm:text-lg">
          Hoy, NeuroFamilia integra salud mental, desarrollo humano, innovación social y
          transformación digital en un modelo construido desde Galápagos.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[13px] leading-6 text-[#0B3B82]/55">
          Estas cifras representan los principales componentes que dan forma al Modelo
          NeuroFamilia.
        </p>

        <dl className="js-impact-stats mt-10 grid gap-10 text-center sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.title}>
              <dt className="sr-only">{stat.title}</dt>
              <dd className="text-6xl font-extrabold tracking-tight text-[#0066CC] sm:text-7xl">
                {stat.value}
              </dd>
              <h3 className="mt-3 text-base font-extrabold text-[#0B3B82]">{stat.title}</h3>
              <p className="mx-auto mt-1.5 max-w-xs text-[13px] leading-5 text-[#0B3B82]/65">
                {stat.description}
              </p>
            </div>
          ))}
        </dl>

        <div className="mt-12 text-center">
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
