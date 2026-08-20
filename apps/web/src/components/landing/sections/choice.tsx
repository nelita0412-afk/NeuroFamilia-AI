import Image from 'next/image';
import Link from 'next/link';

const PATHS = [
  {
    emoji: '🌊',
    title: 'Soy Familia',
    subtitle: 'Acompañar el crecimiento familiar',
    href: '/caminos/familia',
  },
  {
    emoji: '🌱',
    title: 'Soy Adolescente',
    subtitle: 'Descubrir quién soy y quién quiero ser',
    href: '/caminos/adolescente',
  },
  {
    emoji: '🧩',
    title: 'Soy Profesional',
    subtitle: 'Acompañar procesos de desarrollo humano',
    href: '/caminos/profesional',
  },
  {
    emoji: '🏛',
    title: 'Soy Institución',
    subtitle: 'Implementar NeuroFamilia a escala',
    href: '/caminos/institucion',
  },
];

export function ChoiceSection() {
  return (
    <section
      id="eleccion"
      className="js-choice relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#0A4E9B] via-[#1476C6] to-[#29C7D8]"
    >
      <div
        className="js-sun pointer-events-none absolute right-[12%] top-[14%] h-44 w-44 rounded-full bg-[#F8FBFF]/60 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <div className="text-center">
          <p className="js-choice-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#F8FBFF]/80">
            El viaje comienza aquí
          </p>
          <h2 className="js-choice-title mt-4 text-4xl font-extrabold leading-tight text-[#F8FBFF] sm:text-6xl">
            ¿Cómo quieres formar parte de NeuroFamilia?
          </h2>
        </div>

        <ul className="js-choice-paths mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PATHS.map((path) => (
            <li key={path.title}>
              <Link
                href={path.href}
                className="group flex h-full flex-col rounded-3xl bg-white/10 p-6 ring-1 ring-white/25 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/15 hover:shadow-[0_24px_60px_rgba(2,32,76,0.5)]"
              >
                <span className="text-3xl" aria-hidden="true">
                  {path.emoji}
                </span>
                <p className="mt-4 text-xl font-extrabold text-[#F8FBFF]">{path.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#F8FBFF]/75">{path.subtitle}</p>
                <span className="mt-auto pt-5 text-sm font-bold text-[#29C7D8] transition-transform duration-300 group-hover:translate-x-1">
                  Conocer este camino →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="js-choice-turtle-wrap relative mx-auto mt-20 max-w-sm opacity-0">
          <Image
            src="/images/logo/logo.png"
            alt="Tortuga NeuroFamilia avanza hacia el horizonte"
            width={440}
            height={378}
            loading="lazy"
            className="js-choice-turtle mx-auto drop-shadow-[0_24px_48px_rgba(2,32,76,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}