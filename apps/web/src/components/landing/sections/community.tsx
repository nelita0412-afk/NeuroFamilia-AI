import { CommunityOrbit } from '../svg/community-orbit';

export function CommunitySection() {
  return (
    <section
      id="comunidad"
      className="js-community relative flex min-h-screen items-center overflow-hidden bg-[#0A4E9B]"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <CommunityOrbit className="js-community-orbit mx-auto w-full max-w-xl" />
        </div>

        <div className="order-1 text-center lg:order-2 lg:text-left">
          <p className="js-community-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#29C7D8]">
            Comunidad
          </p>
          <h2 className="js-community-title mt-4 text-3xl font-extrabold leading-tight text-[#F8FBFF] sm:text-5xl">
            Familias, niños, adolescentes y profesionales.
          </h2>
          <p className="js-community-subtitle mt-4 text-lg text-[#F8FBFF]/85">
            Un mismo propósito. Crecer juntos.
          </p>
          <p className="js-community-body mt-6 max-w-md text-base leading-7 text-[#F8FBFF]/70">
            Todos conectados dentro del mismo ecosistema: cada persona aporta su historia y recibe
            acompañamiento de su comunidad.
          </p>
        </div>
      </div>
    </section>
  );
}