import { CaminoLayout } from '@/components/caminos/camino-layout';

const CARDS = [
  { title: 'Proyecto de vida con ALBA', detail: 'Descubre tu norte y construye paso a paso tu camino personal.' },
  { title: 'Emociones con BOBBY', detail: 'Reconoce y regula lo que sientes con un compañero cercano.' },
  { title: 'Aprendizaje con PINGO', detail: 'Convierte tu curiosidad en conocimiento y superpoderes.' },
  { title: 'Resiliencia con MAKI', detail: 'Aprende a recuperarte y volver a intentarlo con juego.' },
  { title: 'Liderazgo con LEO', detail: 'Gana hábitos que te convierten en guía de tu propia vida.' },
  { title: 'Retos, insignias y misiones', detail: 'Cada reto superado es una insignia en tu recorrido entre islas.' },
];

export default function CaminoAdolescentePage() {
  return (
    <CaminoLayout
      emoji="🌱"
      title="Soy Adolescente"
      subtitle="Descubrir quién soy y quién quiero ser"
      intro="Este es tu momento de crecer. Elige tus guías, supera retos, gana insignias y avanza entre islas a tu propio ritmo."
      cards={CARDS}
      ctaLabel="Empezar mis misiones"
    />
  );
}