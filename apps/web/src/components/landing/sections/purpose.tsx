import { Heart, Microscope, Users, Cpu, ShieldCheck } from 'lucide-react';

const PILLARS = [
  { icon: Heart, label: 'Familias' },
  { icon: Microscope, label: 'Ciencia' },
  { icon: Users, label: 'Comunidad' },
  { icon: Cpu, label: 'Tecnología' },
  { icon: ShieldCheck, label: 'Confianza' },
];

export function PurposeSection() {
  return (
    <section
      id="proposito"
      className="js-purpose relative overflow-hidden bg-white py-28"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="js-purpose-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
          NeuroFamilia Galápagos
        </p>

        <h2 className="js-purpose-title mt-5 text-4xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
          Cada persona tiene un{' '}
          <span className="text-[#00B8D9]">potencial extraordinario</span>
        </h2>

        <p className="js-purpose-body mx-auto mt-6 max-w-2xl text-base leading-8 text-[#0B3B82]/75 sm:text-lg">
          Ciencia, tecnología y desarrollo humano para acompañar a niños, adolescentes, familias,
          profesionales e instituciones.
        </p>

        <a
          href="#dimensiones"
          className="js-purpose-cta mt-10 inline-flex items-center gap-2 border-b-2 border-[#0066CC] pb-1 text-sm font-bold uppercase tracking-[0.2em] text-[#0066CC] transition-colors duration-200 hover:border-[#00B8D9] hover:text-[#00B8D9]"
        >
          Conócenos
        </a>

        {/* Cinco pilares del ecosistema */}
        <ul className="js-purpose-pillars mt-14 flex flex-wrap items-center justify-center gap-3">
          {PILLARS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-full bg-[#F0F7FF] px-5 py-2.5 text-sm font-semibold text-[#0B3B82] ring-1 ring-[#0066CC]/15 transition-colors duration-200 hover:bg-[#00B8D9]/10"
            >
              <Icon className="h-4 w-4 text-[#0066CC]" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}