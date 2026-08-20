'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { HeroSection } from './sections/hero';
import { PurposeSection } from './sections/purpose';
import { ImpactSection } from './sections/impact';
import { DimensionsSection } from './sections/dimensions';
import { MentorsSection } from './sections/mentors';
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
           S1 — HERO INSTITUCIONAL FULLSCREEN (fotografía aérea)
           ═══════════════════════════════════════════════════════ */

        /* Fotografía aérea - revelación cinematográfica */
        gsap.from('.js-hero-image', {
          scale: 1.08,
          opacity: 0,
          duration: 1.8,
          ease: 'power2.out',
        });

        /* Overlay azul - entra después de la foto */
        gsap.from('.js-hero-overlay', { opacity: 0, duration: 1.2, delay: 0.4, ease: 'power2.out' });

        /* Header y navegación */
        gsap.from('.js-hero header', { y: -40, opacity: 0, duration: 1, delay: 0.5, ease: 'power3.out' });

        /* Kicker + título de marca - entrada escalonada */
        gsap.from('.js-hero-kicker', { y: 30, opacity: 0, duration: 0.8, delay: 0.7, ease: 'power2.out' });
        gsap.from('.js-hero-title', { y: 40, opacity: 0, duration: 1, delay: 0.9, ease: 'power3.out' });

        /* Scroll Down */
        gsap.from('.js-hero-scroll', { y: 20, opacity: 0, duration: 0.8, delay: 1.4, ease: 'power2.out' });
        gsap.to('.js-scroll-line', {
          scaleY: 0.4,
          transformOrigin: 'top',
          duration: 1.2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });

        /* Parallax al hacer scroll: foto + contenido */
        gsap.to('.js-hero-image', {
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

        /* ═══════════════════════════════════════════════════════
           S2 — PROPÓSITO: Revelación serena
           ══════════════════════════════════════════════════════ */
        gsap.timeline({
          scrollTrigger: { trigger: '.js-purpose', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
        })
          .from('.js-purpose-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
          .from('.js-purpose-title', { y: 30, opacity: 0, duration: 0.7 }, 0.15)
          .from('.js-purpose-body', { y: 24, opacity: 0, duration: 0.7 }, 0.4)
          .from('.js-purpose-cta', { y: 16, opacity: 0, duration: 0.5 }, 0.55)
          .from('.js-purpose-pillars li', { y: 20, opacity: 0, duration: 0.5, stagger: 0.06 }, 0.7);

        /* ═══════════════════════════════════════════════════════
           S3 — IMPACTO: Las cifras entran en escena
           ══════════════════════════════════════════════════════ */
        gsap.timeline({
          scrollTrigger: { trigger: '.js-impact', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
        })
          .from('.js-impact-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
          .from('.js-impact-title', { y: 30, opacity: 0, duration: 0.6 }, 0.15)
          .from('.js-impact-stats > div', {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
          }, 0.35);

        /* ═══════════════════════════════════════════════════════
           S4 — DIMENSIONES: Ocho módulos del desarrollo
           ══════════════════════════════════════════════════════ */
        gsap.timeline({
          scrollTrigger: { trigger: '.js-dimensions', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
        })
          .from('.js-dimensions-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
          .from('.js-dimensions-title', { y: 30, opacity: 0, duration: 0.6 }, 0.15)
          .from('.js-dimension-card', {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
          }, 0.35);

        /* ═══════════════════════════════════════════════════════
           S5 — NEUROMENTORES: Ocho guías, ocho caminos
           ══════════════════════════════════════════════════════ */
        gsap.timeline({
          scrollTrigger: { trigger: '.js-mentors', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
        })
          .from('.js-mentors-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
          .from('.js-mentors-title', { y: 30, opacity: 0, duration: 0.6 }, 0.15)
          .from('.js-mentors-subtitle', { y: 24, opacity: 0, duration: 0.6 }, 0.3)
          .from('.js-mentor', {
            y: 60,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
          }, 0.5);

        /* ═══════════════════════════════════════════════════════
           S6 — PLATAFORMA: La herramienta entra en escena
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
           S7 — CTA: El viaje comienza
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
    <div ref={root} className="bg-white font-sans text-[#0B3B82]">
      <HeroSection />
      <PurposeSection />
      <ImpactSection />
      <DimensionsSection />
      <MentorsSection />
      <PlatformSection />
      <CtaSection />
      <LandingFooter />
    </div>
  );
}