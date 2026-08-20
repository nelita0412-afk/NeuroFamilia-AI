import Image from 'next/image';
import { MENTOR_NAMES } from '@neurofamilia/shared';
import { MENTOR_IDENTITY } from '@/lib/mentor-identity';
import { MENTOR_COLORS } from '@/lib/mentor-visuals';

export function MentorsSection() {
  return (
    <section
      id="mentores"
      className="js-mentors relative overflow-hidden bg-[#F0F7FF] py-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="js-mentors-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
            NeuroMentores
          </p>
          <h2 className="js-mentors-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
            Ocho guías. Cada uno conoce un camino.
          </h2>
          <p className="js-mentors-subtitle mx-auto mt-4 max-w-2xl text-base leading-7 text-[#0B3B82]/70">
            No son funcionalidades. Son acompañantes vivos del crecimiento, con personalidad,
            metodología y una mirada propia sobre el ser humano.
          </p>
        </div>

        <ul className="js-mentors-grid mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {MENTOR_NAMES.map((name) => {
            const identity = MENTOR_IDENTITY[name];
            const color = MENTOR_COLORS[name];
            return (
              <li key={name} className="js-mentor">
                <div className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(11,59,130,0.08)] ring-1 ring-[#0066CC]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(11,59,130,0.16)]">
                  <div className="relative aspect-[9/16]">
                    <Image
                      src={identity.image}
                      alt={`Mentor ${name}, ${identity.shortDescription}`}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                  <div className="border-t-2 px-4 py-4" style={{ borderColor: color.primary }}>
                    <p className="text-base font-extrabold text-[#0B3B82]">{name}</p>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0B3B82]/60">
                      {identity.specialty}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}