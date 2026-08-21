import {
  Handshake,
  MessageCircleHeart,
  Users,
  type LucideIcon,
} from 'lucide-react';

export type ImpactMetric = {
  id: string;
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  description: string;
};

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'acompanamiento',
    icon: MessageCircleHeart,
    value: 500,
    label: 'Chats en vivo de Primeros Auxilios Psicológicos (PAP)',
    description:
      'Interacciones, orientaciones, espacios de escucha activa y apoyo psicosocial brindados a personas que requirieron acompañamiento oportuno.',
  },
  {
    id: 'personas',
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Personas Alcanzadas',
    description:
      'Niños, adolescentes, familias y actores comunitarios impactados por nuestras iniciativas.',
  },
  {
    id: 'alianzas',
    icon: Handshake,
    value: 5,
    label: 'Alianzas Nacionales e Internacionales',
    description:
      'Redes y colaboraciones que fortalecen el ecosistema NeuroFamilia.',
  },
];
