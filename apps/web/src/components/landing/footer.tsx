import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { HeroTurtle } from './svg/hero-turtle';

function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const EXPLORE_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Acerca de', href: '/acerca' },
  { label: 'Historia', href: '/historia' },
  { label: 'Teoría de Cambio', href: '/teoria-de-cambio' },
];

const COMMUNITY_LINKS = [
  { label: 'Familias', href: '/caminos/familia' },
  { label: 'Adolescentes', href: '/caminos/adolescente' },
  { label: 'Profesionales', href: '/caminos/profesional' },
  { label: 'Instituciones', href: '/caminos/institucion' },
];

const RESOURCES_LINKS = [
  { label: 'NeuroMentores', href: '/neuromentores' },
  { label: 'Plataforma', href: '/plataforma' },
  { label: 'Servicios', href: '/servicios' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
];

export function LandingFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0F4AA2] via-[#0A66D4] to-[#12C7E5] text-white">
      {/* MARCA DE AGUA — tortuga NeuroFamilia */}
      <HeroTurtle
        className="pointer-events-none absolute -right-16 -top-8 h-[300px] w-auto opacity-[0.07]"
        aria-hidden="true"
      />

      {/* VELO INSTITUCIONAL — atenúa el brillo del gradiente tras el cierre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[360px] bg-gradient-to-b from-transparent via-[#0B3B82]/25 to-[#0B3B82]/45"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-4 pt-3 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr_1fr_1fr_1.1fr] lg:gap-5">
          {/* COLUMNA 1 — IDENTIDAD */}
          <div className="flex flex-col items-center gap-2.5 lg:items-start">
            <Link href="/" aria-label="Inicio NeuroFamilia Galápagos" className="lg:self-center">
              <Image
                src="/images/logo/logo-white.png"
                alt="Logo NeuroFamilia Galápagos"
                width={247}
                height={190}
                className="h-[120px] w-auto object-contain"
              />
            </Link>
            <p className="max-w-xs text-center text-sm leading-5 text-white/80 lg:text-left">
              Ciencia, tecnología y acompañamiento humano para el crecimiento de niños,
              adolescentes y familias.
            </p>

            {/* REDES SOCIALES — solo iconos, distribución horizontal */}
            <ul className="flex items-center gap-2.5 lg:self-center">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0A66D4] hover:ring-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 2 — EXPLORAR */}
          <nav aria-label="Explorar">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">Explorar</p>
            <ul className="mt-3.5 space-y-2">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* COLUMNA 3 — COMUNIDAD */}
          <nav aria-label="Comunidad">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">Comunidad</p>
            <ul className="mt-3.5 space-y-2">
              {COMMUNITY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* COLUMNA 4 — RECURSOS */}
          <nav aria-label="Recursos">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">Recursos</p>
            <ul className="mt-3.5 space-y-2">
              {RESOURCES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* COLUMNA 5 — CONTACTO */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">Contacto</p>
            <ul className="mt-3.5 space-y-2.5">
              <li>
                <a
                  href="mailto:neurofamiliagps@gmail.com"
                  className="group flex items-center gap-3 text-sm text-white/75 transition-colors duration-300 hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-white/60 transition-colors duration-300 group-hover:text-white" />
                  neurofamiliagps@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+593980406055"
                  className="group flex items-center gap-3 text-sm text-white/75 transition-colors duration-300 hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-white/60 transition-colors duration-300 group-hover:text-white" />
                  +593 98 040 6055
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CIERRE INSTITUCIONAL — estilo académico, sin cajas ni fondos */}
        <div className="mt-5 border-t border-white/15 pt-5 pb-4">
          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <p className="text-sm font-semibold tracking-wide text-white/90">NeuroFamilia © 2026</p>
            <p className="text-sm text-white/70">Impulsado por la</p>
            <p className="mt-1.5 max-w-2xl text-[22px] font-bold leading-tight text-white">
              Fundación Centro Integral de Bienestar e Innovación Social
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Bienestar • Innovación Social • Desarrollo Humano
            </p>
            <p className="mt-1 text-xs text-white/50">San Cristóbal, Galápagos – Ecuador</p>
          </div>
        </div>
      </div>
    </footer>
  );
}