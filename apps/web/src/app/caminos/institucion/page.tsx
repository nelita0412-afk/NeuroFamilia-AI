import { CaminoLayout } from '@/components/caminos/camino-layout';

const CARDS = [
  { title: 'Qué es NeuroFamilia', detail: 'Un ecosistema de crecimiento humano impulsado por tecnología, comunidad y acompañamiento personalizado.' },
  { title: 'Impacto', detail: 'Familias, niños, adolescentes y profesionales creciendo juntos dentro del mismo ecosistema.' },
  { title: 'Beneficios', detail: 'Continuidad en el acompañamiento, evidencia clara y una comunidad que sostiene el cambio.' },
  { title: 'Implementación', detail: 'Acompañamos el despliegue por etapas, con formación y soporte para tu equipo.' },
  { title: 'Solicitar demostración', detail: 'Agenda una sesión para ver NeuroFamilia en acción con tu equipo.' },
  { title: 'Contacto', detail: 'Hablemos de cómo NeuroFamilia puede crecer en tu institución.' },
];

export default function CaminoInstitucionPage() {
  return (
    <CaminoLayout
      emoji="🏛"
      title="Soy Institución"
      subtitle="Implementar NeuroFamilia a escala"
      intro="Lleva el ecosistema NeuroFamilia a tu institución: un modelo de crecimiento humano con tecnología, evidencia y comunidad."
      cards={CARDS}
      ctaLabel="Solicitar demostración"
    />
  );
}