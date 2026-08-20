import Image from 'next/image';

const DIMENSIONS = [
  'Propósito',
  'Emociones',
  'Aprendizaje',
  'Resiliencia',
  'Familia',
  'Liderazgo',
  'Creatividad',
  'Tecnología',
];

export function PotentialSection() {
  return (
    <section
      id="potencial"
      className="js-potential relative overflow-hidden bg-gradient-to-b from-[#1476C6] to-[#0A4E9B] py-36"
    >
      <Image
        src="/images/logo/logo.png"
        alt=""
        width={330}
        height={284}
        className="js-potential-turtle pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 opacity-0"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="js-potential-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#29C7D8]">
          Potencial humano
        </p>
        <h2 className="js-potential-title mt-4 text-3xl font-extrabold leading-tight text-[#F8FBFF] sm:text-5xl">
          No creemos en diagnósticos.
        </h2>
        <p className="js-potential-subtitle mt-3 text-lg text-[#F8FBFF]/85">Creemos en potencial.</p>

        <div className="js-potential-strip relative mt-16">
          <div className="pointer-events-none absolute inset-0 flex items-center" aria-hidden="true">
            <div className="js-potential-path h-0.5 w-full rounded-full bg-[#29C7D8]/40" />
          </div>
          <ul className="relative grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4">
            {DIMENSIONS.map((dim, i) => (
              <li key={dim} className={`js-potential-dot js-potential-dot-${i + 1} flex flex-col items-center gap-3`}>
                <span className="grid h-4 w-4 place-items-center">
                  <span className="h-3 w-3 rounded-full bg-[#29C7D8] shadow-[0_0_18px_rgba(41,199,216,0.9)]" />
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#F8FBFF]/90">
                  {dim}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="js-potential-body mx-auto mt-14 max-w-2xl text-base leading-7 text-[#F8FBFF]/75">
          Cada ola del océano se convierte en una ruta de crecimiento. Cada conexión que se enciende
          abre una dimensión nueva del ser humano.
        </p>
      </div>
    </section>
  );
}