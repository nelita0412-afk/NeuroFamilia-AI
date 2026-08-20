import { ArchipelagoMap, ISLANDS } from '../svg/archipelago-map';

export function ArchipelagoSection() {
  return (
    <section
      id="archipielago"
      className="js-archipelago relative flex min-h-screen items-center overflow-hidden bg-[#0A4E9B]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#1476C6]/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
        <div className="mb-10 text-center">
          <p className="js-arch-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#29C7D8]">
            El Archipiélago NeuroFamilia
          </p>
          <h2 className="js-arch-title mt-4 text-3xl font-extrabold leading-tight text-[#F8FBFF] sm:text-5xl">
            Ocho dimensiones del desarrollo humano
          </h2>
        </div>

        <div className="js-arch-camera relative">
          <ArchipelagoMap className="js-arch-map mx-auto w-full max-w-5xl" />
        </div>

        <ul className="js-arch-islands-list mt-12 flex flex-wrap justify-center gap-3">
          {ISLANDS.map((isl) => (
            <li
              key={isl.id}
              className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-bold text-[#F8FBFF] ring-1 ring-[#29C7D8]/30 backdrop-blur transition-colors duration-200 hover:bg-[#29C7D8]/20"
            >
              {isl.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}