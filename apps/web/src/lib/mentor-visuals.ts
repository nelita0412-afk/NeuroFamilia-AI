import {
  Compass,
  Sparkles,
  Palette,
  HeartHandshake,
  Sprout,
  HeartPulse,
  Telescope,
  Fingerprint,
  type LucideIcon,
} from 'lucide-react';

// Capa de presentacion de la identidad MIF: iconos y colores son preocupaciones de UI.
// Los datos del mentor viven en @neurofamilia/shared (MENTOR_IDENTITY); packages/shared
// permanece agnostico de framework y sin dependencias de UI.

export const MENTOR_ICONS: Record<string, LucideIcon> = {
  ALBA: Compass,
  NIA: Sparkles,
  MAKI: Palette,
  BOBBY: HeartHandshake,
  LEO: Sprout,
  CORA: HeartPulse,
  PINGO: Telescope,
  DARWIN: Fingerprint,
};

export type MentorColorScheme = {
  primary: string;
  gradient: {
    from: string;
    to: string;
  };
};

export const MENTOR_COLORS: Record<string, MentorColorScheme> = {
  ALBA: { primary: '#0069B7', gradient: { from: '#00BDEB', to: '#0069B7' } },
  NIA: { primary: '#1A8CCB', gradient: { from: '#42C7EE', to: '#1A8CCB' } },
  MAKI: { primary: '#2E9AA7', gradient: { from: '#56D5C8', to: '#2E9AA7' } },
  BOBBY: { primary: '#2E6ED9', gradient: { from: '#4FB5FF', to: '#2E6ED9' } },
  LEO: { primary: '#2E9B63', gradient: { from: '#66C488', to: '#2E9B63' } },
  CORA: { primary: '#2E8F9B', gradient: { from: '#5BC6D2', to: '#2E8F9B' } },
  PINGO: { primary: '#3A73D8', gradient: { from: '#5AA7FF', to: '#3A73D8' } },
  DARWIN: { primary: '#4C57D3', gradient: { from: '#6390FF', to: '#4C57D3' } },
};
