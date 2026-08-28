import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/landing-page';
import { LandingNavbar } from '@/components/landing/navbar';
import { PlatformSection } from '@/components/landing/sections/platform';
import { LandingFooter } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'Plataforma · NeuroFamilia Galápagos',
  description:
    'El crecimiento, hecho visible: avanza, mentores cuando dudas, recursos y evidencia para familias, profesionales e instituciones, en una sola ventana.',
};

export default function PlataformaPage() {
  return (
    <LandingPage page="plataforma">
      <LandingNavbar />
      <PlatformSection />
      <LandingFooter />
    </LandingPage>
  );
}