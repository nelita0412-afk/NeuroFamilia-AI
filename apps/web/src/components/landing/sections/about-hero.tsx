'use client';

import { useEffect, useRef } from 'react';

const HERO_SEGMENT_SECONDS = 4;
const HERO_BASE_RATE = 0.6;
const RAMP_START = 3.0;

export function AboutHeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = HERO_BASE_RATE;

    /* Desaceleración cinematográfica: 0.6x hasta los 3s y frenado
       progresivo hasta congelar sin corte brusco en el segundo 4 */
    let raf = 0;
    const tick = () => {
      const v = videoRef.current;
      if (!v || v.paused || v.ended) return;
      if (v.currentTime >= HERO_SEGMENT_SECONDS) {
        v.currentTime = HERO_SEGMENT_SECONDS;
        v.pause();
        return;
      }
      const remaining = HERO_SEGMENT_SECONDS - v.currentTime;
      const rampWindow = HERO_SEGMENT_SECONDS - RAMP_START;
      v.playbackRate =
        remaining > rampWindow
          ? HERO_BASE_RATE
          : Math.max(0.12, HERO_BASE_RATE * (remaining / rampWindow));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="js-about-hero relative flex w-full flex-col justify-center overflow-hidden bg-[#00285A]">
      {/* VIDEO HERO V3 · apertura 0:00–0:04 a 0.6x con congelado final */}
      <video
        ref={videoRef}
        src="/images/landing/hero-v3.mp4"
        poster="/images/landing/galapagos-aerial.jpg"
        preload="auto"
        autoPlay
        muted
        playsInline
        aria-label="Video institucional de NeuroFamilia Galápagos"
        onTimeUpdate={(e) => {
          const video = e.currentTarget;
          if (video.currentTime >= HERO_SEGMENT_SECONDS) {
            video.currentTime = HERO_SEGMENT_SECONDS;
            video.pause();
          }
        }}
        className="js-about-hero-video block h-auto w-full object-contain"
      />

      {/* Título institucional invisible — semántica/SEO sin competir con el video */}
      <h1 className="sr-only">
        Construyendo bienestar desde Galápagos para las nuevas generaciones
      </h1>
    </section>
  );
}
