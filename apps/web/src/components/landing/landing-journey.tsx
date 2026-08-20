'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { HeroSection } from './sections/hero';
import { PurposeSection } from './sections/purpose';
import { ArchipelagoSection } from './sections/archipelago';
import { MentorsSection } from './sections/mentors';
import { GuardianSection } from './sections/guardian';
import { CommunitySection } from './sections/community';
import { PlatformSection } from './sections/platform';
import { CtaSection } from './sections/cta';
import { LandingFooter } from './footer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function LandingJourney() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        /* ═══════════════════════════════════════════════════════
           S1 — HERO CINEMATOGRÁFICO
           ═══════════════════════════════════════════════════════ */
        
        /* Header y navegación */
        gsap.from('.js-hero header', { y: -40, opacity: 0, duration: 1, ease: 'power3.out' });
        
        /* Contenido izquierdo - entrada escalonada */
        gsap.from('.js-hero-kicker', { y: 30, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' });
        gsap.from('.js-hero-title', { y: 40, opacity: 0, duration: 1, delay: 0.5, ease: 'power3.out' });
        gsap.from('.js-hero-subtitle', { y: 30, opacity: 0, duration: 0.9, delay: 0.8, ease: 'power2.out' });
        gsap.from('.js-hero-cta a', { y: 24, opacity: 0, duration: 0.7, delay: 1.1, stagger: 0.15, ease: 'power2.out' });
        
        /* 4 Pilares - entrada escalonada */
        gsap.from('.js-four-pillars .js-pillar', {
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay: 1.4,
          stagger: 0.1,
          ease: 'power2.out'
        });
        
        /* Indicador de scroll */
        gsap.from('.js-scroll-indicator', { y: 20, opacity: 0, duration: 0.6, delay: 2.2, ease: 'power2.out' });
        
        /* Tortuga Hero - entrada épica desde el océano */
        gsap.from('.js-hero-turtle', { 
          y: 120, 
          opacity: 0, 
          scale: 0.85, 
          duration: 1.8, 
          delay: 0.4, 
          ease: 'power3.out' 
        });
        
        /* Respiración sutil de la tortuga */
        gsap.to('.js-hero-turtle', {
          y: -8,
          scale: 1.005,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
        
        /* Respiración del halo detrás de Hero */
        gsap.to('.js-hero-turtle-wrap::before', {
          scale: 1.05,
          opacity: 0.4,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
        
        /* Brillo neuronal pulsante en el caparazón */
        gsap.to('.hero-neural-network .neural-node', {
          scale: 1.15,
          opacity: 1,
          duration: 1.8,
          yoyo: true,
          repeat: -1,
          stagger: 0.15,
          ease: 'sine.inOut'
        });
        
        gsap.to('.hero-neural-network .neural-halo', {
          scale: 1.3,
          opacity: 0.35,
          duration: 2.2,
          yoyo: true,
          repeat: -1,
          stagger: 0.12,
          ease: 'sine.inOut'
        });
        
        gsap.to('.hero-neural-network .neural-core', {
          scale: 1.1,
          opacity: 1,
          duration: 1.5,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
        
        gsap.to('.hero-neural-network .neural-core-inner', {
          scale: 1.15,
          duration: 1.2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
        
        gsap.to('.neural-heart', {
          scale: 1.2,
          opacity: 0.8,
          duration: 1,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
        
        /* Conexiones neuronales - flujo de energía */
        gsap.to('.hero-neural-connections path', {
          strokeDashoffset: 0,
          duration: 3,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
          stagger: 0.2
        });
        
        // Inicializar stroke-dashoffset para las conexiones
        gsap.set('.hero-neural-connections path', {
          attr: { strokeDasharray: 1, strokeDashoffset: 1 }
        });
        
        /* Reflejo en el suelo - respiración */
        gsap.to('.js-hero-floor-reflection', {
          scaleX: 1.1,
          opacity: 0.18,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
        
        /* Partículas de agua - animación orgánica */
        gsap.to('.js-water-particle', {
          y: (i: number) => -20 - (i % 5) * 15,
          x: (i: number) => (i % 3 === 0 ? 15 : -10),
          opacity: (i: number) => 0.3 + (i % 3) * 0.2,
          duration: (i: number) => 6 + (i % 4) * 2,
          yoyo: true,
          repeat: -1,
          stagger: 0.3,
          ease: 'sine.inOut'
        });
        
        /* Partículas en el aire */
        gsap.to('.js-air-particle', {
          y: (i: number) => -30 - (i % 4) * 20,
          x: (i: number) => (i % 2 === 0 ? 20 : -15),
          opacity: (i: number) => 0.5 + (i % 3) * 0.15,
          duration: (i: number) => 8 + (i % 5) * 2,
          yoyo: true,
          repeat: -1,
          stagger: 0.4,
          ease: 'sine.inOut'
        });
        
        /* Sol/horizonte - pulso sutil */
        gsap.to('.js-sun-glow', {
          scale: 1.08,
          opacity: 0.45,
          duration: 6,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
        
        gsap.to('.js-horizon-reflection', {
          scaleX: 1.15,
          opacity: 0.35,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
        
        /* Ondas de superficie */
        gsap.to('.js-surface-waves path', {
          x: (i: number) => i % 2 === 0 ? 30 : -25,
          duration: (i: number) => 10 + i * 2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
        
        gsap.to('.js-deep-waves path', {
          x: (i: number) => i % 2 === 0 ? -20 : 15,
          duration: (i: number) => 15 + i * 3,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
        
        /* Caustics - rayos de luz */
        gsap.to('.js-caustics path', {
          y: -40,
          opacity: (i: number) => 0.2 + (i % 3) * 0.1,
          duration: (i: number) => 8 + i * 1.5,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
        
        /* Partículas de agua */
        gsap.to('.js-water-particle', {
          y: (i: number) => -50 - (i % 5) * 30,
          x: (i: number) => (i % 4 === 0 ? 40 : -30),
          opacity: (i: number) => 0.2 + (i % 4) * 0.15,
          duration: (i: number) => 10 + (i % 5) * 3,
          yoyo: true,
          repeat: -1,
          stagger: 0.5,
          ease: 'sine.inOut'
        });
        
        /* Partículas en el aire */
        gsap.to('.js-air-particle', {
          y: (i: number) => -40 - (i % 4) * 25,
          x: (i: number) => (i % 3 === 0 ? 30 : -20),
          opacity: (i: number) => 0.4 + (i % 3) * 0.1,
          duration: (i: number) => 12 + (i % 4) * 3,
          yoyo: true,
          repeat: -1,
          stagger: 0.6,
          ease: 'sine.inOut'
        });
        
        /* Reflejo del sol en el agua */
        gsap.to('.js-sun-reflection-water ellipse', {
          scaleX: 1.2,
          opacity: 0.5,
          duration: 5,
          yoyo: true,
          repeat: -1,
          stagger: 0.3,
          ease: 'sine.inOut'
        });
        
        /* Scroll parallax para el fondo inmersivo */
        gsap.to('.js-hero-waves-back', {
          xPercent: 8,
          yPercent: 5,
          ease: 'none',
          scrollTrigger: { trigger: '.js-hero', start: 'top top', end: 'bottom top', scrub: 1 }
        });
        
        gsap.to('.js-hero-waves-front', {
          xPercent: -10,
          yPercent: -8,
          ease: 'none',
          scrollTrigger: { trigger: '.js-hero', start: 'top top', end: 'bottom top', scrub: 1 }
        });
        
        /* Paralaje del contenido al hacer scroll */
        gsap.to('.js-hero-content', {
          yPercent: -20,
          opacity: 0.3,
          ease: 'none',
          scrollTrigger: { trigger: '.js-hero', start: 'top top', end: 'bottom top', scrub: 1 }
        });
        
        gsap.to('.js-hero-turtle-side', {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: { trigger: '.js-hero', start: 'top top', end: 'bottom top', scrub: 1 }
        });
        
        /* Paralaje del fondo inmersivo */
        gsap.to('.js-sun-glow', {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: { trigger: '.js-hero', start: 'top top', end: 'bottom top', scrub: 1 }
        });
        
        gsap.to('.js-horizon-line', {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: { trigger: '.js-hero', start: 'top top', end: 'bottom top', scrub: 1 }
        });

        /* ═══════════════════════════════════════════════════════
           S2 — PROPÓSITO: Revelación serena
           ══════════════════════════════════════════════════════ */
        gsap.timeline({
          scrollTrigger: { trigger: '.js-purpose', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
        })
          .from('.js-purpose-line', { scaleX: 0, transformOrigin: 'center', duration: 0.5 }, 0)
          .from('.js-purpose-title', { y: 30, opacity: 0, duration: 0.7 }, 0.15)
          .from('.js-purpose-body', { y: 24, opacity: 0, duration: 0.7 }, 0.4);

        /* ═══════════════════════════════════════════════════════
           S3 — ARCHIPIÉLAGO: El océano se abre
           ══════════════════════════════════════════════════════ */
        gsap.set('.js-route', { attr: { strokeDasharray: 1, strokeDashoffset: 1 } });
        const archTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.js-archipelago',
            start: 'top top',
            end: '+=170%',
            scrub: 0.5,
            pin: true,
          },
        });
        archTl
          .from('.js-arch-kicker', { y: 24, opacity: 0, duration: 0.4 }, 0)
          .from('.js-arch-title', { y: 30, opacity: 0, duration: 0.5 }, 0.1)
          .fromTo(
            '.js-arch-camera',
            { scale: 1.35, yPercent: 8 },
            { scale: 1, yPercent: 0, duration: 1.5, ease: 'power2.out' },
            0.2
          )
          .from('.js-isle', { scale: 0.4, opacity: 0, transformOrigin: 'center bottom', duration: 0.6, stagger: 0.09, ease: 'back.out(1.6)' }, 0.5)
          .to('.js-route', { strokeDashoffset: 0, duration: 1.3, ease: 'power1.inOut' }, 1.0)
          .from('.js-isle-label', { opacity: 0, y: 12, duration: 0.5, stagger: 0.07 }, 1.5)
          .from('.js-arch-islands-list', { y: 40, opacity: 0, duration: 0.6 }, 1.8);
        gsap.to('.js-arch-map', {
          scale: 1.04,
          duration: 2.4,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });
        gsap.to('.js-isle circle', {
          opacity: 0.55,
          duration: 1.6,
          yoyo: true,
          repeat: -1,
          stagger: 0.2,
          ease: 'sine.inOut',
        });

        /* ═══════════════════════════════════════════════════════
           S4 — NEUROMENTORES: Emergen como guías
           ══════════════════════════════════════════════════════ */
        gsap.timeline({
          scrollTrigger: {
            trigger: '.js-mentors',
            start: 'top top',
            end: '+=110%',
            scrub: 0.4,
            pin: true,
          },
        })
          .from('.js-mentors-kicker', { y: 24, opacity: 0, duration: 0.4 }, 0)
          .from('.js-mentors-title', { y: 30, opacity: 0, duration: 0.5 }, 0.1)
          .from('.js-mentors-subtitle', { y: 24, opacity: 0, duration: 0.5 }, 0.2)
          .from('.js-mentor', {
            y: 130,
            scale: 0.82,
            opacity: 0,
            rotateX: 20,
            transformOrigin: '50% 100%',
            duration: 0.9,
            stagger: 0.14,
            ease: 'power2.out',
          }, 0.35);

        /* ═══════════════════════════════════════════════════════
           S5 — HERO GUARDIÁN
           ══════════════════════════════════════════════════════ */
        gsap.timeline({
          scrollTrigger: { trigger: '.js-guardian', start: 'top 65%', end: 'bottom 50%', scrub: 0.4 },
        })
          .from('.js-guardian-turtle', { scale: 0.82, opacity: 0, y: 40, duration: 0.8, ease: 'power2.out' }, 0)
          .from('.js-guardian-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0.2)
          .from('.js-guardian-title', { y: 30, opacity: 0, duration: 0.6 }, 0.35)
          .from('.js-guardian-body', { y: 24, opacity: 0, duration: 0.6 }, 0.5);
        gsap.to('.js-guardian-turtle', {
          y: -12,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });

        /* ═══════════════════════════════════════════════════════
           S6 — COMUNIDAD: Red neuronal viva
           ══════════════════════════════════════════════════════ */
        gsap.set('.js-comm-line', { attr: { pathLength: 1, strokeDasharray: 1, strokeDashoffset: 1 } });
        const commTl = gsap.timeline({
          scrollTrigger: { trigger: '.js-community', start: 'top 65%', end: 'bottom 50%', scrub: 0.5 },
        });
        commTl
          .to('.js-comm-line', { strokeDashoffset: 0, duration: 1.2, ease: 'power1.inOut' }, 0)
          .from('.js-comm-node', { scale: 0.5, opacity: 0, transformOrigin: 'center', duration: 0.6, stagger: 0.12, ease: 'back.out(1.7)' }, 0.2)
          .from('.js-community-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0.3)
          .from('.js-community-title', { y: 30, opacity: 0, duration: 0.6 }, 0.45)
          .from('.js-community-body', { y: 20, opacity: 0, duration: 0.6 }, 0.75);
        gsap.to('.js-comm-core', { scale: 1.08, transformOrigin: 'center', duration: 1.6, yoyo: true, repeat: -1, ease: 'sine.inOut' });

        /* ═══════════════════════════════════════════════════════
           S7 — PLATAFORMA: La herramienta entra en escena
           ══════════════════════════════════════════════════════ */
        const platformTl = gsap.timeline({
          scrollTrigger: { trigger: '.js-platform', start: 'top 65%', end: 'bottom 55%', scrub: 0.5 },
        });
        platformTl
          .from('.js-platform-kicker', { y: 24, opacity: 0, duration: 0.4 }, 0)
          .from('.js-platform-title', { y: 30, opacity: 0, duration: 0.5 }, 0.1)
          .from('.js-platform-features li', { y: 30, opacity: 0, duration: 0.5, stagger: 0.1 }, 0.25)
          .from('.js-platform-desktop-wrap', { scale: 0.9, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.5)
          .from('.js-platform-tablet-wrap', { x: -70, y: 80, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.8)
          .from('.js-platform-mobile-wrap', { x: 70, y: 90, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.95);
        gsap.to('.js-platform-tablet-wrap', {
          y: -30,
          ease: 'none',
          scrollTrigger: { trigger: '.js-platform', start: 'top top', end: 'bottom top', scrub: 0.4 },
        });
        gsap.to('.js-platform-mobile-wrap', {
          y: -60,
          ease: 'none',
          scrollTrigger: { trigger: '.js-platform', start: 'top top', end: 'bottom top', scrub: 0.4 },
        });

        /* ═══════════════════════════════════════════════════════
           S8 — CTA: Atardecer y el viaje comienza
           ══════════════════════════════════════════════════════ */
        const ctaTl = gsap.timeline({
          scrollTrigger: { trigger: '.js-cta', start: 'top 70%', end: 'bottom 30%', scrub: 0.4 },
        });
        ctaTl
          .from('.js-cta-title', { y: 30, opacity: 0, duration: 0.6 }, 0)
          .from('.js-cta-button', { y: 24, opacity: 0, duration: 0.6 }, 0.2)
          .fromTo(
            '.js-cta-turtle-wrap',
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.6 },
            0.4
          )
          .to('.js-cta-turtle', { scale: 0.82, y: -24, duration: 1.3, ease: 'none' }, 0.8)
          .to('.js-sun', { scale: 1.4, opacity: 0.9, duration: 1.3, ease: 'none' }, 0.8);
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} className="bg-[#061A3A] font-sans text-[#F8FBFF]">
      <HeroSection />
      <PurposeSection />
      <ArchipelagoSection />
      <MentorsSection />
      <GuardianSection />
      <CommunitySection />
      <PlatformSection />
      <CtaSection />
      <LandingFooter />
    </div>
  );
}