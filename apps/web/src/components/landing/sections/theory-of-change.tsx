import { BookOpen, Cpu, Crown, Heart, Link, Shield, Sparkles, Target, Users } from 'lucide-react';

const DIMENSIONS = [
  { name: 'Propósito de Vida', icon: Target, description: 'Construir un proyecto de vida con sentido, dirección y metas personales.' },
  { name: 'Bienestar Emocional', icon: Heart, description: 'Reconocer, comprender y gestionar las emociones para fortalecer la salud mental.' },
  { name: 'Aprendizaje Permanente', icon: BookOpen, description: 'Desarrollar conocimientos, habilidades y capacidades para toda la vida.' },
  { name: 'Resiliencia', icon: Shield, description: 'Afrontar desafíos y transformarlos en oportunidades de crecimiento.' },
  { name: 'Vínculos y Familia', icon: Users, description: 'Fortalecer relaciones de cuidado, apoyo mutuo y pertenencia.' },
  { name: 'Liderazgo y Participación', icon: Crown, description: 'Impulsar la capacidad de influir positivamente y generar cambios en la comunidad.' },
  { name: 'Creatividad e Innovación', icon: Sparkles, description: 'Imaginar nuevas respuestas y construir soluciones frente a los desafíos del entorno.' },
  { name: 'Transformación Digital', icon: Cpu, description: 'Integrar soluciones digitales que fortalezcan el acompañamiento, la prevención y el acceso a servicios.' },
];

const RUTA = [
  { title: 'Identificar', detail: 'Detectamos necesidades y riesgos a tiempo.' },
  { title: 'Acompañar', detail: 'NeuroMentores y Primeros Auxilios Psicológicos cercanos.' },
  { title: 'Fortalecer', detail: 'Desarrollamos las 8 dimensiones del ser humano.' },
  { title: 'Articular', detail: 'Conectamos actores, saberes y tecnología.' },
  { title: 'Transformar', detail: 'Construimos bienestar y cambio sostenible.' },
];

const RESULTADOS = [
  { level: 'Personas', detail: 'Autonomía y bienestar integral.' },
  { level: 'Familias', detail: 'Vínculos sanos y cuidado mutuo.' },
  { level: 'Comunidad', detail: 'Redes de apoyo que permanecen.' },
  { level: 'Sistemas', detail: 'Servicios de salud mental integrados.' },
  { level: 'Territorio', detail: 'Modelo nacido en Galápagos, replicable.' },
];

function SceneHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">{kicker}</p>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">{title}</h2>
    </div>
  );
}

export function TheoryOfChangeSection() {
  return (
    <div className="relative bg-[#F0F7FF]">
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">Teoría de Cambio</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">Un modelo que nace del territorio y se expande</h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#0B3B82]/70">El cambio comienza en la persona y se expande hacia las familias, las comunidades, los sistemas y el territorio.</p>
        </div>

        <section className="mt-20">
          <SceneHead kicker="Contexto" title="Desafío territorial de Galápagos" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-7 text-[#072A5C]">En Galápagos, el acceso a salud mental, neurodesarrollo y acompañamiento familiar enfrenta barreras geográficas, estigma y servicios desconectados del territorio.</p>
          <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] font-medium text-[#0B3B82]">
            {['Brechas de acceso', 'Estigma y silencio', 'Apoyo desconectado'].map(t => <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#00B8D9]" />{t}</li>)}
          </ul>
        </section>

        <section className="mt-20">
          <SceneHead kicker="Nuestra respuesta" title="Modelo NeuroFamilia" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-7 text-[#072A5C]">Un modelo integral que articula salud mental, desarrollo humano, innovación social y tecnología desde el territorio, no desde el escritorio.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-[13px] font-semibold text-[#0066CC]">
            {['Salud mental', 'Desarrollo humano', 'Innovación social', 'Tecnología'].map((p, i) => (
              <span key={p} className="rounded-full border border-[#0066CC]/25 px-4 py-1.5">{p}</span>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SceneHead kicker="Marco conceptual" title="Las 8 dimensiones del Modelo NeuroFamilia" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-[14px] leading-6 text-[#0B3B82]/65">Un marco integral para fortalecer el desarrollo humano, la salud mental y la innovación social desde Galápagos.</p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DIMENSIONS.map(d => (
              <li key={d.name} className="rounded-2xl border border-[#0066CC]/10 bg-white p-6 sm:p-7 transition-shadow hover:shadow-[0_12px_32px_rgba(11,59,130,0.1)]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0066CC]/8 text-[#0066CC]"><d.icon className="h-6 w-6" /></div>
                <h3 className="mt-4 text-lg font-extrabold text-[#0B3B82]">{d.name}</h3>
                <p className="mt-2 text-[13px] leading-5 text-[#072A5C]">{d.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <SceneHead kicker="Ruta de transformación" title="De la necesidad al cambio sostenible" />
          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
            {RUTA.map((step, i) => (
              <div key={step.title} className="flex-1 px-2 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border-2 border-[#0066CC]/30 bg-white text-lg font-extrabold text-[#0B3B82]">{i + 1}</div>
                <h3 className="mt-3 text-base font-extrabold text-[#0B3B82]">{step.title}</h3>
                <p className="mx-auto mt-1 max-w-[180px] text-[12px] leading-5 text-[#072A5C]">{step.detail}</p>
                {i < RUTA.length - 1 && <div className="flex items-center justify-center md:px-1"><span className="text-[#00B8D9]">→</span></div>}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SceneHead kicker="Resultados esperados" title="Impacto en cinco niveles" />
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[#0066CC]/10 bg-[#0066CC]/10 sm:grid-cols-3 lg:grid-cols-5">
            {RESULTADOS.map(r => (
              <div key={r.level} className="bg-[#F0F7FF] p-6 text-center">
                <span className="mx-auto block h-2 w-2 rounded-full bg-[#00B8D9]" />
                <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-[#0066CC]">{r.level}</h3>
                <p className="mx-auto mt-2 max-w-[160px] text-[13px] leading-5 text-[#072A5C]">{r.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}