import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/landing-page';
import { LandingNavbar } from '@/components/landing/navbar';
import { HeroSection } from '@/components/landing/sections/hero';
import { MentorsPreviewSection } from '@/components/landing/sections/mentors-preview';
import { TerritorySection } from '@/components/landing/sections/territory';
import { HubSection } from '@/components/landing/sections/hub';
import { ImpactReachedSection } from '@/components/landing/sections/impact-reached';
import { CtaFinaleSection } from '@/components/landing/sections/cta-finale';
import { LandingFooter } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'NeuroFamilia Galápagos — Seguimiento, mentores y recursos para crecer',
  description:
    'Sigue el avance de tu hijo, conversa con NeuroMentores y encuentra recursos y servicios para cada etapa. Nacido en Galápagos.',
};

export default function Home() {
  return (
    <LandingPage page="inicio">
      <LandingNavbar />
      <HeroSection />
      <MentorsPreviewSection />
      <TerritorySection />
      <HubSection />
      <ImpactReachedSection />
      <CtaFinaleSection />
      <LandingFooter />
    </LandingPage>
  );
}