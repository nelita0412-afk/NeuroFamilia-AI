const JOURNEY: Array<{ dim: string; detail: string }> = [
  { dim: 'Propósito', detail: 'Definir un norte personal' },
  { dim: 'Emociones', detail: 'Reconocer y regular lo que sentimos' },
  { dim: 'Aprendizaje', detail: 'Curiosidad que se vuelve conocimiento' },
  { dim: 'Resiliencia', detail: 'Recuperarse y seguir avanzando' },
  { dim: 'Familia', detail: 'Crecimiento en comunidad' },
  { dim: 'Liderazgo', detail: 'Guiar con hábitos y cuidado' },
  { dim: 'Creatividad', detail: 'Imaginar nuevas respuestas' },
  { dim: 'Tecnología', detail: 'Innovar desde lo humano' },
];

export function GrowthSection() {
  return (
    <section
      id="crecimiento"
      className="js-growth relative overflow-hidden bg-gradient-to-b from-[#0A4E9B] to-[#1476C6] py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-[#29C7D8]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="js-growth-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#29C7D8]">
            Crecimiento
          </p>
          <h2 className="js-growth-title mt-4 text-3xl font-extrabold leading-tight text-[#F8FBFF] sm:text-5xl">
            No es un diagnóstico. Es un recorrido.
          </h2>
          <p className="js-growth-subtitle mx-auto mt-4 max-w-2xl text-base leading-7 text-[#F8FBFF]/75">
            Una persona avanza entre islas, y en cada una descubre una dimensión de sí misma. Las
            islas se iluminan a su paso.
          </p>
        </div>

        <div className="js-growth-track relative mt-16">
          <div className="pointer-events-none absolute inset-x-0 top-3 hidden h-0.5 bg-[#29C7D8]/30 sm:block" aria-hidden="true" />
          <div
            className="js-journey-dot pointer-events-none absolute left-0 top-3 z-10 hidden sm:block"
            aria-hidden="true"
          >
            <span className="block h-3.5 w-3.5 rounded-full bg-[#F8FBFF] shadow-[0_0_22px_rgba(41,199,216,1)]" />
          </div>

          <ol className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-8">
            {JOURNEY.map((step, i) => (
              <li key={step.dim} className={`js-journey-node js-journey-node-${i + 1} relative text-center`}>
                <span className="relative z-10 mx-auto block h-6 w-6 rounded-full bg-[#1476C6] ring-2 ring-[#29C7D8]/70" />
                <p className="js-journey-dim mt-4 text-sm font-extrabold text-[#F8FBFF]">{step.dim}</p>
                <p className="js-journey-detail mt-1 text-xs leading-5 text-[#F8FBFF]/65">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}