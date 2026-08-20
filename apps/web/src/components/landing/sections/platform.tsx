import Image from 'next/image';
import { Activity, Compass, MessageCircleHeart, BookOpen, Users } from 'lucide-react';
import { MENTOR_NAMES } from '@neurofamilia/shared';
import { MENTOR_IDENTITY } from '@/lib/mentor-identity';
import { MENTOR_COLORS } from '@/lib/mentor-visuals';

const FEATURES = [
  { icon: Activity, title: 'Seguimiento', detail: 'Evolución clara de cada dimensión del desarrollo.' },
  { icon: Compass, title: 'Archipiélago', detail: 'Ocho islas que orientan el recorrido de crecimiento.' },
  { icon: MessageCircleHeart, title: 'Mentor IA', detail: 'Los NeuroMentores acompañan con inteligencia y calidez.' },
  { icon: BookOpen, title: 'Recursos', detail: 'Contenido y prácticas para cada etapa del camino.' },
  { icon: Users, title: 'Comunidad', detail: 'Familias y profesionales conectados en un mismo ecosistema.' },
];

function MiniPoster({ name }: { name: string }) {
  const identity = MENTOR_IDENTITY[name];
  const color = MENTOR_COLORS[name];
  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-[#F8FBFF]">
      <Image
        src={identity.image}
        alt={`Mentor ${name}`}
        fill
        sizes="80px"
        loading="lazy"
        className="object-contain"
      />
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-1.5 py-0.5 text-[7px] font-extrabold" style={{ color: color.primary }}>
        {name}
      </span>
    </div>
  );
}

function DesktopFrame() {
  return (
    <div className="js-platform-desktop w-full overflow-hidden rounded-2xl bg-[#F8FBFF] shadow-[0_40px_90px_rgba(2,32,76,0.6)] ring-1 ring-white/20">
      <div className="flex items-center gap-2 border-b border-[#0A4E9B]/10 bg-white px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#29C7D8]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#1476C6]/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#0A4E9B]/40" />
        <span className="ml-3 h-5 flex-1 rounded-full bg-[#0A4E9B]/5" />
      </div>
      <div className="flex gap-4 p-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-[#29C7D8] to-[#1476C6]" />
            <span className="text-[10px] font-bold text-[#0A4E9B]">Archipiélago</span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {MENTOR_NAMES.map((name) => (
              <MiniPoster key={name} name={name} />
            ))}
          </div>
        </div>
        <div className="hidden w-44 flex-col gap-2 sm:flex">
          <div className="rounded-xl bg-[#0A4E9B]/5 p-3">
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#0A4E9B]/60">Seguimiento</p>
            <div className="mt-2 h-2 w-full rounded-full bg-[#29C7D8]/30" />
            <div className="mt-1.5 h-2 w-3/4 rounded-full bg-[#1476C6]/30" />
            <div className="mt-1.5 h-2 w-1/2 rounded-full bg-[#29C7D8]/20" />
          </div>
          <div className="rounded-xl bg-white p-3 shadow-sm">
            <p className="text-[9px] font-bold text-[#0A4E9B]">Mentor IA</p>
            <p className="mt-1 text-[9px] leading-4 text-[#0A4E9B]/60">ALBA · Proyecto de vida</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabletFrame() {
  return (
    <div className="js-platform-tablet w-56 overflow-hidden rounded-2xl bg-[#F8FBFF] shadow-[0_30px_70px_rgba(2,32,76,0.55)] ring-1 ring-white/20">
      <div className="flex items-center gap-2 bg-white px-3 py-2">
        <span className="h-5 w-5 rounded-full bg-gradient-to-br from-[#29C7D8] to-[#1476C6]" />
        <span className="text-[9px] font-bold text-[#0A4E9B]">Galápagos</span>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3">
        {MENTOR_NAMES.slice(0, 4).map((name) => (
          <MiniPoster key={name} name={name} />
        ))}
      </div>
    </div>
  );
}

function MobileFrame() {
  const identity = MENTOR_IDENTITY['ALBA'];
  const color = MENTOR_COLORS['ALBA'];
  return (
    <div className="js-platform-mobile w-44 overflow-hidden rounded-2xl bg-[#F8FBFF] shadow-[0_30px_70px_rgba(2,32,76,0.55)] ring-1 ring-white/20">
      <div className="flex items-center gap-2 bg-white px-3 py-2.5">
        <div className="h-6 w-6 overflow-hidden rounded-full" style={{ backgroundColor: color.primary }}>
          <Image src={identity.image} alt="ALBA" width={24} height={24} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-[9px] font-extrabold" style={{ color: color.primary }}>ALBA</p>
          <p className="text-[7px] text-[#0A4E9B]/50">Proyecto de vida</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#29C7D8]/25 px-3 py-2 text-[9px] leading-4 text-[#0A4E9B]">
          Quiero encontrar un rumbo para mi hijo
        </div>
        <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[9px] leading-4 text-[#0A4E9B]/80 shadow-sm">
          Podemos explorar juntos su proyecto de vida, paso a paso y sin prisas.
        </div>
      </div>
    </div>
  );
}

export function PlatformSection() {
  return (
    <section
      id="plataforma"
      className="js-platform relative overflow-hidden bg-gradient-to-b from-[#0066CC] to-[#0B3B82] py-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="js-platform-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#00B8D9]">
            La plataforma
          </p>
          <h2 className="js-platform-title mt-4 text-3xl font-extrabold leading-tight text-[#F8FBFF] sm:text-5xl">
            Tecnología al servicio del desarrollo humano
          </h2>
        </div>

        <ul className="js-platform-features mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur transition-transform duration-200 hover:-translate-y-1"
            >
              <feature.icon className="h-6 w-6 text-[#00B8D9]" />
              <p className="mt-3 text-base font-extrabold text-[#F8FBFF]">{feature.title}</p>
              <p className="mt-1.5 text-xs leading-5 text-[#F8FBFF]/70">{feature.detail}</p>
            </li>
          ))}
        </ul>

        <div className="js-platform-stage relative mt-20 flex h-[480px] items-center justify-center sm:h-[520px]">
          <div className="js-platform-desktop-wrap absolute left-1/2 top-1/2 w-[min(640px,90vw)] -translate-x-1/2 -translate-y-1/2">
            <DesktopFrame />
          </div>
          <div className="js-platform-tablet-wrap absolute left-[8%] top-1/2 hidden -translate-y-1/2 lg:block">
            <TabletFrame />
          </div>
          <div className="js-platform-mobile-wrap absolute right-[10%] top-1/2 hidden -translate-y-1/2 lg:block">
            <MobileFrame />
          </div>
        </div>
      </div>
    </section>
  );
}