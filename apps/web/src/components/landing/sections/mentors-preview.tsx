import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MENTOR_NAMES } from '@neurofamilia/shared';
import { MENTOR_IDENTITY } from '@/lib/mentor-identity';
import { MENTOR_COLORS } from '@/lib/mentor-visuals';

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

        {/* Cards verticales — ilustración completa 2:3 sin recortes */}
        <div className="mx-auto mt-14 grid max-w-[960px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {MENTOR_NAMES.map((name) => {
            const identity = MENTOR_IDENTITY[name];
            const accent = MENTOR_COLORS[name].primary;
            return (
              <article
                key={name}
                className="js-mentor-card group flex h-full flex-col overflow-hidden rounded-[14px] bg-white text-left shadow-[0_8px_30px_rgba(0,20,60,0.25)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,40,90,0.45),0_0_32px_rgba(0,184,217,0.18)]"
              >
                <div className="relative aspect-[2/3] w-full bg-[#E8F1FA]">
                  <Image
                    src={identity.image}
                    alt={`Mentor ${name}, ${identity.specialty}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 216px"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div
                  className="flex flex-1 flex-col border-t-[3px] p-4"
                  style={{ borderColor: accent }}
                >
                  <h3 className="text-lg font-extrabold text-[#0B3B82]">{name}</h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0066CC]">
                    {identity.specialty}
                  </p>
                  <p className="mt-2 min-h-[40px] text-[13px] leading-[1.5] text-[#0B3B82]/70">
                    {identity.shortDescription}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

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
