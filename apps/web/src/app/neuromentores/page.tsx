import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/landing-page';
import { LandingNavbar } from '@/components/landing/navbar';
import { MentorsSection } from '@/components/landing/sections/mentors';
import { LandingFooter } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'NeuroMentores · NeuroFamilia Galápagos',
  description:
    'NeuroMentores: acompañamiento con identidad para personas, familias y comunidades desde Galápagos.',
};

export default function NeuroMentoresPage() {
  return (
    <LandingPage page="neuromentores">
      <LandingNavbar />
      <MentorsSection />
      <LandingFooter />
    </LandingPage>
  );
}