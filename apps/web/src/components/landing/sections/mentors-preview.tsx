import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MENTOR_NAMES } from '@neurofamilia/shared';
import { MENTOR_IDENTITY } from '@/lib/mentor-identity';

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

        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-8 sm:gap-x-3">
          {MENTOR_NAMES.map((name) => {
            const identity = MENTOR_IDENTITY[name];
            return (
              <li key={name} className="js-mentor-avatar flex flex-col items-center">
                <span className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-white/25 transition-transform duration-300 hover:scale-110 hover:ring-white/60 sm:h-[4.5rem] sm:w-[4.5rem]">
                  <Image
                    src={identity.image}
                    alt={`Mentor ${name}, ${identity.specialty}`}
                    fill
                    sizes="72px"
                    loading="lazy"
                    className="object-cover object-top"
                  />
                </span>
                <p className="mt-2.5 text-sm font-extrabold tracking-wide text-white">{name}</p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase leading-4 tracking-[0.08em] text-white/55">
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
