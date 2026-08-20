import { Microscope, Cpu, HeartHandshake, Shield } from 'lucide-react';

const PILLARS = [
  {
    icon: Microscope,
    title: 'Ciencia',
    description: 'Evidencia rigurosa que guía cada decisión.',
    color: '#29C7D8',
    gradient: 'from-[#29C7D8] to-[#1476C6]',
  },
  {
    icon: Cpu,
    title: 'Tecnología',
    description: 'IA al servicio del desarrollo humano.',
    color: '#1476C6',
    gradient: 'from-[#1476C6] to-[#0A4E9B]',
  },
  {
    icon: HeartHandshake,
    title: 'Desarrollo Humano',
    description: 'Acompañamiento integral en cada etapa.',
    color: '#29C7D8',
    gradient: 'from-[#29C7D8] to-[#1476C6]',
  },
  {
    icon: Shield,
    title: 'Confianza',
    description: 'Seguridad y ética en cada interacción.',
    color: '#0A4E9B',
    gradient: 'from-[#0A4E9B] to-[#1476C6]',
  },
];

export function FourPillars({ className = '' }: { className?: string }) {
  return (
    <div className={`js-four-pillars grid grid-cols-2 gap-4 sm:grid-cols-4 ${className}`}>
      {PILLARS.map((pillar, i) => (
        <article
          key={pillar.title}
          className={`js-pillar js-pillar-${i + 1} relative group rounded-2xl p-5 bg-white/10 ring-1 ring-white/15 backdrop-blur transition-all duration-400 hover:bg-white/15 hover:ring-[29C7D8]/40 hover:-translate-y-1`}
          style={{
            animationDelay: `${i * 0.12}s`,
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(135deg, ${pillar.gradient})` }}
          />
          <div className="relative z-10">
            <div
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{ background: `linear-gradient(135deg, ${pillar.gradient})` }}
            >
              <pillar.icon className="h-6 w-6 text-[#F8FBFF]" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-extrabold text-[#F8FBFF] mb-2">{pillar.title}</h3>
            <p className="text-sm leading-6 text-[#F8FBFF]/75">{pillar.description}</p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(90deg, ${pillar.gradient})` }}
          />
        </article>
      ))}
    </div>
  );
}