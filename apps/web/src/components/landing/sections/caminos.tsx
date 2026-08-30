import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  Home,
  Landmark,
  Rocket,
} from 'lucide-react';

const CAMINOS = [
  {
    icon: Home,
    href: '/caminos/familia',
    title: 'Familias',
    detail: 'Rutinas, emociones y proyectos de vida para cuidar en casa. Ideas claras para la semana, no teorías.',
  },
  {
    icon: Rocket,
    href: '/caminos/adolescente',
    title: 'Adolescentes',
    detail: 'Un espacio para preguntar sin vergüenza: quién soy, qué quiero, cómo me siento.',
  },
  {
    icon: Briefcase,
    href: '/caminos/profesional',
    title: 'Profesionales',
    detail: 'Herramientas con evidencia para hacer seguimiento y decidir con datos, no con intuición.',
  },
  {
    icon: Landmark,
    href: '/caminos/institucion',
    title: 'Instituciones',
    detail: 'Todo el programa, desplegado por etapas, con formación y soporte para tu equipo.',
  },
];

export function CaminosSection() {
  return (
    <section
      id="caminos"
      className="js-caminos relative overflow-hidden bg-[#F0F7FF] px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="js-caminos-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
            Para quién
          </p>
          <h2 className="js-caminos-title mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
            Hay una ruta para cada realidad
          </h2>
          <p className="js-caminos-body mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#072A5C]">
            Familias, adolescentes, profesionales e instituciones: cada quien con un punto de
            partida claro.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CAMINOS.map(({ icon: Icon, href, title, detail }) => (
            <li key={title} className="js-caminos-card">
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-[#0066CC]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(11,59,130,0.14)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#0066CC]/8 text-[#0066CC] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-[#0B3B82]">{title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-6 text-[#072A5C]">{detail}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0066CC]">
                  Explorar este camino
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}