'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio', section: 'inicio' },
  { label: 'Acerca de', href: '#proposito', section: 'proposito' },
  { label: 'Historia', href: '#impacto', section: 'impacto' },
  { label: 'Teoría de Cambio', href: '#dimensiones', section: 'dimensiones' },
  { label: 'NeuroMentores', href: '#mentores', section: 'mentores' },
  { label: 'Servicios', href: '#cta', section: 'cta' },
  { label: 'Plataforma', href: '#plataforma', section: 'plataforma' },
  { label: 'Recursos', href: '#plataforma', section: 'plataforma' },
];

const LOCALES = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
] as const;

type Locale = (typeof LOCALES)[number]['code'];

export function LandingNavbar() {
  const [active, setActive] = useState('inicio');
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>('es');

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.section);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Menú principal"
      className="js-navbar sticky top-0 z-50 h-[88px] w-full border-b border-[#0B3B82]/5 bg-white shadow-[0_4px_24px_rgba(11,59,130,0.06)]"
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        {/* LOGO — dominante, sin texto repetido */}
        <Link href="/#inicio" className="flex shrink-0 items-center" aria-label="Inicio NeuroFamilia Galápagos">
          <Image
            src="/images/logo/logo.png"
            alt="Logo NeuroFamilia Galápagos"
            width={88}
            height={68}
            priority
            className="h-16 w-auto object-contain lg:h-[68px]"
          />
        </Link>

        {/* MENÚ PRINCIPAL — siempre visible en desktop */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.section;
            return (
              <li key={link.label} className="relative">
                <Link
                  href={link.href}
                  onClick={() => setActive(link.section)}
                  className={`relative whitespace-nowrap py-2 text-[15px] font-semibold transition-colors duration-300 ${
                    isActive ? 'text-[#0066CC]' : 'text-[#111827]'
                  } hover:text-[#0066CC]`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-[#0066CC] transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* SELECTOR DE IDIOMA — solo texto, sin banderas */}
        <div className="hidden items-center gap-1 rounded-full border border-[#0B3B82]/15 bg-[#F0F7FF] p-1 lg:flex" role="group" aria-label="Selector de idioma">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLocale(l.code)}
              aria-pressed={locale === l.code}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide transition-colors duration-300 ${
                locale === l.code
                  ? 'bg-[#0066CC] text-white'
                  : 'text-[#111827] hover:text-[#0066CC]'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* BOTÓN MENÚ MÓVIL — solo móvil y tablet (≤1024px) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menú"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#111827] transition-colors duration-300 hover:text-[#0066CC] lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* PANEL MÓVIL — solo dispositivos móviles y tablet (≤1024px) */}
      <div
        className={`lg:hidden ${
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white transition-all duration-300`}
      >
        <ul className="flex flex-col gap-1 border-t border-[#0B3B82]/5 px-5 py-4 sm:px-8">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.section;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => {
                    setActive(link.section);
                    setOpen(false);
                  }}
                  className={`block py-2.5 text-sm font-semibold transition-colors duration-300 ${
                    isActive ? 'text-[#0066CC]' : 'text-[#111827]'
                  } hover:text-[#0066CC]`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-3 flex items-center gap-1">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLocale(l.code)}
                aria-pressed={locale === l.code}
                className={`rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide transition-colors duration-300 ${
                  locale === l.code
                    ? 'bg-[#0066CC] text-white'
                    : 'text-[#111827] hover:text-[#0066CC]'
                }`}
              >
                {l.label}
              </button>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
}