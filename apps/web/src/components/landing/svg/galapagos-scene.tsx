export function GalapagosScene({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 900" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <defs>
        {/* Gradiente del cielo - amanecer cálido en Galápagos */}
        <linearGradient id="sky-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0A1F44" />
          <stop offset="25%" stopColor="#0E3060" />
          <stop offset="50%" stopColor="#144A7A" />
          <stop offset="70%" stopColor="#1A6BA5" />
          <stop offset="85%" stopColor="#248DC8" />
          <stop offset="100%" stopColor="#1E7BB8" />
        </linearGradient>
        
        {/* Gradiente del océano - aguas de Galápagos */}
        <linearGradient id="ocean-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E7BB8" />
          <stop offset="20%" stopColor="#2494D1" />
          <stop offset="45%" stopColor="#2DB0E6" />
          <stop offset="70%" stopColor="#3BC5F0" />
          <stop offset="100%" stopColor="#1A5C8A" />
        </linearGradient>
        
        {/* Sol cálido en el horizonte */}
        <radialGradient id="sun-glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.5" />
          <stop offset="25%" stopColor="#FFA500" stopOpacity="0.35" />
          <stop offset="55%" stopColor="#FF8C00" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
        </radialGradient>
        
        {/* Rayos de luz suaves atravesando el agua */}
        <linearGradient id="light-rays" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </linearGradient>
        
        {/* Reflejo del horizonte en el agua */}
        <linearGradient id="horizon-reflection" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.18" />
          <stop offset="40%" stopColor="#FFA500" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
        </linearGradient>
        
        {/* Rocas icónicas de Galápagos */}
        <radialGradient id="rock-gradient" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#2D2D2D" />
        </radialGradient>
        
        <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        <filter id="sun-ray-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* CIELO - amanecer cálido sobre Galápagos */}
      <rect width="1440" height="900" fill="url(#sky-gradient)" />
      
      {/* SOL CÁLIDO EN EL HORIZONTE */}
      <ellipse 
        className="js-sun-glow" 
        cx="720" 
        cy="320" 
        rx="200" 
        ry="100" 
        fill="url(#sun-glow)" 
        filter="url(#sun-ray-blur)"
        opacity="0.6" 
      />
      
      {/* Reflejo del sol en el agua - camino dorado */}
      <ellipse 
        className="js-sun-path" 
        cx="720" 
        cy="340" 
        rx="240" 
        ry="18" 
        fill="url(#horizon-reflection)" 
      />
      
      {/* Línea del horizonte sutil */}
      <line 
        className="js-horizon-line" 
        x1="0" 
        y1="340" 
        x2="1440" 
        y2="340" 
        stroke="#FFD700" 
        strokeWidth="0.5" 
        opacity="0.25" 
      />
      
      {/* ROCAS ICÓNICAS DE GALÁPAGOS - siluetas en el horizonte */}
      <g className="js-galapagos-rocks" opacity="0.7">
        {/* Roca izquierda - forma icónica de tortuga dormida */}
        <path 
          d="M80,340 Q100,280 140,290 Q160,260 200,270 Q240,250 260,285 Q280,310 250,340 Z" 
          fill="url(#rock-gradient)" 
          opacity="0.5"
        />
        <path 
          d="M100,340 Q110,300 130,305 Q145,285 165,300 Q185,310 160,340 Z" 
          fill="#2D2D2D" 
          opacity="0.6"
        />
        
        {/* Roca central - formación volcánica */}
        <path 
          d="M580,340 Q600,290 630,295 Q660,270 700,285 Q740,275 760,300 Q780,320 740,340 Z" 
          fill="url(#rock-gradient)" 
          opacity="0.45"
        />
        <path 
          d="M600,340 Q615,310 635,312 Q655,295 680,310 Q705,320 680,340 Z" 
          fill="#2D2D2D" 
          opacity="0.5"
        />
        
        {/* Roca derecha - acantilado característico */}
        <path 
          d="M1100,340 Q1120,300 1150,305 Q1180,280 1220,295 Q1260,275 1280,305 Q1300,325 1260,340 Z" 
          fill="url(#rock-gradient)" 
          opacity="0.4"
        />
        <path 
          d="M1120,340 Q1135,315 1155,318 Q1170,300 1195,315 Q1215,330 1185,340 Z" 
          fill="#2D2D2D" 
          opacity="0.45"
        />
        
        {/* Pequeñas rocas dispersas */}
        <ellipse cx="400" cy="345" rx="35" ry="15" fill="#2D2D2D" opacity="0.3" />
        <ellipse cx="950" cy="345" rx="28" ry="12" fill="#2D2D2D" opacity="0.25" />
        <ellipse cx="1280" cy="348" rx="22" ry="10" fill="#2D2D2D" opacity="0.25" />
      </g>
      
      {/* OCÉANO SUAVE - aguas tranquilas de Galápagos */}
      <rect x="0" y="340" width="1440" height="560" fill="url(#ocean-gradient)" />
      
      {/* REFLEJO DEL SOL EN EL AGUA - camino dorado suave */}
      <ellipse 
        className="js-sun-path" 
        cx="720" 
        cy="345" 
        rx="280" 
        ry="22" 
        fill="url(#horizon-reflection)" 
      />
      <ellipse cx="720" cy="360" rx="220" ry="16" fill="#FFD700" opacity="0.12" />
      <ellipse cx="720" cy="372" rx="180" ry="12" fill="#FFA500" opacity="0.08" />
      <ellipse cx="720" cy="382" rx="150" ry="8" fill="#FF8C00" opacity="0.06" />
      
      {/* ONDAS ORGÁNICAS DISCRETAS - superficie tranquila */}
      <g className="js-surface-waves" opacity="0.5">
        <path 
          d="M0,340 Q180,325 360,342 Q540,355 720,340 Q900,328 1080,342 Q1260,355 1440,340 L1440,360 L0,360 Z" 
          fill="#FFD700" 
          opacity="0.12" 
        />
        <path 
          d="M0,352 Q220,338 440,352 Q660,365 880,348 Q1100,335 1320,350 Q1440,362 1440,368 L0,368 Z" 
          fill="#FFA500" 
          opacity="0.08" 
        />
        <path 
          d="M0,362 Q200,348 400,358 Q600,372 800,358 Q1000,350 1200,362 Q1400,372 1440,362 L1440,378 L0,378 Z" 
          fill="#FFD700" 
          opacity="0.06" 
        />
      </g>
      
      {/* ONDAS PROFUNDAS DISCRETAS */}
      <g className="js-deep-waves" opacity="0.25">
        <path d="M0,480 Q200,465 400,485 Q600,505 800,480 Q1000,460 1200,490 Q1400,510 1440,485 L1440,900 L0,900 Z" fill="#1A5C8A" opacity="0.18" />
        <path d="M0,530 Q220,515 440,535 Q660,555 880,525 Q1100,500 1320,535 Q1440,570 1440,530 L1440,900 L0,900 Z" fill="#144A6A" opacity="0.15" />
        <path d="M0,580 Q250,565 500,590 Q750,620 1000,590 Q1250,560 1440,600 L1440,900 L0,900 Z" fill="#0E3050" opacity="0.12" />
      </g>
      
      {/* REFLEJOS DORADOS EN LA SUPERFICIE */}
      <g className="js-surface-reflections" opacity="0.25">
        <ellipse cx="280" cy="342" rx="140" ry="8" fill="#FFD700" opacity="0.3" />
        <ellipse cx="720" cy="342" rx="200" ry="10" fill="#FFD700" opacity="0.25" />
        <ellipse cx="1100" cy="342" rx="120" ry="6" fill="#FFD700" opacity="0.2" />
      </g>
      
      {/* RAYOS DE LUZ SUAVES - caustics discretas */}
      <g className="js-light-rays" opacity="0.25" filter="url(#soft-glow)">
        <path d="M200,340 Q280,500 150,700 L0,700 L0,340 Z" fill="#FFD700" opacity="0.06" />
        <path d="M500,340 Q580,500 450,700 L400,700 L400,340 Z" fill="#FFD700" opacity="0.05" />
        <path d="M800,340 Q880,500 750,700 L700,700 L700,340 Z" fill="#FFD700" opacity="0.05" />
        <path d="M1100,340 Q1180,500 1050,700 L1000,700 L1000,340 Z" fill="#FFD700" opacity="0.04" />
      </g>
      
      {/* PARTÍCULAS NEURALES DISCRETAS EN EL AGUA */}
      <g className="js-water-particles" opacity="0.5" filter="url(#soft-glow)">
        <circle cx="180" cy="420" r="2" fill="#FFD700" opacity="0.5" />
        <circle cx="420" cy="460" r="1.5" fill="#FFA500" opacity="0.45" />
        <circle cx="680" cy="400" r="1.5" fill="#FFD700" opacity="0.45" />
        <circle cx="980" cy="440" r="2" fill="#FFD700" opacity="0.4" />
        <circle cx="1150" cy="390" r="1.5" fill="#FFA500" opacity="0.4" />
        <circle cx="320" cy="500" r="1.5" fill="#FFD700" opacity="0.35" />
        <circle cx="820" cy="540" r="1.5" fill="#FFA500" opacity="0.35" />
        <circle cx="1100" cy="560" r="1.5" fill="#FFD700" opacity="0.3" />
        <circle cx="480" cy="620" r="1.5" fill="#FFA500" opacity="0.3" />
        <circle cx="980" cy="640" r="2" fill="#FFD700" opacity="0.25" />
      </g>
      
      {/* PARTÍCULAS NEURALES EN EL AIRE - muy discretas */}
      <g opacity="0.35" filter="url(#soft-glow)">
        <circle cx="180" cy="220" r="1.5" fill="#FFD700" opacity="0.4" />
        <circle cx="400" cy="180" r="1.5" fill="#FFA500" opacity="0.35" />
        <circle cx="650" cy="200" r="1.5" fill="#FFD700" opacity="0.35" />
        <circle cx="900" cy="170" r="1.5" fill="#FFA500" opacity="0.3" />
        <circle cx="1150" cy="210" r="1.5" fill="#FFD700" opacity="0.35" />
        <circle cx="350" cy="260" r="1.5" fill="#FFA500" opacity="0.3" />
        <circle cx="750" cy="230" r="1.5" fill="#FFD700" opacity="0.3" />
        <circle cx="1100" cy="250" r="1.5" fill="#FFA500" opacity="0.25" />
      </g>
      
      {/* VIGNETA CINEMATOGRÁFICA MUY SUAVE */}
      <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#000000" stopOpacity="0" />
        <stop offset="70%" stopColor="#000000" stopOpacity="0" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
      </radialGradient>
      <rect width="1440" height="900" fill="url(#vignette)" />
    </svg>
  );
}