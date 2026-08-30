import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/landing-page';
import { LandingNavbar } from '@/components/landing/navbar';
import { HeroSection } from '@/components/landing/sections/hero';
import { HubSection } from '@/components/landing/sections/hub';
import { CaminosSection } from '@/components/landing/sections/caminos';
import { ImpactReachedSection } from '@/components/landing/sections/impact-reached';
import { MentorsPreviewSection } from '@/components/landing/sections/mentors-preview';
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
      <HubSection />
      <CaminosSection />
      <ImpactReachedSection />
      <MentorsPreviewSection />
      <CtaFinaleSection />
      <LandingFooter />
    </LandingPage>
  );
}