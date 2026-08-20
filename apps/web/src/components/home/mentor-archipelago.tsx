'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MENTORS } from '@/lib/constants';
import { MENTOR_IDENTITY } from '@/lib/mentor-identity';

// Estado futuro del Archipielago Premium: el slot de status de cada tarjeta esta
// tipado para crecer sin cambiar la estructura. Hoy solo se renderiza 'recommended';
// 'featured-resources' y 'recent-activity' son estructura lista para su fase.
export type MentorCardStatus = 'recommended' | 'featured-resources' | 'recent-activity' | undefined;

const STATUS_LABELS: Record<Exclude<MentorCardStatus, undefined>, string> = {
  recommended: 'Recomendado hoy',
  'featured-resources': 'Recursos destacados',
  'recent-activity': 'Actividad reciente',
};

function renderStatusSlot(status: MentorCardStatus) {
  if (status !== 'recommended') {
    return null;
  }

  return (
    <span className="rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#003D78] shadow-[0_6px_16px_rgba(0,61,120,0.18)] backdrop-blur">
      {STATUS_LABELS[status]}
    </span>
  );
}

type MentorArchipelagoProps = {
  recommendedMentor: string;
};

export function MentorArchipelago({ recommendedMentor }: MentorArchipelagoProps) {
  return (
    <ul className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
      {MENTORS.map((mentor) => {
        const identity = MENTOR_IDENTITY[mentor];
        const status: MentorCardStatus = mentor === recommendedMentor ? 'recommended' : undefined;

        return (
          <li key={mentor} className="w-[72vw] shrink-0 snap-center sm:w-auto">
            <Link
              href={`/dashboard/mentores?mentor=${mentor}`}
              aria-label={`Conversar con ${mentor}, ${identity.shortDescription}`}
              className="group block overflow-hidden rounded-[26px] bg-white shadow-[0_18px_40px_rgba(0,61,120,0.12)] transition-all duration-200 hover:shadow-[0_22px_44px_rgba(0,61,120,0.18)] sm:hover:-translate-y-1 motion-reduce:transform-none"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-[#F3FAFE]">
                {/* Ilustraciones v2: personajes completos con fondo transparente; object-contain evita recortes. */}
                <Image
                  src={identity.image}
                  alt={`Mentor ${mentor}, ${identity.shortDescription}`}
                  fill
                  sizes="(max-width: 640px) 72vw, (max-width: 1024px) 45vw, 22vw"
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none"
                />
                <div className="absolute left-3 top-3">{renderStatusSlot(status)}</div>
                <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/85 px-3 py-2 shadow-[0_10px_24px_rgba(0,61,120,0.16)] backdrop-blur">
                  <p className="text-sm font-bold text-[#002A68] font-display">{mentor}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-[#0069B7]">{identity.specialty}</p>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
