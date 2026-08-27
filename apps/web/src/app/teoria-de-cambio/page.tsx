import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/landing-page';
import { LandingNavbar } from '@/components/landing/navbar';
import { TheoryOfChangeSection } from '@/components/landing/sections/theory-of-change';
import { LandingFooter } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'Teoría de Cambio · NeuroFamilia Galápagos',
  description:
    'Del problema a la raíz hasta el impacto esperado: un modelo de innovación social y desarrollo humano diseñado desde Galápagos.',
};

export default function TeoriaDeCambioPage() {
  return (
    <LandingPage page="teoria-de-cambio">
      <LandingNavbar />
      <TheoryOfChangeSection />
      <LandingFooter />
    </LandingPage>
  );
}
