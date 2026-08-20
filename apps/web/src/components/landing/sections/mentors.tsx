import Image from 'next/image';
import { MENTOR_NAMES } from '@neurofamilia/shared';
import { MENTOR_IDENTITY } from '@/lib/mentor-identity';
import { MENTOR_COLORS } from '@/lib/mentor-visuals';

export function MentorsSection() {
  return (
    <section
      id="mentores"
      className="js-mentors relative flex min-h-screen items-center overflow-hidden bg-[#0A4E9B]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-[#1476C6]/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <div className="text-center">
          <p className="js-mentors-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#29C7D8]">
            Los NeuroMentores
          </p>
          <h2 className="js-mentors-title mt-4 text-3xl font-extrabold leading-tight text-[#F8FBFF] sm:text-5xl">
            Ocho guías. Cada uno conoce un camino.
          </h2>
          <p className="js-mentors-subtitle mx-auto mt-4 max-w-2xl text-base leading-7 text-[#F8FBFF]/75">
            No son funcionalidades. Son acompañantes vivos del crecimiento, con personalidad,
            metodología y una mirada propia sobre el ser humano.
          </p>
        </div>

        <div className="js-mentors-stage mt-14 [perspective:1400px]">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8 lg:gap-3">
            {MENTOR_NAMES.map((name, i) => {
              const identity = MENTOR_IDENTITY[name];
              const color = MENTOR_COLORS[name];
              return (
                <li key={name} className={`js-mentor js-mentor-${i + 1}`}>
                  <div
                    className="group relative overflow-hidden rounded-3xl bg-white/10 shadow-[0_18px_40px_rgba(2,32,76,0.45)] ring-1 ring-white/15 transition-transform duration-300 hover:-translate-y-1"
                    style={{ borderTop: `3px solid ${color.primary}` }}
                  >
                    <div className="relative aspect-[9/16]">
                      <Image
                        src={identity.image}
                        alt={`Mentor ${name}, ${identity.shortDescription}`}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 11vw"
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                    <div className="bg-white/95 px-2 py-3 text-center">
                      <p className="text-sm font-extrabold" style={{ color: color.primary }}>
                        {name}
                      </p>
                      <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#0A4E9B]/70">
                        {identity.specialty}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}