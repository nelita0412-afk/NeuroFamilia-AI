import { Brain, Globe, GraduationCap, Search, Sparkles } from 'lucide-react';

/* ── 2. NUESTRA HISTORIA · Línea de tiempo ─────────────────── */

type Milestone = {
  icon: typeof Brain;
  date: string;
  title: string;
  detail: string;
  highlight?: boolean;
};

const TIMELINE: Milestone[] = [
  {
    icon: Search,
    date: '2023 – 2024',
    title: 'Identificando una necesidad',
    detail:
      'En Galápagos se evidencian barreras de acceso a servicios de salud mental, neurodesarrollo y acompañamiento familiar. Surge la convicción de construir una solución propia desde el territorio.',
  },
  {
    icon: Sparkles,
    date: '2025',
    title: 'Nace NeuroFamilia Galápagos',
    detail:
      'Se crea una propuesta innovadora que integra salud mental, desarrollo humano, tecnología e innovación social desde una perspectiva comunitaria.',
  },
  {
    icon: Brain,
    date: '2026',
    title: 'Construcción del Modelo NeuroFamilia',
    detail:
      'Se consolida el modelo conceptual y metodológico, integrando ciencia, trabajo social, psicología, innovación y transformación digital.',
  },
  {
    icon: GraduationCap,
    date: '2026',
    title: 'Reconocimiento internacional',
    detail:
      'El Modelo NeuroFamilia es aceptado para presentación en el Global Research Symposium de la University of North Carolina at Chapel Hill (UNC), posicionando una iniciativa nacida en Galápagos en un escenario académico internacional.',
    highlight: true,
  },
  {
    icon: Globe,
    date: 'Futuro',
    title: 'De Galápagos para el mundo',
    detail:
      'El modelo proyecta su crecimiento hacia nuevas comunidades, promoviendo bienestar, innovación social y desarrollo humano desde una visión global.',
  },
];

export function HistorySection() {
  return (
    <section className="js-about-history relative overflow-hidden bg-[#F0F7FF] py-14">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="js-about-history-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
            Nuestra Historia
          </p>
          <h2 className="js-about-history-title mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
            Un camino nacido en Galápagos
          </h2>
        </div>

        {/* Línea de tiempo vertical alternada */}
        <div className="js-timeline relative mx-auto mt-10 max-w-4xl">
          {/* Eje central */}
          <span
            className="absolute left-8 top-2 bottom-2 w-0.5 bg-[#00B8D9]/30 md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ol className="space-y-10">
            {TIMELINE.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={item.title}
                  className="js-timeline-item relative md:grid md:min-h-[150px] md:grid-cols-2 md:items-center md:py-6"
                >
                  {/* Conector hacia el eje (solo desktop) */}
                  {left && (
                    <span className="hidden md:block absolute top-8 left-1/2 h-0.5 w-12 -translate-x-full bg-[#00B8D9]/30" />
                  )}
                  {!left && (
                    <span className="hidden md:block absolute top-8 left-1/2 h-0.5 w-12 bg-[#00B8D9]/30" />
                  )}

                  {/* Nodo en el eje */}
                  <span
                    className={`absolute left-0 top-0 z-10 grid h-16 w-16 place-items-center rounded-full shadow-[0_12px_28px_rgba(11,59,130,0.14)] ring-4 ring-[#F0F7FF] md:left-1/2 md:-translate-x-1/2 ${
                      item.highlight
                        ? 'bg-[#0B3B82] text-white ring-offset-2 ring-offset-[#F5B800]'
                        : 'bg-white text-[#0066CC]'
                    }`}
                  >
                    <item.icon className="h-8 w-8" />
                  </span>

                  {/* Contenido */}
                  <div
                    className={
                      left
                        ? 'pl-20 md:pl-0 md:pr-24 md:text-right'
                        : 'pl-20 md:col-start-2 md:pl-24'
                    }
                  >
                    {item.highlight && (
                      <span className="mb-1 inline-block rounded-full bg-[#F5B800] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#0B3B82]">
                        Logro Global
                      </span>
                    )}
                    <p
                      className={`text-[13px] font-bold uppercase tracking-[0.18em] ${
                        item.highlight ? 'text-[#B8860B]' : 'text-[#00B8D9]'
                      }`}
                    >
                      {item.date}
                    </p>
                    <h3 className="mt-1 text-xl font-extrabold text-[#0B3B82]">{item.title}</h3>
                    <p className="mt-2 text-[14px] leading-6 text-[#072A5C]">{item.detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}