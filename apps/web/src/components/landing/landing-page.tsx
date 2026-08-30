'use client';

import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type LandingPageKey =
  | 'inicio'
  | 'acerca'
  | 'historia'
  | 'teoria-de-cambio'
  | 'neuromentores'
  | 'servicios'
  | 'plataforma';

export function LandingPage({ page, children }: { page: LandingPageKey; children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        /* Navbar — entra desde arriba en todas las páginas */
        gsap.from('.js-navbar', { y: -90, opacity: 0, duration: 0.9, delay: 0.3, ease: 'power3.out' });

        if (page === 'inicio') {
          /* ═══════════════════════════════════════════════════════
             INICIO — hub de producto y conversión
             Hero → Hub → Caminos → Impacto → Mentores → Cierre
             ═══════════════════════════════════════════════════════ */
          gsap.from('.js-hero-image', {
            scale: 1.08,
            opacity: 0,
            duration: 1.8,
            ease: 'power2.out',
          });
          gsap.from('.js-hero-overlay', { opacity: 0, duration: 1.2, delay: 0.4, ease: 'power2.out' });
          gsap.from('.js-hero-eyebrow', { y: 20, opacity: 0, duration: 0.8, delay: 0.7, ease: 'power2.out' });
          gsap.from('.js-hero-title', { y: 40, opacity: 0, duration: 1, delay: 0.9, ease: 'power3.out' });
          gsap.from('.js-hero-subtitle', { y: 30, opacity: 0, duration: 0.9, delay: 1.2, ease: 'power2.out' });
          gsap.from('.js-hero-cta', { y: 24, opacity: 0, duration: 0.7, delay: 1.5, ease: 'power2.out' });

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

          /* Hub — tres puertas */
          gsap.timeline({
            scrollTrigger: { trigger: '.js-hub', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
          })
            .from('.js-hub-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
            .from('.js-hub-title', { y: 30, opacity: 0, duration: 0.6 }, 0.15)
            .from('.js-hub-body', { y: 24, opacity: 0, duration: 0.7 }, 0.3);
          gsap.from('.js-hub-card', {
            y: 50,
            opacity: 0,
            scale: 0.95,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-hub', start: 'top 80%', once: true },
            clearProps: 'transform,opacity',
          });

          /* Caminos — cuatro audiencias */
          gsap.timeline({
            scrollTrigger: { trigger: '.js-caminos', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
          })
            .from('.js-caminos-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
            .from('.js-caminos-title', { y: 30, opacity: 0, duration: 0.6 }, 0.15)
            .from('.js-caminos-body', { y: 24, opacity: 0, duration: 0.7 }, 0.3);
          gsap.from('.js-caminos-card', {
            y: 50,
            opacity: 0,
            scale: 0.95,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-caminos', start: 'top 80%', once: true },
            clearProps: 'transform,opacity',
          });

          /* Impacto — banda slim */
          gsap.timeline({
            scrollTrigger: { trigger: '.js-impact-reached', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
          })
            .from('.js-impact-reached-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
            .from('.js-impact-reached-title', { y: 30, opacity: 0, duration: 0.6 }, 0.15)
            .from('.js-impact-reached-body', { y: 24, opacity: 0, duration: 0.7 }, 0.3);
          gsap.from('.js-impact-reached-card', {
            y: 50,
            opacity: 0,
            scale: 0.95,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-impact-reached', start: 'top 80%', once: true },
            clearProps: 'transform,opacity',
          });
          gsap.from('.js-impact-reached-unc', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            scrollTrigger: { trigger: '.js-impact-reached-unc', start: 'top 92%', once: true },
            clearProps: 'transform,opacity',
          });

          /* Vista previa NeuroMentores — teaser de 4 */
          gsap
            .timeline({
              scrollTrigger: { trigger: '.js-mentors-preview', start: 'top 80%', once: true },
            })
            .from('.js-mentors-preview-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
            .from('.js-mentors-preview-title', { y: 30, opacity: 0, duration: 0.6 }, 0.1)
            .from('.js-mentors-preview-body', { y: 24, opacity: 0, duration: 0.6 }, 0.25)
            .from(
              '.js-mentor-card',
              {
                y: 30,
                opacity: 0,
                scale: 0.95,
                duration: 0.5,
                stagger: 0.06,
                ease: 'power2.out',
                clearProps: 'transform,opacity',
              },
              0.35
            )
            .from(
              '.js-mentors-preview-cta',
              { y: 20, opacity: 0, duration: 0.5, clearProps: 'transform,opacity' },
              0.6
            );

          /* Cierre de conversión */
          gsap
            .timeline({
              scrollTrigger: { trigger: '.js-home-closing', start: 'top 80%', once: true },
            })
            .from('.js-home-closing-kicker', { y: 24, opacity: 0, duration: 0.5, clearProps: 'transform,opacity' }, 0)
            .from('.js-home-closing-title', { y: 30, opacity: 0, duration: 0.6, clearProps: 'transform,opacity' }, 0.15)
            .from('.js-home-closing-body', { y: 24, opacity: 0, duration: 0.6, clearProps: 'transform,opacity' }, 0.3)
            .from('.js-home-closing-cta', { y: 20, opacity: 0, duration: 0.5, clearProps: 'transform,opacity' }, 0.45);
        }

        if (page === 'acerca') {
          /* ═══════════════════════════════════════════════════════
             ACERCA DE — Hero en video, Quiénes Somos, Historia,
             Propósito, Equipo, Valores, Futuro y Cierre
             ═══════════════════════════════════════════════════════ */

          gsap.timeline({
            scrollTrigger: { trigger: '.js-about', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
          })
            .from('.js-about-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
            .from('.js-about-title', { y: 30, opacity: 0, duration: 0.7 }, 0.15)
            .from('.js-about-body', { y: 24, opacity: 0, duration: 0.7 }, 0.4);

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

          /* Nuestra Historia — resumen en tres actos */
          gsap.timeline({
            scrollTrigger: { trigger: '.js-about-origin', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
          })
            .from('.js-about-origin-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
            .from('.js-about-origin-title', { y: 30, opacity: 0, duration: 0.6 }, 0.15);
          gsap.from('.js-origin-photo', {
            x: -60,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-about-origin', start: 'top 70%', end: 'bottom 40%', scrub: 0.5 },
          });
          gsap.from('.js-origin-act', {
            x: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.16,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-about-origin', start: 'top 65%', once: true },
            clearProps: 'transform,opacity',
          });
          gsap.from('.js-about-origin-cta', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-about-origin', start: 'bottom 75%', once: true },
            clearProps: 'transform,opacity',
          });

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

          /* Mirando hacia el Futuro — ruta proyectiva */
          gsap.timeline({
            scrollTrigger: { trigger: '.js-about-future', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
          })
            .from('.js-about-future-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
            .from('.js-about-future-title', { y: 30, opacity: 0, duration: 0.6 }, 0.15)
            .from('.js-about-future-body', { y: 24, opacity: 0, duration: 0.7 }, 0.3);
          gsap.from('.js-future-route', {
            y: 30,
            opacity: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-future-route', start: 'top 85%', once: true },
            clearProps: 'transform,opacity',
          });
          /* Flujo continuo de la ruta hacia El mundo */
          gsap.to('.js-future-path', {
            strokeDashoffset: -100,
            duration: 6,
            repeat: -1,
            ease: 'none',
          });
          gsap.to('.js-future-dot', {
            scale: 1.4,
            svgOrigin: '580 55',
            duration: 1.4,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
          });

          gsap.timeline({
            scrollTrigger: { trigger: '.js-about-closing', start: 'top 70%', end: 'bottom 30%', scrub: 0.4 },
          })
            .from('.js-about-closing-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
            .from('.js-about-closing-title', { y: 30, opacity: 0, duration: 0.7 }, 0.15)
            .from('.js-about-closing-body', { y: 24, opacity: 0, duration: 0.6 }, 0.35)
            .from('.js-about-closing-cta', { y: 20, opacity: 0, duration: 0.5 }, 0.55);
        }

        if (page === 'historia') {
          /* ═══════════════════════════════════════════════════════
             HISTORIA — Línea de tiempo + cifras de impacto
             ═══════════════════════════════════════════════════════ */
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
        }

        if (page === 'teoria-de-cambio') {
          /* ═══════════════════════════════════════════════════════
             TEORÍA DE CAMBIO — Ocho módulos del desarrollo
             ═══════════════════════════════════════════════════════ */
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
        }

        if (page === 'neuromentores') {
          /* ═══════════════════════════════════════════════════════
             NEUROMENTORES — Acompañamiento con identidad
             ═══════════════════════════════════════════════════════ */

          /* Hero */
          gsap.timeline({
            scrollTrigger: { trigger: '.js-mentors-hero', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
          })
            .from('.js-mentors-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
            .from('.js-mentors-title', { y: 30, opacity: 0, duration: 0.6 }, 0.15)
            .from('.js-mentors-hero-sub', { y: 24, opacity: 0, duration: 0.5 }, 0.3)
            .from('.js-mentors-subtitle', { y: 24, opacity: 0, duration: 0.6 }, 0.4);

          /* ¿Por qué nacen? */
          gsap.timeline({
            scrollTrigger: { trigger: '.js-mentors-why', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
          })
            .from('.js-mentors-why-title', { y: 30, opacity: 0, duration: 0.6 }, 0)
            .from('.js-mentors-why-body', { y: 24, opacity: 0, duration: 0.5 }, 0.15)
            .from('.js-mentors-why-cards > div', { y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }, 0.3);

          /* Galería */
          gsap.timeline({
            scrollTrigger: { trigger: '.js-mentors-gallery', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
          })
            .from('.js-mentors-gallery-title', { y: 30, opacity: 0, duration: 0.6 }, 0)
            .from('.js-mentors-gallery-body', { y: 24, opacity: 0, duration: 0.5 }, 0.15)
            .from('.js-mentor', { y: 60, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' }, 0.35);

          /* Cómo acompañan */
          gsap.timeline({
            scrollTrigger: { trigger: '.js-mentors-how', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
          })
            .from('.js-mentors-how-title', { y: 30, opacity: 0, duration: 0.6 }, 0)
            .from('.js-mentors-how-cards > div', { y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }, 0.2);

          /* Territorio */
          gsap.timeline({
            scrollTrigger: { trigger: '.js-mentors-territory', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
          })
            .from('.js-mentors-territory-title', { y: 30, opacity: 0, duration: 0.6 }, 0)
            .from('.js-mentors-territory-body', { y: 24, opacity: 0, duration: 0.5 }, 0.15);

          /* Cierre */
          gsap.timeline({
            scrollTrigger: { trigger: '.js-mentors-closing', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 },
          })
            .from('.js-mentors-closing-title', { y: 30, opacity: 0, duration: 0.6 }, 0)
            .from('.js-mentors-closing-body', { y: 24, opacity: 0, duration: 0.5 }, 0.15);
        }

        if (page === 'plataforma') {
          /* ═══════════════════════════════════════════════════════
             PLATAFORMA — herramienta en primer plano
             Escena 1: hero · Escena 3 (clímax): mockups con scrub
             ═══════════════════════════════════════════════════════ */
          gsap
            .timeline({
              scrollTrigger: { trigger: '.js-platform-hero', start: 'top 70%', once: true },
            })
            .from('.js-platform-hero-kicker', { y: 24, opacity: 0, duration: 0.5, clearProps: 'transform,opacity' }, 0)
            .from('.js-platform-hero-h1', { y: 30, opacity: 0, duration: 0.7, clearProps: 'transform,opacity' }, 0.15)
            .from('.js-platform-hero-sub', { y: 24, opacity: 0, duration: 0.6, clearProps: 'transform,opacity' }, 0.3)
            .from('.js-platform-hero-cta', { y: 20, opacity: 0, duration: 0.5, clearProps: 'transform,opacity' }, 0.5)
            .from('.js-platform-hero-visual', { y: 40, opacity: 0, duration: 0.8, ease: 'power2.out', clearProps: 'transform,opacity' }, 0.6);

          gsap.from('.js-platform-features li', {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-platform-capabilities', start: 'top 80%', once: true },
            clearProps: 'transform,opacity',
          });

          /* Clímax visual — "Así se ve por dentro" */
          const platformTl = gsap.timeline({
            scrollTrigger: { trigger: '.js-platform-demo', start: 'top 65%', end: 'bottom 55%', scrub: 0.5 },
          });
          platformTl
            .from('.js-platform-demo-kicker', { y: 24, opacity: 0, duration: 0.4 }, 0)
            .from('.js-platform-demo-title', { y: 30, opacity: 0, duration: 0.5 }, 0.1)
            .from('.js-platform-demo-sub', { y: 24, opacity: 0, duration: 0.5 }, 0.2)
            .from('.js-platform-captions li', { y: 30, opacity: 0, duration: 0.5, stagger: 0.1 }, 0.35);
          gsap.to('.js-platform-desktop-wrap', {
            y: -30,
            ease: 'none',
            scrollTrigger: { trigger: '.js-platform-demo', start: 'top top', end: 'bottom top', scrub: 0.4 },
          });
          gsap.to('.js-platform-mobile-wrap', {
            y: -70,
            ease: 'none',
            scrollTrigger: { trigger: '.js-platform-demo', start: 'top top', end: 'bottom top', scrub: 0.4 },
          });

          gsap.from('.js-platform-flow > div', {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-platform-flow-sec', start: 'top 80%', once: true },
            clearProps: 'transform,opacity',
          });
          gsap.from('.js-platform-proof > div', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-platform-proof-sec', start: 'top 85%', once: true },
            clearProps: 'transform,opacity',
          });
          gsap
            .timeline({
              scrollTrigger: { trigger: '.js-platform-close', start: 'top 75%', once: true },
            })
            .from('.js-platform-close > div h2', { y: 30, opacity: 0, duration: 0.6, clearProps: 'transform,opacity' }, 0)
            .from('.js-platform-close > div p', { y: 24, opacity: 0, duration: 0.5, clearProps: 'transform,opacity' }, 0.15)
            .from('.js-platform-close > div div', { y: 20, opacity: 0, duration: 0.5, clearProps: 'transform,opacity' }, 0.35);
        }

        if (page === 'servicios') {
          /* ═══════════════════════════════════════════════════════
             SERVICIOS — página de conversión · entrada en escena
             ═══════════════════════════════════════════════════════ */
          gsap
            .timeline({
              scrollTrigger: { trigger: '.js-servicios-hero', start: 'top 70%', once: true },
            })
            .from('.js-servicios-hero-kicker', { y: 24, opacity: 0, duration: 0.5, clearProps: 'transform,opacity' }, 0)
            .from('.js-servicios-hero-title', { y: 30, opacity: 0, duration: 0.7, clearProps: 'transform,opacity' }, 0.15)
            .from('.js-servicios-hero-sub', { y: 24, opacity: 0, duration: 0.6, clearProps: 'transform,opacity' }, 0.3)
            .from('.js-servicios-hero-cta', { y: 20, opacity: 0, duration: 0.5, clearProps: 'transform,opacity' }, 0.5)
            .from('.js-servicios-hero-visual', { y: 40, opacity: 0, duration: 0.8, ease: 'power2.out', clearProps: 'transform,opacity' }, 0.35);

          gsap.from('.js-servicios-audience-grid li', {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-servicios-audiences', start: 'top 80%', once: true },
            clearProps: 'transform,opacity',
          });
          gsap.from('.js-servicios-methods-grid li', {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-servicios-methods', start: 'top 80%', once: true },
            clearProps: 'transform,opacity',
          });
          gsap.from('.js-servicios-trust-grid li', {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-servicios-trust', start: 'top 80%', once: true },
            clearProps: 'transform,opacity',
          });
          gsap.from('.js-servicios-impact-grid > div', {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-servicios-impact', start: 'top 80%', once: true },
            clearProps: 'transform,opacity',
          });
          gsap.from('.js-servicios-unc', {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-servicios-unc', start: 'top 85%', once: true },
            clearProps: 'transform,opacity',
          });
          gsap.from('.js-servicios-ods > span', {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.js-servicios-ods', start: 'top 90%', once: true },
            clearProps: 'transform,opacity',
          });
        }
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [page] }
  );

  return (
    <div ref={root} className="bg-white font-sans text-[#0B3B82]">
      {children}
    </div>
  );
}