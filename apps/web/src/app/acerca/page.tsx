import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/landing-page';
import { LandingNavbar } from '@/components/landing/navbar';
import { AboutHeroSection } from '@/components/landing/sections/about-hero';
import { AboutSection } from '@/components/landing/sections/about';
import { LandingFooter } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'Acerca de · NeuroFamilia Galápagos',
  description:
    'Ciencia, tecnología y acompañamiento humano para el bienestar de las familias. Conoce nuestro ecosistema, equipo fundador, valores y propósito.',
};

export default function AcercaPage() {
  return (
    <LandingPage page="acerca">
      <LandingNavbar />
      <AboutHeroSection />
      <AboutSection />
      <LandingFooter />
    </LandingPage>
  );
}