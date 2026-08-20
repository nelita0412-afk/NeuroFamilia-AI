import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/landing-page';
import { LandingNavbar } from '@/components/landing/navbar';
import { SectionPlaceholder } from '@/components/landing/section-placeholder';
import { LandingFooter } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'Servicios · NeuroFamilia Galápagos',
  description:
    'Servicios de NeuroFamilia Galápagos para niños, adolescentes, familias, profesionales e instituciones.',
};

export default function ServiciosPage() {
  return (
    <LandingPage page="servicios">
      <LandingNavbar />
      <SectionPlaceholder title="Servicios" />
      <LandingFooter />
    </LandingPage>
  );
}