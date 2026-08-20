import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/landing-page';
import { LandingNavbar } from '@/components/landing/navbar';
import { PlatformSection } from '@/components/landing/sections/platform';
import { LandingFooter } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'Plataforma · NeuroFamilia Galápagos',
  description:
    'Tecnología al servicio del desarrollo humano: seguimiento, Archipiélago, mentoría con IA, recursos y comunidad.',
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