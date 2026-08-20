import { Brain, MonitorSmartphone, Rocket, Sparkles, Users } from 'lucide-react';

/* ── 2. NUESTRA HISTORIA · Línea de tiempo ─────────────────── */

const TIMELINE = [
  {
    icon: Sparkles,
    date: 'Septiembre 2025',
    title: 'Creación de NeuroFamilia',
    detail: 'Creación de NeuroFamilia Galápagos.',
  },
  {
    icon: Brain,
    date: 'Modelo NeuroFamilia',
    title: 'Ciencia + Comunidad',
    detail: 'Integración de salud mental, trabajo social, psicología e innovación social.',
  },
  {
    icon: MonitorSmartphone,
    date: 'Plataforma Digital',
    title: 'Ecosistema digital',
    detail: 'Desarrollo del ecosistema digital NeuroFamilia.',
  },
  {
    icon: Users,
    date: 'NeuroMentores',
    title: 'Acompañamiento vivo',
    detail: 'Creación de espacios de mentoría y acompañamiento.',
  },
  {
    icon: Rocket,
    date: 'Futuro',
    title: 'Galápagos → El mundo',
    detail: 'Escalamiento del modelo hacia nuevas comunidades.',
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
          <p className="js-about-history-body mx-auto mt-4 max-w-2xl text-base leading-7 text-[#0B3B82]/70">
            Cada hito fue diseñado junto a familias, profesionales e instituciones, con la
            mirada puesta en las próximas generaciones.
          </p>
        </div>

        {/* Línea de tiempo horizontal */}
        <div className="js-timeline relative mt-14 hidden lg:block">
          <span className="js-timeline-line absolute left-0 right-0 top-8 h-0.5 bg-[#00B8D9]/30" />
          <ol className="grid grid-cols-5 gap-5">
            {TIMELINE.map((item) => (
              <li key={item.title} className="js-timeline-item relative text-center">
                <span className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full bg-white text-[#0066CC] shadow-[0_12px_28px_rgba(11,59,130,0.14)] ring-4 ring-[#F0F7FF]">
                  <item.icon className="h-7 w-7" />
                </span>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00B8D9]">
                  {item.date}
                </p>
                <h3 className="mt-1 text-base font-extrabold text-[#0B3B82]">{item.title}</h3>
                <p className="mx-auto mt-1.5 max-w-[190px] text-[13px] leading-5 text-[#0B3B82]/65">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Línea de tiempo vertical (móvil) */}
        <ol className="js-timeline-mobile relative mx-auto mt-12 max-w-md space-y-7 border-l-2 border-[#00B8D9]/30 pl-7 lg:hidden">
          {TIMELINE.map((item, i) => (
            <li key={item.title} className="relative">
              <span className="absolute -left-[38px] grid h-7 w-7 place-items-center rounded-full bg-[#0066CC] text-white ring-4 ring-[#F0F7FF]">
                <item.icon className="h-3.5 w-3.5" />
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00B8D9]">
                {item.date}
              </p>
              <h3 className="mt-0.5 text-base font-extrabold text-[#0B3B82]">{item.title}</h3>
              <p className="mt-1 text-[13px] leading-5 text-[#0B3B82]/65">{item.detail}</p>
              {i < TIMELINE.length - 1 && (
                <span className="absolute -left-px top-8 h-full w-0.5 bg-[#00B8D9]/30" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}