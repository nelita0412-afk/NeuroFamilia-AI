import { HeroTurtle } from '../svg/hero-turtle';

export function GuardianSection() {
  return (
    <section
      id="guardian"
      className="js-guardian relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#0A4E9B] to-[#1476C6]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full border border-[#29C7D8]/20" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-[#29C7D8]/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div className="js-guardian-turtle-wrap relative mx-auto w-full max-w-md">
          <div
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#29C7D8]/20 blur-3xl"
            aria-hidden="true"
          />
          <HeroTurtle className="js-guardian-turtle relative w-full drop-shadow-[0_28px_56px_rgba(2,32,76,0.6)]" />
        </div>

        <div className="text-center lg:text-left">
          <p className="js-guardian-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#29C7D8]">
            Hero, el guardián
          </p>
          <h2 className="js-guardian-title mt-4 text-3xl font-extrabold leading-tight text-[#F8FBFF] sm:text-5xl">
            Hero conecta todo el ecosistema.
          </h2>
          <p className="js-guardian-body mx-auto mt-6 max-w-lg text-base leading-8 text-[#F8FBFF]/80 sm:text-lg lg:mx-0">
            Hero es el guardián del archipiélago. Conecta caminos, familias, mentores y comunidad
            con una sola misión: que cada potencial encuentre su rumbo.
          </p>
        </div>
      </div>
    </section>
  );
}