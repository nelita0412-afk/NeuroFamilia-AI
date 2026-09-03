import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const MENTORS = [
  {
    name: 'ALBA',
    image: '/images/mentores/v2/ALBA.PNG',
    specialty: 'Proyecto de Vida',
    microFrases: 'Convirtiendo la idea del futuro en conversaciones serenas de hoy.',
  },
  {
    name: 'NIA',
    image: '/images/mentores/v2/NIA.PNG',
    specialty: 'Adaptabilidad',
    microFrases: 'Leyendo las señales para que cada transición se sienta segura.',
  },
  {
    name: 'DARWIN',
    image: '/images/mentores/v2/DARWIN.PNG',
    specialty: 'Innovación',
    microFrases:
      'Creando espacios donde experimentar y ver el cambio como parte del crecimiento.',
  },
];

export function MentorsPreviewSection() {
  return (
    <section
      id="mentores-preview"
      className="js-mentors-preview relative overflow-hidden bg-[#0B3B82] px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="js-mentors-preview-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#00B8D9]">
            NeuroMentores
          </p>
          <h2 className="js-mentors-preview-title mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Ocho guías, un mismo propósito
          </h2>
          <p className="js-mentors-preview-body mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-white/80">
            Una red de guías con identidad propia —de ALBA a DARWIN— para conversar sobre el
            proyecto de vida, la resiliencia, la autoaceptación y la innovación.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-3">
          {MENTORS.map(({ name, image, specialty, microFrases }) => (
            <li key={name} className="js-mentor-card">
              <Link href={`/neuromentores#${name.toLowerCase()}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={image}
                    alt={name}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:aspect-[2/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B82]/90 via-[#0B3B82]/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00B8D9] sm:text-xs">
                      {specialty}
                    </p>
                    <p className="mt-1 text-lg font-extrabold text-white sm:text-xl">{name}</p>
                    <p className="mt-1.5 text-xs leading-5 text-white/85 sm:text-sm">
                      {microFrases}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="js-mentors-preview-cta mt-12 text-center">
          <Link
            href="/neuromentores"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
          >
            Explora los 8 NeuroMentores
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}