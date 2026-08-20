export function PurposeSection() {
  return (
    <section
      id="proposito"
      className="js-purpose relative overflow-hidden bg-[#F8FBFF] py-28 text-[#0A4E9B]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-56 w-[46rem] -translate-x-1/2 rounded-full bg-[#29C7D8]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="js-purpose-line mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#29C7D8] to-[#1476C6]" />
        <h2 className="js-purpose-title text-3xl font-extrabold leading-tight sm:text-5xl">
          No vemos diagnósticos.
          <br />
          <span className="text-[#1476C6]">Vemos posibilidades.</span>
        </h2>
        <p className="js-purpose-body mx-auto mt-6 max-w-2xl text-base leading-8 text-[#0A4E9B]/75 sm:text-lg">
          Cada niño tiene una historia única. NeuroFamilia acompaña su crecimiento desde una
          mirada integral, humana y comunitaria.
        </p>
      </div>
    </section>
  );
}