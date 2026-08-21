import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MENTOR_NAMES } from '@neurofamilia/shared';
import { MENTOR_IDENTITY } from '@/lib/mentor-identity';

/* Encuadre individual por mentor.
   - pos: object-position que centra el personaje (medido por imagen).
   - scale: ajuste de escala solicitado por mentor (se multiplica por BASE_ZOOM
     para que ninguna reducción deje huecos dentro del círculo).
   - dy: bajada fina en px para igualar la línea de los rostros.
   - oy: origen vertical del zoom (%), tomado del centroide del personaje. */
const BASE_ZOOM = 1.15;

const AVATAR_FRAMING: Record<string, { pos: string; scale: number; dy: number; oy: number }> = {
  ALBA: { pos: '31% 50%', scale: 0.9, dy: 6, oy: 42 },
  NIA: { pos: '34% 50%', scale: 1.12, dy: 0, oy: 46 },
  MAKI: { pos: '33% 50%', scale: 0.95, dy: 3, oy: 47 },
  BOBBY: { pos: '40% 50%', scale: 0.9, dy: 6, oy: 49 },
  LEO: { pos: '32% 50%', scale: 0.92, dy: 5, oy: 44 },
  CORA: { pos: '36% 50%', scale: 0.88, dy: 7, oy: 44 },
  PINGO: { pos: '26% 50%', scale: 0.95, dy: 0, oy: 45 },
  DARWIN: { pos: '35% 50%', scale: 1.12, dy: 0, oy: 41 },
};

export function MentorsPreviewSection() {
  return (
    <section
      id="mentores-preview"
      className="js-mentors-preview relative overflow-hidden bg-[#0B3B82] py-24"
    >
      {/* Resplandor sutil institucional */}
      <span
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#00B8D9]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-center sm:px-8">
        <p className="js-mentors-preview-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#7DD3E8]">
          NeuroMentores
        </p>
        <h2 className="js-mentors-preview-title mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Ocho guías, un mismo propósito
        </h2>
        <p className="js-mentors-preview-body mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75">
          Una red de mentores con identidad propia —de ALBA a DARWIN— que acompaña el proyecto de
          vida, la resiliencia, la autoaceptación, la innovación y mucho más, según la etapa y los
          retos de cada persona.
        </p>

        <ul className="mx-auto mt-14 grid grid-cols-4 gap-x-3 gap-y-10 sm:max-w-3xl lg:max-w-none lg:grid-cols-8 lg:gap-x-5">
          {MENTOR_NAMES.map((name) => {
            const identity = MENTOR_IDENTITY[name];
            const framing = AVATAR_FRAMING[name] ?? {
              pos: '50% 50%',
              scale: 1,
              dy: 0,
              oy: 50,
            };
            return (
              <li key={name} className="js-mentor-avatar flex flex-col items-center">
                {/* Avatar — tamaño uniforme en todos los breakpoints */}
                <span className="relative h-16 w-16 overflow-hidden rounded-full bg-white/10 ring-2 ring-white/25 transition-transform duration-300 hover:scale-110 hover:ring-white/60 sm:h-[100px] sm:w-[100px]">
                  <Image
                    src={identity.image}
                    alt={`Mentor ${name}, ${identity.specialty}`}
                    fill
                    sizes="(max-width: 640px) 64px, 100px"
                    loading="lazy"
                    className="object-cover"
                    style={{
                      objectPosition: framing.pos,
                      transform: `translateY(${framing.dy}px) scale(${(BASE_ZOOM * framing.scale).toFixed(3)})`,
                      transformOrigin: `50% ${framing.oy}%`,
                    }}
                  />
                </span>
                {/* Nombre — altura fija para alineación perfecta */}
                <p className="mt-3 flex h-5 items-start justify-center text-sm font-extrabold tracking-wide text-white">
                  {name}
                </p>
                {/* Especialidad — bloque de altura fija (constante en 1, 2 o 3 líneas) */}
                <p className="mt-1 flex h-12 items-start justify-center text-center text-[10px] font-semibold uppercase leading-4 tracking-[0.08em] text-white/55">
                  {identity.specialty}
                </p>
              </li>
            );
          })}
        </ul>

        <Link
          href="/neuromentores"
          className="js-mentors-preview-cta mt-12 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#00285A] shadow-[0_12px_32px_rgba(0,40,90,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00B8D9] hover:text-white"
        >
          Explora los NeuroMentores
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
