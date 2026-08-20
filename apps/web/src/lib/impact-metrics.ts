import {
  Globe,
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
    id: 'alianzas',
    icon: Handshake,
    value: 5,
    label: 'Alianzas Estratégicas',
    description:
      'Redes y colaboraciones nacionales e internacionales que fortalecen el ecosistema NeuroFamilia.',
  },
  {
    id: 'acompanamiento',
    icon: MessageCircleHeart,
    value: 500,
    suffix: '+',
    label: 'Espacios de Acompañamiento',
    description:
      'Interacciones, orientaciones y espacios de escucha activa y apoyo psicosocial.',
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
    id: 'comunidades',
    icon: Globe,
    value: 3,
    suffix: 'Islas',
    label: 'Comunidades Impactadas',
    description:
      'Comunidades insulares de Galápagos conectadas en un mismo ecosistema de bienestar.',
  },
];