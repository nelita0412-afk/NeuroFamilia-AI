import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, Cpu, Crown, Footprints, Heart, Layers, Lightbulb, MessageSquare, Shield, Sparkles, Target, Users } from 'lucide-react';
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

const ORIGIN_CARDS = [
  { title: 'Las conversaciones que faltan', description: 'Hay preguntas sin espacio —cómo estoy, qué quiero para mi vida, cómo nos cuidamos en familia— y silencios que pesan cuando nadie las responde.', Icon: MessageSquare },
  { title: 'Una voz por dimensión', description: 'El bienestar no es un solo tema: propósito, emociones, aprendizaje, resiliencia, vínculos, participación, creatividad y transformación digital se desarrollan juntos.', Icon: Layers },
  { title: 'Pasos para hoy', description: 'NeuroMentores no diagnostica ni entrega recetas: propone acciones pequeñas, concretas y posibles que la familia puede probar el mismo día.', Icon: Footprints },
];

const PRINCIPLES = [
  { title: 'Desarrollo humano integral', description: 'El desarrollo humano no se trabaja por partes: emociones, aprendizaje, vínculos y propósito se fortalecen juntos.', Icon: Brain },
  { title: 'Aprendizaje significativo', description: 'Cada conversación se conecta con la vida real y termina en una acción pequeña que la persona puede aplicar hoy.', Icon: BookOpen },
  { title: 'Vínculos que fortalecen', description: 'El cuidado se construye en relación: el modelo fortalece a la persona y a quienes la sostienen.', Icon: Users },
  { title: 'Innovación con propósito', description: 'No es innovar por innovar: la tecnología y la creatividad existen para acercar el conocimiento a la vida cotidiana.', Icon: Lightbulb },
];

export function MentorsSection() {
  return (
    <div className="relative bg-white">
      {/* ═══════════ HERO ═══════════ */}
      <section className="js-mentors-hero relative overflow-hidden bg-[#F0F7FF] px-5 py-28 sm:px-8">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="js-mentors-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
            NeuroFamilia
          </p>
          <h1 className="js-mentors-title mt-4 text-4xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
            NeuroMentores
          </h1>
          <p className="js-mentors-hero-sub mt-5 text-xl font-bold text-[#0B3B82] sm:text-2xl">
            Las ocho voces que dan vida al Modelo NeuroFamilia.
          </p>
          <p className="js-mentors-subtitle mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#0B3B82]/70">
            Cada NeuroMentor traduce una dimensión del modelo en experiencias, herramientas y orientación para fortalecer el desarrollo humano.
          </p>
        </div>
      </section>

      {/* ═══════════ ¿POR QUÉ NACEN? ═══════════ */}
      <section className="js-mentors-why relative overflow-hidden bg-[#F0F7FF] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">Propósito</p>
          <h2 className="js-mentors-why-title mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
            El origen de NeuroMentores
          </h2>
          <p className="js-mentors-why-body mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#072A5C]">
            El desarrollo humano se juega en conversaciones: una pregunta sobre el futuro, una emoción que aún no tiene nombre, un vínculo que se fortalece o se quiebra. Cuando esas conversaciones no encuentran espacio, se enfrentan en soledad las cosas que, compartidas, pesan menos. NeuroMentores nace para que cada dimensión del ser humano tenga una voz.
          </p>
          <div className="js-mentors-why-cards mt-10 grid gap-5 sm:grid-cols-3">
            {ORIGIN_CARDS.map((card) => (
              <div key={card.title} className="rounded-2xl border border-[#0066CC]/10 bg-white p-6 sm:p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0066CC]/8 text-[#0066CC]">
                  <card.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-[#0B3B82]">{card.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-[#072A5C]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ GALERÍA ═══════════ */}
      <section className="js-mentors-gallery relative overflow-hidden bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">Las voces</p>
            <h2 className="js-mentors-gallery-title mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
              Cada dimensión, una voz
            </h2>
            <p className="js-mentors-gallery-body mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#072A5C]">
              Ocho voces con mirada propia, listas para conversar, orientar y proponer acciones concretas. Cada una se conecta con más de una dimensión según el contexto.
            </p>
          </div>

          <ul className="js-mentors-grid mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {MENTOR_NAMES.map((name) => {
              const identity = MENTOR_IDENTITY[name];
              const color = MENTOR_COLORS[name];
              const dim = MENTOR_DIMENSIONS[name];
              const Icon = DIMENSION_ICONS[dim.icon];
              return (
                <li
                  key={name}
                  id={name.toLowerCase()}
                  className="js-mentor h-full scroll-mt-32"
                >
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
            Voces inspiradas en las dimensiones del Modelo NeuroFamilia; cada una se conecta con más de una dimensión según el contexto y la necesidad.
          </p>
        </div>
      </section>

      {/* ═══════════ PRINCIPIOS ═══════════ */}
      <section className="js-mentors-how relative overflow-hidden bg-[#F0F7FF] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">Lo que los define</p>
            <h2 className="js-mentors-how-title mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
              Principios de NeuroMentores
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#072A5C]">
              Cuatro convicciones orientan la manera en que estas voces hablan, escuchan y proponen.
            </p>
          </div>
          <div className="js-mentors-how-cards mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((principle) => (
              <div key={principle.title} className="rounded-2xl border border-[#0066CC]/10 bg-white p-6 text-center sm:p-7">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-[14px] bg-[#0066CC]/6 text-[#0066CC]">
                  <principle.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-extrabold text-[#0B3B82]">{principle.title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-[#072A5C]">{principle.description}</p>
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
            El Modelo NeuroFamilia nace en un territorio único: las islas Galápagos. La distancia, la diversidad cultural y las barreras de acceso convirtieron el archipiélago en un laboratorio de innovación social. Lo que funciona aquí — el apoyo cercano, la tecnología al servicio de las personas, el cuidado desde la comunidad — puede replicarse en cualquier contexto donde el desarrollo humano sea prioridad.
          </p>
        </div>
      </section>

      {/* ═══════════ CIERRE ═══════════ */}
      <section className="js-mentors-closing relative overflow-hidden bg-[#0B3B82] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">NeuroFamilia</p>
          <h2 className="js-mentors-closing-title mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Ocho voces, una conversación
          </h2>
          <p className="js-mentors-closing-body mx-auto mt-5 max-w-xl text-[15px] leading-7 text-white/80">
            Cada dimensión del modelo tiene ahora una voz con mirada propia, lista para conversar con cada familia y proponer pasos concretos.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/teoria-de-cambio"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: '#00B8D9', color: '#0B3B82', border: '1.5px solid #00B8D9', boxShadow: '0 8px 24px rgba(0,184,217,0.35)' }}
            >
              Explorar la Teoría de Cambio
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/plataforma"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 hover:bg-white/10"
              style={{ color: '#FFFFFF', border: '1.5px solid rgba(255,255,255,0.35)' }}
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
