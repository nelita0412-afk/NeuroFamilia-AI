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

export type MentorIdentity = {
  tagline: string;
  specialty: string;
  icon: LucideIcon;
  imageUrl?: string;
  avatar?: string;
};

// Identidad narrativa de cada mentor: usada solo como copy de interfaz, no como datos funcionales.
export const MENTOR_IDENTITY: Record<string, MentorIdentity> = {
  ALBA: { tagline: 'Guía del proyecto de vida', specialty: 'Proyecto de Vida', icon: Compass, imageUrl: '/images/mentores/ALBA.png' },
  NIA: { tagline: 'Voz de la primera infancia', specialty: 'Adaptabilidad', icon: Sparkles, imageUrl: '/images/mentores/NIA.png' },
  MAKI: { tagline: 'Exploradora del juego y la creatividad', specialty: 'Resiliencia', icon: Palette, imageUrl: '/images/mentores/MAKI.png' },
  BOBBY: { tagline: 'Compañero de la regulación emocional', specialty: 'Expresion y Conexion', icon: HeartHandshake, imageUrl: '/images/mentores/BOBBY.png' },
  LEO: { tagline: 'Guardián de hábitos y rutinas', specialty: 'Comunidad y Cuidado', icon: Sprout, imageUrl: '/images/mentores/LEO.png' },
  CORA: { tagline: 'Escucha del corazón familiar', specialty: 'Autoaceptacion', icon: HeartPulse, imageUrl: '/images/mentores/CORA.png' },
  PINGO: { tagline: 'Chispa de la curiosidad científica', specialty: 'Curiosidad y Aprendizaje', icon: Telescope, imageUrl: '/images/mentores/PINGO.png' },
  DARWIN: { tagline: 'Observador del crecimiento y la adaptación', specialty: 'Innovacion', icon: Fingerprint, imageUrl: '/images/mentores/DARWIN.png' },
};
