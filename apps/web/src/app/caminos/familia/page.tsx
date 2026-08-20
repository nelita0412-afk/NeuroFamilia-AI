import { CaminoLayout } from '@/components/caminos/camino-layout';

const CARDS = [
  { title: 'NeuroMentores', detail: 'Ocho guías con identidad propia que acompañan cada etapa del crecimiento familiar.' },
  { title: 'Bienestar familiar', detail: 'Espacios y hábitos para cuidar la salud emocional de toda la familia.' },
  { title: 'Proyecto de vida', detail: 'Acompañamiento para que cada miembro defina su propio norte.' },
  { title: 'Retos familiares', detail: 'Misiones y desafíos que la familia enfrenta y celebra junta.' },
  { title: 'Actividades', detail: 'Experiencias cotidianas que convierten el acompañamiento en práctica.' },
  { title: 'Comunidad', detail: 'Otras familias creciendo en el mismo ecosistema, con un mismo propósito.' },
];

export default function CaminoFamiliaPage() {
  return (
    <CaminoLayout
      emoji="🌊"
      title="Soy Familia"
      subtitle="Acompañar el crecimiento familiar"
      intro="Tu familia tiene una historia. NeuroFamilia te ofrece guías, herramientas y comunidad para que esa historia crezca con calma, ciencia y acompañamiento."
      cards={CARDS}
      ctaLabel="Comenzar el viaje familiar"
    />
  );
}