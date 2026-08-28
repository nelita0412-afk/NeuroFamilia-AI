import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/landing-page';
import { LandingNavbar } from '@/components/landing/navbar';
import { ServicesSection } from '@/components/landing/sections/services';
import { LandingFooter } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'Servicios · NeuroFamilia Galápagos',
  description:
    'Ninguna pregunta sobre crecer debería quedarse sin respuesta. Conversaciones, herramientas y un modelo probado para familias, adolescentes, profesionales e instituciones, nacido en Galápagos.',
};

export default function ServiciosPage() {
  return (
    <LandingPage page="servicios">
      <LandingNavbar />
      <ServicesSection />
      <LandingFooter />
    </LandingPage>
  );
}