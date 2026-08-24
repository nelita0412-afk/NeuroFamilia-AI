import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/landing-page';
import { LandingNavbar } from '@/components/landing/navbar';
import { HistorySection } from '@/components/landing/sections/history';
import { ImpactSection } from '@/components/landing/sections/impact';
import { LandingFooter } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'Nuestra Historia · NeuroFamilia Galápagos',
  description:
    'Un camino nacido en Galápagos: de la identificación de una necesidad a un modelo de alcance internacional.',
};

export default function HistoriaPage() {
  return (
    <LandingPage page="historia">
      <LandingNavbar />
      <HistorySection />
      <ImpactSection />
      <LandingFooter />
    </LandingPage>
  );
}