'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { HeroSection } from './sections/hero';
import { StoriesSection } from './sections/stories';
import { PotentialSection } from './sections/potential';
import { MentorsSection } from './sections/mentors';
import { ArchipelagoSection } from './sections/archipelago';
import { GrowthSection } from './sections/growth';
import { CommunitySection } from './sections/community';
import { PlatformSection } from './sections/platform';
import { ChoiceSection } from './sections/choice';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function LandingJourney() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        /* S1 — Hero: emergencia de la tortuga y parallax */
        gsap.from('.js-hero-turtle', { y: 90, opacity: 0, duration: 1.6, ease: 'power3.out' });
        gsap.from('.js-hero-kicker', { y: 30, opacity: 0, duration: 0.8, delay: 0.9, ease: 'power2.out' });
        gsap.from('.js-hero-title', { y: 40, opacity: 0, duration: 0.9, delay: 1.1, ease: 'power2.out' });
        gsap.from('.js-hero-subtitle', { y: 30, opacity: 0, duration: 0.9, delay: 1.35, ease: 'power2.out' });
        gsap.to('.js-hero-turtle', {
          y: -14,
          duration: 3.2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });
        gsap.to('.js-hero-content', {
          yPercent: -16,
          opacity: 0.35,
          ease: 'none',
          scrollTrigger: { trigger: '.js-hero', start: 'top top', end: 'bottom top', scrub: true },
        });
        gsap.to('.js-hero-waves-back', {
          xPercent: 10,
          ease: 'none',
          scrollTrigger: { trigger: '.js-hero', start: 'top top', end: 'bottom top', scrub: true },
        });
        gsap.to('.js-hero-waves-front', {
          xPercent: -14,
          ease: 'none',
          scrollTrigger: { trigger: '.js-hero', start: 'top top', end: 'bottom top', scrub: true },
        });

        /* S2 — Historias: conexiones neuronales que se dibujan */
        gsap.set('.js-neural-line', {
          attr: { pathLength: 1, strokeDasharray: 1, strokeDashoffset: 1 },
        });
        const neuralTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.js-stories',
            start: 'top top',
            end: '+=70%',
            scrub: 0.6,
            pin: true,
          },
        });
        neuralTl
          .to('.js-neural-line', { strokeDashoffset: 0, duration: 1.4, ease: 'power1.inOut' }, 0)
          .from('.js-node', { scale: 0, opacity: 0, transformOrigin: 'center', duration: 0.35, stagger: 0.04 }, 0.5)
          .from('.js-stories-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0.9)
          .from('.js-stories-title', { y: 30, opacity: 0, duration: 0.6 }, 1.05)
          .from('.js-stories-subtitle', { y: 24, opacity: 0, duration: 0.6 }, 1.2)
          .from('.js-stories-body', { y: 20, opacity: 0, duration: 0.6 }, 1.35);
        gsap.to('.js-node-core', {
          scale: 1.35,
          transformOrigin: 'center',
          opacity: 0.85,
          duration: 1.1,
          yoyo: true,
          repeat: -1,
          stagger: 0.12,
          ease: 'sine.inOut',
        });

        /* S3 — Potencial: la tortuga avanza y los puntos se vuelven islas */
        const potentialTl = gsap.timeline({
          scrollTrigger: { trigger: '.js-potential', start: 'top 75%', end: 'bottom 55%', scrub: 0.5 },
        });
        potentialTl
          .fromTo('.js-potential-turtle', { opacity: 0, xPercent: -30 }, { opacity: 0.92, xPercent: 40, duration: 1.4, ease: 'none' }, 0)
          .from('.js-potential-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
          .from('.js-potential-title', { y: 30, opacity: 0, duration: 0.6 }, 0.1)
          .from('.js-potential-subtitle', { y: 24, opacity: 0, duration: 0.6 }, 0.2)
          .from('.js-potential-path', { scaleX: 0, transformOrigin: 'left center', duration: 1 }, 0.3)
          .from('.js-potential-dot', {
            scale: 0,
            opacity: 0,
            transformOrigin: 'center',
            duration: 0.5,
            stagger: 0.09,
          }, 0.45)
          .from('.js-potential-body', { y: 20, opacity: 0, duration: 0.6 }, 0.9);

        /* S4 — NeuroMentores: emergen como guías con profundidad */
        gsap.timeline({
          scrollTrigger: {
            trigger: '.js-mentors',
            start: 'top top',
            end: '+=120%',
            scrub: 0.4,
            pin: true,
          },
        }).from('.js-mentor', {
          y: 140,
          scale: 0.78,
          opacity: 0,
          rotateX: 22,
          transformOrigin: '50% 100%',
          duration: 1,
          stagger: 0.16,
          ease: 'power2.out',
        }, 0.1)
          .from('.js-mentors-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0)
          .from('.js-mentors-title', { y: 30, opacity: 0, duration: 0.6 }, 0.1)
          .from('.js-mentors-subtitle', { y: 24, opacity: 0, duration: 0.6 }, 0.2);

        /* S5 — Archipiélago: la cámara se aleja y el océano se abre */
        gsap.set('.js-route', { attr: { strokeDasharray: 1, strokeDashoffset: 1 } });
        const archTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.js-archipelago',
            start: 'top top',
            end: '+=190%',
            scrub: 0.5,
            pin: true,
          },
        });
        archTl
          .from('.js-arch-kicker', { y: 24, opacity: 0, duration: 0.4 }, 0)
          .from('.js-arch-title', { y: 30, opacity: 0, duration: 0.5 }, 0.1)
          .fromTo(
            '.js-arch-camera',
            { scale: 1.45, yPercent: 10 },
            { scale: 1, yPercent: 0, duration: 1.6, ease: 'power2.out' },
            0.2
          )
          .fromTo('.js-arch-turtle-wrap', { opacity: 0, y: 130, scale: 0.7 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power2.out' }, 0.35)
          .from('.js-isle', { scale: 0.4, opacity: 0, transformOrigin: 'center bottom', duration: 0.6, stagger: 0.09, ease: 'back.out(1.6)' }, 0.6)
          .to('.js-route', { strokeDashoffset: 0, duration: 1.3, ease: 'power1.inOut' }, 1.1)
          .from('.js-isle-label', { opacity: 0, y: 12, duration: 0.5, stagger: 0.07 }, 1.6)
          .from('.js-arch-islands-list', { y: 40, opacity: 0, duration: 0.6 }, 1.9)
          .to('.js-arch-turtle-wrap', { scale: 1.12, duration: 1.2, ease: 'sine.inOut' }, 2.2);
        gsap.to('.js-arch-map', {
          scale: 1.05,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });
        gsap.to('.js-isle circle', {
          opacity: 0.55,
          duration: 1.4,
          yoyo: true,
          repeat: -1,
          stagger: 0.18,
          ease: 'sine.inOut',
        });

        /* S6 — Crecimiento: un recorrido entre islas */
        const track = document.querySelector('.js-growth-track');
        const nodes = gsap.utils.toArray<HTMLElement>('.js-journey-node');
        const dot = document.querySelector('.js-journey-dot');
        if (track && dot && nodes.length) {
          const targets = nodes.map((n) => n.offsetLeft + n.offsetWidth / 2 - dot.clientWidth / 2);
          const journeyTl = gsap.timeline({
            scrollTrigger: { trigger: '.js-growth', start: 'top 60%', end: 'bottom 50%', scrub: 0.5 },
          });
          journeyTl.from('.js-growth-kicker', { y: 24, opacity: 0, duration: 0.4 }, 0)
            .from('.js-growth-title', { y: 30, opacity: 0, duration: 0.5 }, 0.1)
            .from('.js-growth-subtitle', { y: 24, opacity: 0, duration: 0.5 }, 0.2)
            .from('.js-journey-dim', { opacity: 0, y: 12, duration: 0.3, stagger: 0.1 }, 0.4);
          nodes.forEach((node, i) => {
            const ring = node.querySelector('span');
            if (!ring) return;
            journeyTl
              .to(dot, { x: targets[i], duration: 0.55, ease: 'power1.inOut' }, 0.5 + i * 0.32)
              .fromTo(
                ring,
                { scale: 1 },
                { scale: 1.5, duration: 0.28, yoyo: true, repeat: 1, ease: 'sine.inOut' },
                '>-0.05'
              )
              .to(ring, { boxShadow: '0 0 22px rgba(41,199,216,1)', duration: 0.3 }, '>-0.3');
          });
        }

        /* S7 — Comunidad: órbitas conectadas */
        gsap.set('.js-comm-line', { attr: { pathLength: 1, strokeDasharray: 1, strokeDashoffset: 1 } });
        const commTl = gsap.timeline({
          scrollTrigger: { trigger: '.js-community', start: 'top 65%', end: 'bottom 50%', scrub: 0.5 },
        });
        commTl
          .to('.js-comm-line', { strokeDashoffset: 0, duration: 1.2, ease: 'power1.inOut' }, 0)
          .from('.js-comm-node', { scale: 0.5, opacity: 0, transformOrigin: 'center', duration: 0.6, stagger: 0.12, ease: 'back.out(1.7)' }, 0.2)
          .from('.js-community-kicker', { y: 24, opacity: 0, duration: 0.5 }, 0.3)
          .from('.js-community-title', { y: 30, opacity: 0, duration: 0.6 }, 0.45)
          .from('.js-community-subtitle', { y: 24, opacity: 0, duration: 0.6 }, 0.6)
          .from('.js-community-body', { y: 20, opacity: 0, duration: 0.6 }, 0.75);
        gsap.to('.js-comm-core', { scale: 1.08, transformOrigin: 'center', duration: 1.6, yoyo: true, repeat: -1, ease: 'sine.inOut' });

        /* S8 — Plataforma: la herramienta entra en escena */
        const platformTl = gsap.timeline({
          scrollTrigger: { trigger: '.js-platform', start: 'top 65%', end: 'bottom 55%', scrub: 0.5 },
        });
        platformTl
          .from('.js-platform-kicker', { y: 24, opacity: 0, duration: 0.4 }, 0)
          .from('.js-platform-title', { y: 30, opacity: 0, duration: 0.5 }, 0.1)
          .from('.js-platform-subtitle', { y: 24, opacity: 0, duration: 0.5 }, 0.2)
          .from('.js-platform-desktop-wrap', { scale: 0.9, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.3)
          .from('.js-platform-tablet-wrap', { x: -70, y: 80, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.6)
          .from('.js-platform-mobile-wrap', { x: 70, y: 90, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.75);
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

        /* S9 — Elección: atardecer, tortuga hacia el horizonte y cuatro caminos */
        const choiceTl = gsap.timeline({
          scrollTrigger: { trigger: '.js-choice', start: 'top 70%', end: 'bottom 30%', scrub: 0.4 },
        });
        choiceTl
          .from('.js-choice-kicker', { y: 24, opacity: 0, duration: 0.4 }, 0)
          .from('.js-choice-title', { y: 30, opacity: 0, duration: 0.5 }, 0.1)
          .from('.js-choice-paths li', { y: 46, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' }, 0.2)
          .fromTo(
            '.js-choice-turtle-wrap',
            { opacity: 0, y: 70 },
            { opacity: 1, y: 0, duration: 0.7 },
            0.7
          )
          .to('.js-choice-turtle', { scale: 0.8, y: -30, duration: 1.4, ease: 'none' }, 1.1)
          .to('.js-sun', { scale: 1.4, opacity: 0.9, duration: 1.4, ease: 'none' }, 1.1);
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} className="bg-[#0A4E9B] font-sans text-[#F8FBFF]">
      <HeroSection />
      <StoriesSection />
      <PotentialSection />
      <MentorsSection />
      <ArchipelagoSection />
      <GrowthSection />
      <CommunitySection />
      <PlatformSection />
      <ChoiceSection />
    </div>
  );
}