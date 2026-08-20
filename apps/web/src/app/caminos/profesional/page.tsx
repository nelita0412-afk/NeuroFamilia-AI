import { CaminoLayout } from '@/components/caminos/camino-layout';

const CARDS = [
  { title: 'Casos', detail: 'Gestiona cada proceso de acompañamiento con su historia completa.' },
  { title: 'Familias', detail: 'Una mirada integral de cada familia que acompañas.' },
  { title: 'Seguimiento', detail: 'Registra sesiones, observaciones y evolución en el tiempo.' },
  { title: 'Indicadores', detail: 'Lecturas claras del desarrollo para decidir con confianza.' },
  { title: 'Reportes', detail: 'Documenta avances con evidencia y transparencia.' },
  { title: 'IA de apoyo profesional', detail: 'Los NeuroMentores como apoyo inteligente en tu práctica diaria.' },
];

export default function CaminoProfesionalPage() {
  return (
    <CaminoLayout
      emoji="🧩"
      title="Soy Profesional"
      subtitle="Acompañar procesos de desarrollo humano"
      intro="Tu trabajo cambia vidas. NeuroFamilia te da la estructura, la evidencia y el apoyo inteligente para que puedas dedicarte a lo que importa: la persona."
      cards={CARDS}
      ctaLabel="Crear mi espacio profesional"
    />
  );
}