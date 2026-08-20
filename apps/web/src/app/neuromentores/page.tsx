import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/landing-page';
import { LandingNavbar } from '@/components/landing/navbar';
import { MentorsSection } from '@/components/landing/sections/mentors';
import { LandingFooter } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'NeuroMentores · NeuroFamilia Galápagos',
  description:
    'Ocho guías con personalidad, metodología y una mirada propia sobre el ser humano. Acompañantes vivos del crecimiento.',
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