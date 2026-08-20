import { NeuralShell } from '../svg/neural-shell';

export function StoriesSection() {
  return (
    <section
      id="historias"
      className="js-stories relative flex min-h-screen items-center overflow-hidden bg-[#0A4E9B]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#1476C6]/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#29C7D8]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div className="js-stories-neural relative mx-auto w-full max-w-md">
          <NeuralShell className="w-full" />
        </div>

        <div className="text-center lg:text-left">
          <p className="js-stories-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#29C7D8]">
            Cada historia importa
          </p>
          <h2 className="js-stories-title mt-4 text-3xl font-extrabold leading-tight text-[#F8FBFF] sm:text-5xl">
            Cada niño tiene una historia.
          </h2>
          <p className="js-stories-subtitle mt-4 text-lg text-[#F8FBFF]/80">
            Cada familia tiene un camino.
          </p>
          <p className="js-stories-body mt-6 max-w-md text-base leading-7 text-[#F8FBFF]/70">
            El crecimiento no ocurre en una sola dirección. Ocurre en muchas dimensiones que se
            conectan entre sí, como las neuronas de un cerebro en formación.
          </p>
        </div>
      </div>
    </section>
  );
}