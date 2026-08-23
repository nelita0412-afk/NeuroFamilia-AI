import {
  GraduationCap,
  Handshake,
  HeartPulse,
  Scale,
  Users,
} from 'lucide-react';

/* ── Alineación institucional con la Agenda 2030 ───────────── */

const ODS = [
  { numero: 3, titulo: 'Salud y Bienestar', Icono: HeartPulse },
  { numero: 4, titulo: 'Educación de Calidad', Icono: GraduationCap },
  { numero: 10, titulo: 'Reducción de las Desigualdades', Icono: Users },
  { numero: 16, titulo: 'Paz, Justicia e Instituciones Sólidas', Icono: Scale },
  { numero: 17, titulo: 'Alianzas para Lograr los Objetivos', Icono: Handshake },
];

export function OdsSection() {
  return (
    <section
      id="ods"
      className="js-ods relative overflow-hidden bg-[#F0F7FF] py-14 sm:py-16"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="js-ods-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
            Agenda 2030 · Nuestro Impacto
          </p>
          <h2 className="js-ods-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
            NeuroFamilia y los Objetivos de Desarrollo Sostenible
          </h2>
          <p className="js-ods-subtitle mx-auto mt-5 max-w-2xl text-base leading-7 text-[#0B3B82]/75 sm:text-lg">
            Alineamos innovación social, salud mental y desarrollo humano con los desafíos
            globales y las necesidades de las comunidades insulares de Galápagos.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {ODS.map(({ numero, titulo, Icono }) => (
            <article
              key={numero}
              className="js-ods-card group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-[0_10px_30px_rgba(11,59,130,0.06)] ring-1 ring-[#0066CC]/10 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(11,59,130,0.13)]"
            >
              <span className="rounded-full bg-[#F0F7FF] px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-[#0066CC] ring-1 ring-[#0066CC]/15">
                ODS {numero}
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#0B3B82] to-[#0066CC] text-white shadow-[0_8px_20px_rgba(11,59,130,0.22)]">
                <Icono className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-sm font-bold leading-snug text-[#0B3B82]">{titulo}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
