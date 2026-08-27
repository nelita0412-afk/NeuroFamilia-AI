import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Cpu, Crown, Heart, Shield, Sparkles, Target, Users } from 'lucide-react';
import { MENTOR_NAMES } from '@neurofamilia/shared';
import { MENTOR_IDENTITY } from '@/lib/mentor-identity';
import { MENTOR_COLORS } from '@/lib/mentor-visuals';

const DIMENSION_ICONS = {
  Target, Heart, BookOpen, Shield, Users, Crown, Sparkles, Cpu,
} as const;

const MENTOR_DIMENSIONS: Record<string, { dimension: string; icon: keyof typeof DIMENSION_ICONS }> = {
  ALBA:  { dimension: 'Propósito de Vida', icon: 'Target' },
  BOBBY: { dimension: 'Bienestar Emocional', icon: 'Heart' },
  PINGO: { dimension: 'Aprendizaje Permanente', icon: 'BookOpen' },
  MAKI:  { dimension: 'Resiliencia', icon: 'Shield' },
  LEO:   { dimension: 'Vínculos y Familia', icon: 'Users' },
  CORA:  { dimension: 'Liderazgo y Participación', icon: 'Crown' },
  DARWIN:{ dimension: 'Creatividad e Innovación', icon: 'Sparkles' },
  NIA:   { dimension: 'Acompañamiento transversal', icon: 'Sparkles' },
};

const HOW_BLOCKS = [
  { title: 'Inspiran', description: 'Despiertan curiosidad, motivación y nuevas formas de ver los desafíos cotidianos.', icon: '💡' },
  { title: 'Orientan', description: 'Sugieren pasos concretos, actividades simples y preguntas que abren caminos.', icon: '🧭' },
  { title: 'Fortalecen', description: 'Contribuyen a construir resiliencia, hábitos y autonomía en cada conversación.', icon: '🛡️' },
  { title: 'Conectan', description: 'Fortalecen los vínculos familiares y el sentido de pertenencia a la comunidad.', icon: '🤝' },
];

export function MentorsSection() {
  return (
    <div className="relative bg-white">
      {/* ═══════════ HERO ═══════════ */}
      <section className="js-mentors-hero relative overflow-hidden bg-[#F0F7FF] px-5 py-28 sm:px-8">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="js-mentors-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
            NeuroMentores
          </p>
          <h1 className="js-mentors-title mt-4 text-4xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
            Los NeuroMentores
          </h1>
          <p className="js-mentors-hero-sub mt-5 text-xl font-bold text-[#0B3B82] sm:text-2xl">
            Ocho formas de acompañar el crecimiento humano.
          </p>
          <p className="js-mentors-subtitle mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#0B3B82]/70">
            Ocho mentores con personalidad, metodología y una mirada propia que fortalecen las dimensiones del Modelo NeuroFamilia para personas, familias y comunidades.
          </p>
        </div>
      </section>

      {/* ═══════════ ¿POR QUÉ NACEN? ═══════════ */}
      <section className="js-mentors-why relative overflow-hidden bg-[#F0F7FF] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">Propósito</p>
          <h2 className="js-mentors-why-title mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
            ¿Por qué nacen los NeuroMentores?
          </h2>
          <p className="js-mentors-why-body mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#072A5C]">
            En lugares donde el acompañamiento especializado no siempre está disponible, cada conversación puede convertirse en una oportunidad para aprender, crecer y fortalecer vínculos.
          </p>
          <div className="js-mentors-why-cards mt-10 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#0066CC]/10 bg-white p-6 sm:p-7">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#00B8D9]/10 text-[#00B8D9]">
                <span className="text-xl">🌊</span>
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-[#0B3B82]">Razón</h3>
              <p className="mt-2 text-[14px] leading-6 text-[#072A5C]">
                En Galápagos, las barreras geográficas, el estigma y el acceso limitado a servicios especializados pueden dificultar el acompañamiento oportuno.
              </p>
            </div>
            <div className="rounded-2xl border border-[#0066CC]/10 bg-white p-6 sm:p-7">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0066CC]/8 text-[#0066CC]">
                <span className="text-xl">🤝</span>
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-[#0B3B82]">Respuesta</h3>
              <p className="mt-2 text-[14px] leading-6 text-[#072A5C]">
                Los NeuroMentores acercan herramientas de orientación, aprendizaje y bienestar a las personas, familias y comunidades.
              </p>
            </div>
            <div className="rounded-2xl border border-[#0066CC]/10 bg-white p-6 sm:p-7">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#2E9B63]/10 text-[#2E9B63]">
                <span className="text-xl">🌱</span>
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-[#0B3B82]">Compromiso</h3>
              <p className="mt-2 text-[14px] leading-6 text-[#072A5C]">
                Cada interacción busca fortalecer capacidades, promover la autonomía y contribuir al desarrollo humano integral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ GALERÍA ═══════════ */}
      <section className="js-mentors-gallery relative overflow-hidden bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">El modelo en acción</p>
            <h2 className="js-mentors-gallery-title mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
              Conoce a los NeuroMentores
            </h2>
            <p className="js-mentors-gallery-body mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#072A5C]">
              Cada NeuroMentor representa una forma distinta de acompañar el crecimiento de las personas, las familias y las comunidades. Juntos conforman un ecosistema de apoyo que fortalece el bienestar, el aprendizaje, la participación y los vínculos familiares.
            </p>
          </div>

          <ul className="js-mentors-grid mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {MENTOR_NAMES.map((name) => {
              const identity = MENTOR_IDENTITY[name];
              const color = MENTOR_COLORS[name];
              const dim = MENTOR_DIMENSIONS[name];
              const Icon = DIMENSION_ICONS[dim.icon];
              return (
                <li key={name} className="js-mentor h-full">
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(11,59,130,0.08)] ring-1 ring-[#0066CC]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(11,59,130,0.16)]">
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
                    <div className="border-t-[3px] px-4 py-4" style={{ borderColor: color.primary }}>
                      <p className="text-base font-extrabold text-[#0B3B82]">{name}</p>
                      <div className="mt-1 flex items-center gap-1.5">
                        <Icon className="h-3.5 w-3.5 text-[#0066CC]" />
                        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0066CC]">
                          {dim.dimension}
                        </p>
                      </div>
                      <p className="mt-2 text-[12px] leading-[1.5] text-[#0B3B82]/60">
                        {identity.shortDescription}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="mt-6 text-center text-[12px] italic text-[#0B3B82]/40">
            Los NeuroMentores se inspiran en las dimensiones del Modelo NeuroFamilia. Cuno acompaña más de una dimensión según el contexto y la necesidad.
          </p>
        </div>
      </section>

      {/* ═══════════ CÓMO ACOMPAÑAN ═══════════ */}
      <section className="js-mentors-how relative overflow-hidden bg-[#F0F7FF] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">Metodología</p>
            <h2 className="js-mentors-how-title mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
              Más que personajes, herramientas para el crecimiento
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#072A5C]">
              Cuatro formas concretas en que cada NeuroMentor fortalece el desarrollo humano en el día a día de las familias.
            </p>
          </div>
          <div className="js-mentors-how-cards mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_BLOCKS.map((block) => (
              <div key={block.title} className="rounded-2xl border border-[#0066CC]/10 bg-white p-6 text-center sm:p-7">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-[14px] bg-[#0066CC]/6 text-2xl">
                  {block.icon}
                </div>
                <h3 className="mt-4 text-base font-extrabold text-[#0B3B82]">{block.title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-[#072A5C]">{block.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ GALÁPAGOS ═══════════ */}
      <section className="js-mentors-territory relative overflow-hidden bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">Territorio</p>
          <h2 className="js-mentors-territory-title mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
            Nacidos en Galápagos,<br className="hidden sm:block" /> pensados para cualquier familia
          </h2>
          <p className="js-mentors-territory-body mt-5 max-w-2xl text-[15px] leading-7 text-[#072A5C]">
            El Modelo NeuroFamilia nace en un territorio único: las islas Galápagos. La distancia, la diversidad cultural y las barreras de acceso convirtieron el archipiélago en un laboratorio de innovación social. Lo que funciona aquí — el acompañamiento cercano, la tecnología al servicio de las personas, el cuidado desde la comunidad — puede replicarse en cualquier contexto donde el desarrollo humano sea prioridad.
          </p>
        </div>
      </section>

      {/* ═══════════ CIERRE ═══════════ */}
      <section className="js-mentors-closing relative overflow-hidden bg-[#0B3B82] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">NeuroFamilia</p>
          <h2 className="js-mentors-closing-title mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Un ecosistema para las<br className="hidden sm:block" /> próximas generaciones
          </h2>
          <p className="js-mentors-closing-body mx-auto mt-5 max-w-xl text-[15px] leading-7 text-white/80">
            Los NeuroMentores forman parte de una visión más amplia: fortalecer el bienestar, el aprendizaje y el desarrollo humano desde Galápagos para las próximas generaciones.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/teoria-de-cambio"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: '#00B8D9', boxShadow: '0 8px 24px rgba(0,184,217,0.35)' }}
            >
              Explorar la Teoría de Cambio
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/plataforma"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-white/10"
              style={{ border: '1.5px solid rgba(255,255,255,0.35)' }}
            >
              Conocer el Modelo NeuroFamilia
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
