'use client';

import dynamic from 'next/dynamic';

const LandingJourney = dynamic(() => import('./landing-journey').then((m) => m.LandingJourney), {
  ssr: false,
  loading: () => (
    <main className="flex min-h-screen items-center justify-center bg-[#0A4E9B]">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#29C7D8]">NeuroFamilia</p>
    </main>
  ),
});

export function LandingLoader() {
  return <LandingJourney />;
}