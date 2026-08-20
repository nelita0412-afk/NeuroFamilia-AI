import Image from 'next/image';
import { ArchipelagoMap, ISLANDS } from '../svg/archipelago-map';

export function ArchipelagoSection() {
  return (
    <section
      id="archipielago"
      className="js-archipelago relative flex min-h-screen items-center overflow-hidden bg-[#0A4E9B]"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
        <div className="mb-8 text-center">
          <p className="js-arch-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#29C7D8]">
            El Archipiélago NeuroFamilia
          </p>
          <h2 className="js-arch-title mt-4 text-3xl font-extrabold leading-tight text-[#F8FBFF] sm:text-5xl">
            Ocho islas. Un solo océano.
          </h2>
        </div>

        <div className="js-arch-camera relative">
          <div className="js-arch-turtle-wrap pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 opacity-0">
            <div
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#29C7D8]/30 blur-3xl"
              aria-hidden="true"
            />
            <Image
              src="/images/logo/logo.png"
              alt="Tortuga NeuroFamilia emerge del océano"
              width={300}
              height={258}
              loading="lazy"
              className="js-arch-turtle relative drop-shadow-[0_20px_40px_rgba(2,32,76,0.6)]"
            />
          </div>

          <ArchipelagoMap className="js-arch-map mx-auto w-full max-w-5xl" />
        </div>

        <ul className="js-arch-islands-list mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {ISLANDS.map((isl) => (
            <li
              key={isl.id}
              className="js-arch-chip rounded-2xl bg-white/10 px-4 py-3 text-center ring-1 ring-white/15 backdrop-blur"
            >
              <p className="text-sm font-extrabold text-[#F8FBFF]">{isl.label}</p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#29C7D8]">
                Con {isl.mentor}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}