import Image from 'next/image';
import Link from 'next/link';

const PATHS = [
  { label: 'Soy Familia', href: '/caminos/familia' },
  { label: 'Soy Adolescente', href: '/caminos/adolescente' },
  { label: 'Soy Profesional', href: '/caminos/profesional' },
  { label: 'Soy Institución', href: '/caminos/institucion' },
];

export function LandingFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#081F44] py-12 text-[#F8FBFF]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col items-center gap-3 lg:items-start">
          <Link href="/" className="flex items-center gap-3" aria-label="NeuroFamilia Galápagos">
            <Image src="/images/logo/logo.png" alt="Logo NeuroFamilia" width={44} height={44} className="h-11 w-11 object-contain" />
            <div>
              <p className="text-sm font-extrabold">NeuroFamilia Galápagos</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#29C7D8]">
                Ecosistema de crecimiento humano
              </p>
            </div>
          </Link>
          <p className="max-w-xs text-center text-xs leading-5 text-[#F8FBFF]/60 lg:text-left">
            Cuidamos procesos humanos con calma, ciencia y comunidad.
          </p>
        </div>

        <nav aria-label="Caminos" className="grid grid-cols-2 gap-x-10 gap-y-2 text-center lg:text-left">
          {PATHS.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="text-sm text-[#F8FBFF]/75 transition-colors duration-200 hover:text-[#29C7D8]"
            >
              {path.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-2 lg:items-end">
          <Link href="/login" className="text-sm font-bold text-[#29C7D8] transition-colors duration-200 hover:text-[#F8FBFF]">
            Iniciar sesión
          </Link>
          <p className="text-xs text-[#F8FBFF]/50">© {new Date().getFullYear()} NeuroFamilia Galápagos</p>
        </div>
      </div>
    </footer>
  );
}