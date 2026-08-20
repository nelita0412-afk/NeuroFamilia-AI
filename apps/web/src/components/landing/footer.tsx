import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
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

function LinkedinIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const EXPLORE_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Acerca de', href: '#proposito' },
  { label: 'Historia', href: '#impacto' },
  { label: 'Teoría de Cambio', href: '#dimensiones' },
  { label: 'NeuroMentores', href: '#mentores' },
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Recursos', href: '#plataforma' },
];

const PLATFORM_LINKS = [
  { label: 'Familias', href: '/caminos/familia' },
  { label: 'Adolescentes', href: '/caminos/adolescente' },
  { label: 'Profesionales', href: '/caminos/profesional' },
  { label: 'Instituciones', href: '/caminos/institucion' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
  { label: 'YouTube', href: 'https://youtube.com', icon: YoutubeIcon },
];

export function LandingFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0D47A1] via-[#0B3B82] to-[#0097B2] text-white">
      {/* MARCA DE AGUA — tortuga NeuroFamilia muy sutil */}
      <HeroTurtle
        className="pointer-events-none absolute -right-24 -top-16 h-[560px] w-auto opacity-5"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr_1fr] lg:gap-10">
          {/* COLUMNA 1 — IDENTIDAD */}
          <div className="flex flex-col items-start gap-5">
            <Link href="/#inicio" aria-label="Inicio NeuroFamilia Galápagos">
              <Image
                src="/images/logo/logo.png"
                alt="Logo NeuroFamilia Galápagos"
                width={132}
                height={102}
                className="h-24 w-auto rounded-xl bg-white object-contain p-1.5 shadow-[0_16px_40px_rgba(0,10,30,0.35)]"
              />
            </Link>
            <p className="text-sm leading-7 text-white/80">
              NeuroFamilia es una iniciativa de la Fundación Centro Integral de Bienestar e
              Innovación Social que impulsa el desarrollo humano, la salud mental, la innovación
              social y el fortalecimiento de familias, adolescentes, profesionales e instituciones
              en Galápagos.
            </p>
            <p className="flex items-center gap-2 text-sm font-medium text-[#00B8D9]">
              <MapPin className="h-4 w-4" />
              San Cristóbal, Galápagos – Ecuador
            </p>
          </div>

          {/* COLUMNA 2 — EXPLORAR */}
          <nav aria-label="Explorar">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00B8D9]">
              Explorar
            </p>
            <ul className="mt-6 space-y-3.5">
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

          {/* COLUMNA 3 — PLATAFORMA */}
          <nav aria-label="Plataforma">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00B8D9]">
              Plataforma
            </p>
            <ul className="mt-6 space-y-3.5">
              {PLATFORM_LINKS.map((link) => (
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

          {/* COLUMNA 4 — CONTACTO */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00B8D9]">
              Contacto
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="mailto:neurofamiliagps@gmail.com"
                  className="group flex items-center gap-3 text-sm text-white/75 transition-colors duration-300 hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#00B8D9] transition-transform duration-300 group-hover:scale-110" />
                  neurofamiliagps@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+593980406055"
                  className="group flex items-center gap-3 text-sm text-white/75 transition-colors duration-300 hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#00B8D9] transition-transform duration-300 group-hover:scale-110" />
                  +593 98 040 6055
                </a>
              </li>
            </ul>
            <a
              href="https://wa.me/593980406055"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fb959]"
            >
              <MessageCircle className="h-4 w-4" />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* COLUMNA 5 — REDES SOCIALES */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00B8D9]">
              Síguenos
            </p>
            <ul className="mt-6 space-y-3.5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-sm text-white/75 transition-colors duration-300 hover:text-white"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition-all duration-300 group-hover:bg-[#0066CC] group-hover:ring-[#0066CC]">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SUBFOOTER */}
        <div className="mt-16 border-t border-white/15 pt-8">
          <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:justify-between lg:text-left">
            <p className="text-xs text-white/60">© 2026 NeuroFamilia Galápagos.</p>
            <p className="text-xs text-white/60">
              Desarrollo humano, ciencia y tecnología para transformar vidas.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs text-white/60 transition-colors duration-300 hover:text-[#00B8D9]"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terms"
                className="text-xs text-white/60 transition-colors duration-300 hover:text-[#00B8D9]"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}