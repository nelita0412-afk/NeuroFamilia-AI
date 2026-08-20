import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/landing-page';
import { LandingNavbar } from '@/components/landing/navbar';
import { HeroSection } from '@/components/landing/sections/hero';
import { ImpactReachedSection } from '@/components/landing/sections/impact-reached';
import { LandingFooter } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'NeuroFamilia Galápagos — Desarrollo humano y bienestar comunitario',
  description:
    'Plataforma digital para el desarrollo humano, la salud mental y el bienestar comunitario en Galápagos.',
};

export default function Home() {
  return (
    <LandingPage page="inicio">
      <LandingNavbar />
      <HeroSection />
      <ImpactReachedSection />
      <LandingFooter />
    </LandingPage>
  );
}