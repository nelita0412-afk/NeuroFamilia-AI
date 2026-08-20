import { Building2, Eye, Target } from 'lucide-react';

const CARD_CONTENT = [
  {
    num: '01',
    icon: Building2,
    title: 'Quiénes Somos',
    detail:
      'La Fundación Centro Integral de Bienestar e Innovación Social es una organización privada sin fines de lucro creada para promover el bienestar integral, el desarrollo humano y la innovación social, impulsando iniciativas, programas y proyectos que fortalezcan a las personas, familias y comunidades, con prioridad en Galápagos y proyección nacional e internacional.',
    gradient: 'from-[#0B3B82]/10 via-[#0066CC]/10 to-[#00B8D9]/15',
    iconBg: 'from-[#0066CC] to-[#00B8D9]',
  },
  {
    num: '02',
    icon: Target,
    title: 'Misión',
    detail:
      'Promover el bienestar integral y el desarrollo humano mediante programas, proyectos e iniciativas orientadas a la salud mental, el fortalecimiento familiar, la inclusión social, la educación, la innovación y el desarrollo de capacidades para mejorar la calidad de vida de las personas y comunidades.',
    gradient: 'from-[#0B3B82]/10 via-[#00B8D9]/10 to-[#0B3B82]/15',
    iconBg: 'from-[#0B3B82] to-[#0066CC]',
  },
  {
    num: '03',
    icon: Eye,
    title: 'Visión',
    detail:
      'Ser una organización referente en bienestar integral, innovación social y desarrollo humano, generando oportunidades para que las personas, familias y comunidades alcancen su máximo potencial mediante soluciones sostenibles, colaborativas e innovadoras.',
    gradient: 'from-[#0066CC]/10 via-[#0B3B82]/10 to-[#00B8D9]/15',
    iconBg: 'from-[#00B8D9] to-[#0B3B82]',
  },
];

export function FoundationSection() {
  return (
    <section
      id="fundacion"
      className="js-foundation relative overflow-hidden bg-white py-24"
    >
      <span
        className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-[#00B8D9]/10 blur-3xl"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-32 bottom-16 h-96 w-96 rounded-full bg-[#0066CC]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="js-foundation-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
            La Fundación
          </p>
          <h2 className="js-foundation-title mt-4 text-2xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
            Fundación Centro Integral de Bienestar e Innovación Social
          </h2>
          <p className="js-foundation-body mx-auto mt-5 max-w-2xl text-base leading-7 text-[#0B3B82]/70 sm:text-lg">
            La organización que impulsa NeuroFamilia Galápagos.
          </p>
        </div>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {CARD_CONTENT.map(({ num, icon: Icon, title, detail, gradient, iconBg }) => (
            <li
              key={num}
              className="js-foundation-card group relative overflow-hidden rounded-[28px] p-8 ring-1 ring-[#0066CC]/10 transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_32px_64px_rgba(11,59,130,0.18)]"
            >
              <span
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient}`}
              />
              <span className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/40 blur-2xl" />
              <span className="absolute right-7 top-7 text-5xl font-extrabold text-[#0B3B82]/10">
                {num}
              </span>
              <span
                className={`relative grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${iconBg} text-white shadow-[0_16px_36px_rgba(0,102,204,0.35)] transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110`}
              >
                <Icon className="h-10 w-10" />
              </span>
              <h3 className="relative mt-7 text-2xl font-extrabold text-[#0B3B82]">{title}</h3>
              <p className="relative mt-3 text-[15px] leading-7 text-[#0B3B82]/70">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}