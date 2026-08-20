const DIMENSIONS = [
  { num: '01', dim: 'Propósito', detail: 'Definir un norte personal' },
  { num: '02', dim: 'Emociones', detail: 'Reconocer y regular lo que sentimos' },
  { num: '03', dim: 'Aprendizaje', detail: 'Curiosidad que se vuelve conocimiento' },
  { num: '04', dim: 'Resiliencia', detail: 'Recuperarse y seguir avanzando' },
  { num: '05', dim: 'Familia', detail: 'Crecimiento en comunidad' },
  { num: '06', dim: 'Liderazgo', detail: 'Guiar con hábitos y cuidado' },
  { num: '07', dim: 'Creatividad', detail: 'Imaginar nuevas respuestas' },
  { num: '08', dim: 'Tecnología', detail: 'Innovar desde lo humano' },
];

export function DimensionsSection() {
  return (
    <section
      id="dimensiones"
      className="js-dimensions relative overflow-hidden bg-white py-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="js-dimensions-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
            Ruta de desarrollo
          </p>
          <h2 className="js-dimensions-title mt-4 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-5xl">
            Ocho dimensiones del desarrollo humano
          </h2>
        </div>

        <ul className="js-dimensions-grid mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIMENSIONS.map((item) => (
            <li
              key={item.num}
              className="js-dimension-card group relative overflow-hidden rounded-2xl border border-[#0066CC]/10 bg-[#F0F7FF] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,102,204,0.12)]"
            >
              <span className="text-4xl font-extrabold tracking-tight text-[#00B8D9]">
                {item.num}
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-[#0B3B82]">{item.dim}</h3>
              <p className="mt-1.5 text-sm leading-6 text-[#0B3B82]/70">{item.detail}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#0066CC] to-[#00B8D9] transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}