export function WavesBack({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 320" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M0,150 C220,230 460,110 700,150 C940,190 1180,70 1440,130 L1440,320 L0,320 Z"
        fill="rgba(41,199,216,0.14)"
      />
      <path
        d="M0,200 C260,120 520,260 780,200 C1040,140 1280,240 1440,190 L1440,320 L0,320 Z"
        fill="rgba(248,251,255,0.06)"
      />
    </svg>
  );
}

export function WavesFront({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 320" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M0,220 C240,140 480,280 720,220 C960,160 1200,260 1440,200 L1440,320 L0,320 Z"
        fill="rgba(41,199,216,0.22)"
      />
      <path
        d="M0,260 C280,180 560,300 840,250 C1120,200 1320,280 1440,250 L1440,320 L0,320 Z"
        fill="rgba(248,251,255,0.10)"
      />
    </svg>
  );
}