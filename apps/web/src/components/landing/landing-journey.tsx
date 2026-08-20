'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { HeroSection } from './sections/hero';
import { LandingNavbar } from './navbar';
import { AboutSection } from './sections/about';
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

        /* Franja blanca superior */
        gsap.from('.js-navbar', { y: -90, opacity: 0, duration: 0.9, delay: 0.3, ease: 'power3.out' });

        /* Título + subtítulo + botón - entrada escalonada */
        gsap.from('.js-hero-title', { y: 40, opacity: 0, duration: 1, delay: 0.9, ease: 'power3.out' });
        gsap.from('.js-hero-subtitle', { y: 30, opacity: 0, duration: 0.9, delay: 1.2, ease: 'power2.out' });
        gsap.from('.js-hero-cta', { y: 24, opacity: 0, duration: 0.7, delay: 1.5, ease: 'power2.out' });

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
           S2 — ACERCA DE: Quiénes Somos, Historia, Propósito,
                Equipo, Origen, Valores, Métricas y Cierre
           ══════════════════════════════════════════════════════ */
        gsap.timeline({
          scrollTrigger: { trigger: '.js-about', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
        })
          .from('.js-about-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
          .from('.js-about-title', { y: 30, opacity: 0, duration: 0.7 }, 0.15)
          .from('.js-about-body', { y: 24, opacity: 0, duration: 0.7 }, 0.4);

        /* Ecosistema — nodos conectados */
        const ecoTl = gsap.timeline({
          scrollTrigger: { trigger: '.js-eco', start: 'top 75%', end: 'bottom 40%', scrub: 0.5 },
        });
        ecoTl
          .from('.js-eco-hub', { scale: 0, opacity: 0, duration: 0.7, ease: 'back.out(1.6)' }, 0)
          .from('.js-eco-line', {
            strokeDashoffset: 100,
            opacity: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: 'power1.inOut',
          }, 0.2)
          .from('.js-eco-node', {
            scale: 0.4,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'back.out(1.6)',
          }, 0.5);
        gsap.to('.js-eco-pulse', {
          scale: 1.35,
          opacity: 0.4,
          duration: 2.2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });
        gsap.from('.js-eco-mobile-node', {
          y: 24,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: { trigger: '.js-eco-mobile', start: 'top 80%', end: 'bottom 50%', scrub: 0.4 },
        });

        /* Historia — línea de tiempo horizontal */
        gsap.timeline({
          scrollTrigger: { trigger: '.js-about-history', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
        })
          .from('.js-about-history-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
          .from('.js-about-history-title', { y: 30, opacity: 0, duration: 0.6 }, 0.15)
          .from('.js-about-history-body', { y: 24, opacity: 0, duration: 0.7 }, 0.3);
        gsap.from('.js-timeline-line', {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1.2,
          scrollTrigger: { trigger: '.js-timeline', start: 'top 75%', end: 'bottom 45%', scrub: 0.5 },
        });
        gsap.from('.js-timeline-item', {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.js-timeline', start: 'top 75%', end: 'bottom 45%', scrub: 0.5 },
        });
        gsap.from('.js-timeline-mobile li', {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: { trigger: '.js-timeline-mobile', start: 'top 80%', end: 'bottom 50%', scrub: 0.4 },
        });

        /* Propósito — tarjetas premium (reveal único, siempre visibles) */
        gsap.timeline({
          scrollTrigger: { trigger: '.js-about-purpose', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
        })
          .from('.js-about-purpose-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
          .from('.js-about-purpose-title', { y: 30, opacity: 0, duration: 0.6 }, 0.15);
        gsap.from('.js-purpose-card', {
          y: 50,
          opacity: 0,
          scale: 0.94,
          duration: 0.7,
          stagger: 0.14,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.js-about-purpose', start: 'top 85%', once: true },
          clearProps: 'transform,opacity',
        });

        /* Equipo — retratos editoriales + información */
        gsap.timeline({
          scrollTrigger: { trigger: '.js-about-founders', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
        })
          .from('.js-about-founders-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
          .from('.js-about-founders-title', { y: 30, opacity: 0, duration: 0.6 }, 0.15);
        gsap.utils.toArray<HTMLElement>('.js-founder-block').forEach((block) => {
          gsap.from(block.querySelector('.js-founder-photo'), {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: { trigger: block, start: 'top 80%', once: true },
            clearProps: 'transform,opacity',
          });
          const info = [...block.children].slice(1);
          if (info.length) {
            gsap.from(info, {
              y: 30,
              opacity: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: 'power2.out',
              scrollTrigger: { trigger: block, start: 'top 80%', once: true },
              clearProps: 'transform,opacity',
            });
          }
        });

        /* ¿Por qué nace NeuroFamilia? */
        gsap.timeline({
          scrollTrigger: { trigger: '.js-about-why', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
        })
          .from('.js-about-why-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
          .from('.js-about-why-title', { y: 30, opacity: 0, duration: 0.6 }, 0.15)
          .from('.js-about-why-lead', { y: 24, opacity: 0, duration: 0.7 }, 0.3)
          .from('.js-why-item', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
          }, 0.5);
        gsap.from('.js-why-photo', {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.js-about-why', start: 'top 70%', end: 'bottom 40%', scrub: 0.5 },
        });

        /* Valores — banda horizontal (reveal único, siempre visibles) */
        gsap.from('.js-about-values-kicker', {
          y: 20,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: { trigger: '.js-about-values', start: 'top 85%', once: true },
          clearProps: 'transform,opacity',
        });
        gsap.from('.js-value-item', {
          y: 30,
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          stagger: 0.08,
          ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.js-about-values', start: 'top 85%', once: true },
          clearProps: 'transform,opacity',
        });

        /* Métricas institucionales */
        gsap.from('.js-metric', {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.js-about-metrics', start: 'top 75%', end: 'bottom 45%', scrub: 0.5 },
        });

        /* Cierre inspirador */
        gsap.timeline({
          scrollTrigger: { trigger: '.js-about-closing', start: 'top 70%', end: 'bottom 30%', scrub: 0.4 },
        })
          .from('.js-about-closing-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
          .from('.js-about-closing-title', { y: 30, opacity: 0, duration: 0.7 }, 0.15)
          .from('.js-about-closing-body', { y: 24, opacity: 0, duration: 0.6 }, 0.35)
          .from('.js-about-closing-cta', { y: 20, opacity: 0, duration: 0.5 }, 0.55);

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
      <LandingNavbar />
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <DimensionsSection />
      <MentorsSection />
      <PlatformSection />
      <CtaSection />
      <LandingFooter />
    </div>
  );
}