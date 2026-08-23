'use client';

import { useEffect, useRef } from 'react';

const HERO_SEGMENT_SECONDS = 7;
const HERO_PLAYBACK_RATE = 0.7;

export function AboutHeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  /* Velocidad cinematográfica 0.7x desde el inicio */
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = HERO_PLAYBACK_RATE;
    }
  }, []);

  return (
    <section className="js-about-hero relative flex w-full flex-col justify-center overflow-hidden bg-[#00285A]">
      {/* VIDEO HERO V1 · segmento 0:00–0:07 a 0.7x, congela en el último frame */}
      <video
        ref={videoRef}
        src="/images/landing/hero-v1.mp4"
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
        className="js-about-hero-video block h-auto max-h-[100svh] w-full object-contain"
      />

      {/* Título institucional invisible — semántica/SEO sin competir con el video */}
      <h1 className="sr-only">
        Construyendo bienestar desde Galápagos para las nuevas generaciones
      </h1>
    </section>
  );
}
