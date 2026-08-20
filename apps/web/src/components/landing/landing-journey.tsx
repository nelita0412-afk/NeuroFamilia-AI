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
           S1 — HERO INSTITUCIONAL FULLSCREEN (video Galápagos)
           ═══════════════════════════════════════════════════════ */

        /* Video aéreo - revelación cinematográfica */
        gsap.from('.js-hero-video', {
          scale: 1.08,
          opacity: 0,
          duration: 1.8,
          ease: 'power2.out',
        });

        /* Overlay oscuro - entra después del video */
        gsap.from('.js-hero-overlay', { opacity: 0, duration: 1.2, delay: 0.4, ease: 'power2.out' });

        /* Header y navegación */
        gsap.from('.js-hero header', { y: -40, opacity: 0, duration: 1, delay: 0.5, ease: 'power3.out' });

        /* Mensaje central - entrada escalonada */
        gsap.from('.js-hero-kicker', { y: 30, opacity: 0, duration: 0.8, delay: 0.7, ease: 'power2.out' });
        gsap.from('.js-hero-title', { y: 40, opacity: 0, duration: 1, delay: 0.9, ease: 'power3.out' });
        gsap.from('.js-hero-subtitle', { y: 30, opacity: 0, duration: 0.9, delay: 1.2, ease: 'power2.out' });
        gsap.from('.js-hero-cta a', { y: 24, opacity: 0, duration: 0.7, delay: 1.5, stagger: 0.15, ease: 'power2.out' });

        /* Banda de pilares - entrada escalonada */
        gsap.from('.js-hero-pillars a', {
          y: 30,
          opacity: 0,
          duration: 0.7,
          delay: 1.9,
          stagger: 0.08,
          ease: 'power2.out',
        });

        /* Parallax al hacer scroll: video + contenido + banda */
        gsap.to('.js-hero-video', {
          scale: 1.12,
          ease: 'none',
          scrollTrigger: { trigger: '.js-hero', start: 'top top', end: 'bottom top', scrub: 1 },
        });

        gsap.to('.js-hero-content', {
          yPercent: -18,
          opacity: 0.25,
          ease: 'none',
          scrollTrigger: { trigger: '.js-hero', start: 'top top', end: 'bottom top', scrub: 1 },
        });

        gsap.to('.js-hero-pillars', {
          yPercent: 60,
          opacity: 0,
          ease: 'none',
          scrollTrigger: { trigger: '.js-hero', start: 'top top', end: 'bottom top', scrub: 1 },
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