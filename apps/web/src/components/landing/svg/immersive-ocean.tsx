export function ImmersiveOcean({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 900" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sky-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#061A3A" />
          <stop offset="35%" stopColor="#0A2E5A" />
          <stop offset="60%" stopColor="#0A4E9B" />
          <stop offset="85%" stopColor="#1476C6" />
          <stop offset="100%" stopColor="#0A4E9B" />
        </linearGradient>
        <linearGradient id="ocean-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0A4E9B" />
          <stop offset="25%" stopColor="#1476C6" />
          <stop offset="50%" stopColor="#1E8BCB" />
          <stop offset="75%" stopColor="#29C7D8" />
          <stop offset="100%" stopColor="#0A2E5A" />
        </linearGradient>
        <radialGradient id="sun-glow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#F8FBFF" stopOpacity="0.4" />
          <stop offset="25%" stopColor="#29C7D8" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#1476C6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0A4E9B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="caustic-light" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="0" />
          <stop offset="50%" stopColor="#29C7D8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#29C7D8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="horizon-reflection" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#1476C6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0A4E9B" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="neural-particle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="1" />
          <stop offset="70%" stopColor="#1476C6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0A4E9B" stopOpacity="0" />
        </radialGradient>
        <filter id="soft-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="distant-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1440" height="900" fill="url(#sky-gradient)" />
      <ellipse className="js-sun-glow" cx="720" cy="320" rx="180" ry="90" fill="url(#sun-glow)" opacity="0.35" />
      <ellipse className="js-horizon-reflection" cx="720" cy="340" rx="220" ry="15" fill="url(#horizon-reflection)" />
      <line className="js-horizon-line" x1="0" y1="340" x2="1440" y2="340" stroke="#29C7D8" strokeWidth="0.5" opacity="0.3" />
      <rect x="0" y="340" width="1440" height="560" fill="url(#ocean-gradient)" />
      <g className="js-caustics" opacity="0.4">
        <path d="M100,340 Q200,500 50,700 L0,700 L0,340 Z" fill="url(#caustic-light)" />
        <path d="M400,340 Q500,500 350,700 L300,700 L300,340 Z" fill="url(#caustic-light)" />
        <path d="M700,340 Q800,500 650,700 L600,700 L600,340 Z" fill="url(#caustic-light)" />
        <path d="M1000,340 Q1100,500 950,700 L900,700 L900,340 Z" fill="url(#caustic-light)" />
        <path d="M1300,340 Q1400,500 1250,700 L1200,700 L1200,340 Z" fill="url(#caustic-light)" />
      </g>
      <g className="js-surface-waves" opacity="0.6">
        <path d="M0,340 Q200,320 400,345 Q600,360 800,340 Q1000,325 1200,345 Q1400,360 1440,340 L1440,360 L0,360 Z" fill="#29C7D8" opacity="0.25" />
        <path d="M0,350 Q250,335 500,355 Q750,365 1000,345 Q1250,330 1440,355 L1440,370 L0,370 Z" fill="#1476C6" opacity="0.18" />
        <path d="M0,360 Q180,342 380,358 Q580,370 800,355 Q1020,340 1280,360 Q1440,380 1440,365 L1440,385 L0,385 Z" fill="#29C7D8" opacity="0.15" />
      </g>
      <g className="js-deep-waves" opacity="0.4">
        <path d="M0,480 Q200,460 400,490 Q600,510 800,480 Q1000,455 1200,495 Q1400,515 1440,490 L1440,900 L0,900 Z" fill="#0A4E9B" opacity="0.3" />
        <path d="M0,520 Q220,500 440,530 Q660,550 880,520 Q1100,490 1320,530 Q1440,570 1440,525 L1440,900 L0,900 Z" fill="#0A2E5A" opacity="0.4" />
        <path d="M0,580 Q250,560 500,590 Q750,620 1000,590 Q1250,560 1440,600 L1440,900 L0,900 Z" fill="#0A1E3A" opacity="0.5" />
      </g>
      <g className="js-surface-reflections" opacity="0.3">
        <ellipse cx="300" cy="342" rx="120" ry="8" fill="#29C7D8" opacity="0.4" />
        <ellipse cx="720" cy="342" rx="180" ry="10" fill="#29C7D8" opacity="0.35" />
        <ellipse cx="1100" cy="342" rx="100" ry="6" fill="#29C7D8" opacity="0.3" />
      </g>
      <g className="js-neural-particles-water" filter="url(#soft-blur)">
        <circle className="js-water-particle wp-1" cx="200" cy="400" r="3" fill="#29C7D8" opacity="0.7" />
        <circle className="js-water-particle wp-2" cx="450" cy="450" r="2.5" fill="#29C7D8" opacity="0.6" />
        <circle className="js-water-particle wp-3" cx="680" cy="380" r="2" fill="#1476C6" opacity="0.7" />
        <circle className="js-water-particle wp-4" cx="950" cy="420" r="3" fill="#29C7D8" opacity="0.65" />
        <circle className="js-water-particle wp-5" cx="1100" cy="370" r="2.5" fill="#1476C6" opacity="0.7" />
        <circle className="js-water-particle wp-6" cx="350" cy="480" r="2" fill="#29C7D8" opacity="0.6" />
        <circle className="js-water-particle wp-7" cx="850" cy="520" r="2.5" fill="#1476C6" opacity="0.6" />
        <circle className="js-water-particle wp-8" cx="1100" cy="550" r="2" fill="#29C7D8" opacity="0.55" />
        <circle className="js-water-particle wp-9" cx="500" cy="600" r="2" fill="#1476C6" opacity="0.55" />
        <circle className="js-water-particle wp-10" cx="1000" cy="620" r="2.5" fill="#29C7D8" opacity="0.5" />
        <circle className="js-water-particle wp-11" cx="200" cy="650" r="2" fill="#1476C6" opacity="0.5" />
        <circle className="js-water-particle wp-12" cx="800" cy="700" r="2.5" fill="#29C7D8" opacity="0.45" />
        <circle className="js-water-particle wp-13" cx="1300" cy="680" r="2" fill="#1476C6" opacity="0.45" />
        <circle className="js-water-particle wp-14" cx="400" cy="720" r="2" fill="#29C7D8" opacity="0.4" />
        <circle className="js-water-particle wp-15" cx="1000" cy="750" r="2.5" fill="#1476C6" opacity="0.4" />
      </g>
      <g className="js-neural-particles-air" filter="url(#soft-blur)" opacity="0.85">
        <circle className="js-air-particle ap-1" cx="180" cy="200" r="2.5" fill="#29C7D8" opacity="0.9" />
        <circle className="js-air-particle ap-2" cx="400" cy="150" r="2" fill="#1476C6" opacity="0.85" />
        <circle className="js-air-particle ap-3" cx="650" cy="180" r="2.5" fill="#29C7D8" opacity="0.8" />
        <circle className="js-air-particle ap-4" cx="900" cy="160" r="2" fill="#1476C6" opacity="0.8" />
        <circle className="js-air-particle ap-5" cx="1150" cy="190" r="2.5" fill="#29C7D8" opacity="0.85" />
        <circle className="js-air-particle ap-6" cx="350" cy="250" r="2" fill="#1476C6" opacity="0.75" />
        <circle className="js-air-particle ap-7" cx="750" cy="220" r="2.5" fill="#29C7D8" opacity="0.8" />
        <circle className="js-air-particle ap-8" cx="1100" cy="240" r="2" fill="#1476C6" opacity="0.75" />
        <circle className="js-air-particle ap-9" cx="250" cy="300" r="2" fill="#29C7D8" opacity="0.7" />
        <circle className="js-air-particle ap-10" cx="550" cy="280" r="2.5" fill="#1476C6" opacity="0.7" />
        <circle className="js-air-particle ap-11" cx="880" cy="310" r="2" fill="#29C7D8" opacity="0.7" />
        <circle className="js-air-particle ap-12" cx="1200" cy="260" r="2" fill="#1476C6" opacity="0.65" />
      </g>
      <g className="js-surface-reflections" opacity="0.3">
        <ellipse cx="300" cy="342" rx="120" ry="8" fill="#29C7D8" opacity="0.4" />
        <ellipse cx="720" cy="342" rx="180" ry="10" fill="#29C7D8" opacity="0.35" />
        <ellipse cx="1100" cy="342" rx="100" ry="6" fill="#29C7D8" opacity="0.3" />
      </g>
      <g className="js-neural-particles-air" filter="url(#soft-blur)" opacity="0.85">
        <circle className="js-air-particle ap-1" cx="180" cy="200" r="2.5" fill="#29C7D8" opacity="0.9" />
        <circle className="js-air-particle ap-2" cx="400" cy="150" r="2" fill="#1476C6" opacity="0.85" />
        <circle className="js-air-particle ap-3" cx="650" cy="180" r="2.5" fill="#29C7D8" opacity="0.8" />
        <circle className="js-air-particle ap-4" cx="900" cy="160" r="2" fill="#1476C6" opacity="0.8" />
        <circle className="js-air-particle ap-5" cx="1150" cy="190" r="2.5" fill="#29C7D8" opacity="0.85" />
        <circle className="js-air-particle ap-6" cx="350" cy="250" r="2" fill="#1476C6" opacity="0.75" />
        <circle className="js-air-particle ap-7" cx="750" cy="220" r="2.5" fill="#29C7D8" opacity="0.8" />
        <circle className="js-air-particle ap-8" cx="1100" cy="240" r="2" fill="#1476C6" opacity="0.75" />
        <circle className="js-air-particle ap-9" cx="250" cy="300" r="2" fill="#29C7D8" opacity="0.7" />
        <circle className="js-air-particle ap-10" cx="550" cy="280" r="2.5" fill="#1476C6" opacity="0.7" />
        <circle className="js-air-particle ap-11" cx="880" cy="310" r="2" fill="#29C7D8" opacity="0.7" />
        <circle className="js-air-particle ap-12" cx="1200" cy="260" r="2" fill="#1476C6" opacity="0.65" />
      </g>
      <g className="js-surface-reflections" opacity="0.3">
        <ellipse cx="300" cy="342" rx="120" ry="8" fill="#29C7D8" opacity="0.4" />
        <ellipse cx="720" cy="342" rx="180" ry="10" fill="#29C7D8" opacity="0.35" />
        <ellipse cx="1100" cy="342" rx="100" ry="6" fill="#29C7D8" opacity="0.3" />
      </g>
      <g className="js-sun-reflection-water" opacity="0.5">
        <ellipse cx="720" cy="350" rx="300" ry="2" fill="#29C7D8" opacity="0.4" />
        <ellipse cx="720" cy="358" rx="250" ry="1.5" fill="#29C7D8" opacity="0.3" />
        <ellipse cx="720" cy="365" rx="200" ry="1" fill="#29C7D8" opacity="0.2" />
      </g>
      <rect x="0" y="600" width="1440" height="300" fill="url(#ocean-gradient)" opacity="0.3" />
      <rect width="1440" height="900" fill="none" />
    </svg>
  );
}
