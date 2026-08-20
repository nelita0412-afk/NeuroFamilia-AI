'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Personas', href: '/dashboard/personas' },
  { label: 'Familias', href: '/dashboard/familias' },
  { label: 'Expedientes', href: '/dashboard/expedientes' },
  { label: 'Growth', href: '/dashboard/growth' },
];

type Props = {
  children: ReactNode;
  profileName?: string;
  activeLabel?: string;
};

export function NeurofamiliaMasterLayout({ children, profileName = 'Perfil activo', activeLabel }: Props) {
  const pathname = usePathname();

  return (
    <main className="relative min-h-screen bg-[#F7FBFD] text-[#003D78] [font-family:Figtree,ui-sans-serif,system-ui,-apple-system,Segoe_UI,Roboto,sans-serif]">
      <div className="mx-auto w-full max-w-[1180px] px-4 pb-16 pt-5 sm:px-6 sm:pt-6 lg:px-8">
        <header className="flex items-center justify-between rounded-3xl bg-white/90 px-4 py-3 shadow-[0_12px_36px_rgba(0,61,120,0.10)] backdrop-blur md:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo.jpg"
              alt="Logo NeuroFamilia"
              width={40}
              height={40}
              className="h-10 w-10 rounded-2xl object-cover shadow-[0_10px_24px_rgba(0,105,183,0.35)]"
            />
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#008CC7]">NeuroFamilia</p>
              <p className="text-sm font-semibold font-display">Galapagos</p>
            </div>
          </div>

          <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeLabel ? item.label === activeLabel : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive ? 'font-semibold text-[#0069B7]' : 'text-[#003D78] hover:text-[#008CC7]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="h-9 w-9 rounded-full bg-[#DDF5FC]" aria-hidden="true" />
            <div className="text-right">
              <p className="text-sm font-semibold">{profileName}</p>
              <p className="text-xs text-[#0069B7]">Perfil activo</p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Abrir menu de navegacion"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#DDF5FC] text-[#003D78] transition-colors duration-200 hover:bg-[#c5ecfa] md:hidden"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ☰
            </span>
          </button>
        </header>

        {children}
      </div>
    </main>
  );
}
