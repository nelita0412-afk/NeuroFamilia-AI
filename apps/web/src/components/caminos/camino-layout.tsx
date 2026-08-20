import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type CaminoLayoutProps = {
  emoji: string;
  title: string;
  subtitle: string;
  intro: string;
  cards: Array<{ title: string; detail: string }>;
  ctaLabel: string;
  children?: ReactNode;
};

export function CaminoLayout({ emoji, title, subtitle, intro, cards, ctaLabel, children }: CaminoLayoutProps) {
  return (
    <main className="min-h-screen bg-[#0A4E9B] text-[#F8FBFF]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 pt-6 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Volver al inicio">
          <Image src="/images/logo/logo.png" alt="Logo NeuroFamilia" width={40} height={40} className="h-10 w-10 object-contain" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F8FBFF]/80">NeuroFamilia Galápagos</p>
        </Link>
        <Link
          href="/login"
          className="inline-flex items-center gap-2 rounded-full bg-[#F8FBFF] px-5 py-2.5 text-sm font-semibold text-[#0A4E9B] shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
        >
          Iniciar sesión
          <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 text-center sm:px-8">
        <span className="text-5xl" aria-hidden="true">
          {emoji}
        </span>
        <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#F8FBFF] sm:text-5xl">{title}</h1>
        <p className="mt-3 text-lg text-[#29C7D8]">{subtitle}</p>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#F8FBFF]/80">{intro}</p>
      </section>

      {children}

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur transition-transform duration-200 hover:-translate-y-1"
            >
              <h3 className="text-lg font-extrabold text-[#F8FBFF]">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#F8FBFF]/75">{card.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full bg-[#29C7D8] px-8 py-3.5 text-sm font-bold text-[#0A4E9B] shadow-[0_18px_44px_rgba(41,199,216,0.4)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/" className="text-sm font-semibold text-[#F8FBFF]/70 underline-offset-4 hover:underline">
            Volver a la experiencia NeuroFamilia
          </Link>
        </div>
      </section>
    </main>
  );
}