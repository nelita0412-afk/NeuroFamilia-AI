import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/landing-page';
import { LandingNavbar } from '@/components/landing/navbar';
import { DimensionsSection } from '@/components/landing/sections/dimensions';
import { LandingFooter } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'Teoría de Cambio · NeuroFamilia Galápagos',
  description:
    'Ocho dimensiones del desarrollo humano: propósito, emociones, aprendizaje, resiliencia, familia, liderazgo, creatividad y tecnología.',
};

export default function TeoriaDeCambioPage() {
  return (
    <LandingPage page="teoria-de-cambio">
      <LandingNavbar />
      <DimensionsSection />
      <LandingFooter />
    </LandingPage>
  );
}