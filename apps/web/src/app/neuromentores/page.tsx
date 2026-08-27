import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/landing-page';
import { LandingNavbar } from '@/components/landing/navbar';
import { MentorsSection } from '@/components/landing/sections/mentors';
import { LandingFooter } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'NeuroMentores · NeuroFamilia Galápagos',
  description:
    'Las ocho voces que dan vida al Modelo NeuroFamilia. Cada NeuroMentor traduce una dimensión del modelo en experiencias, herramientas y orientación para fortalecer el desarrollo humano.',
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