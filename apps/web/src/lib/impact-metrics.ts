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
    value: 1751,
    label: 'Chats en vivo de Primeros Auxilios Psicológicos (PAP)',
    description:
      'Interacciones de orientación, escucha activa, apoyo emocional y acompañamiento psicosocial brindadas a personas que requirieron atención y contención oportuna.',
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
