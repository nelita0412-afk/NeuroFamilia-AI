import { CommunityOrbit } from '../svg/community-orbit';

export function CommunitySection() {
  return (
    <section
      id="comunidad"
      className="js-community relative flex min-h-screen items-center overflow-hidden bg-[#0A4E9B]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#1476C6]/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <CommunityOrbit className="js-community-orbit mx-auto w-full max-w-xl" />
        </div>

        <div className="order-1 text-center lg:order-2 lg:text-left">
          <p className="js-community-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#29C7D8]">
            Comunidad
          </p>
          <h2 className="js-community-title mt-4 text-3xl font-extrabold leading-tight text-[#F8FBFF] sm:text-5xl">
            Un ecosistema para crecer juntos
          </h2>
          <p className="js-community-body mt-6 max-w-md text-base leading-8 text-[#F8FBFF]/75">
            Familias, niños, adolescentes, profesionales e instituciones conectados dentro de la
            misma red de crecimiento humano.
          </p>
        </div>
      </div>
    </section>
  );
}