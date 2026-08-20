export function HeroTurtlePremium({ className = '', scale = 1 }: { className?: string; scale?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 500 480"
      fill="none"
      role="img"
      aria-label="Hero, la tortuga guardiana de NeuroFamilia"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center bottom' }}
    >
      <defs>
        
        <radialGradient id="hero-glow-main" cx="52%" cy="48%" r="70%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#1476C6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0A4E9B" stopOpacity="0.1" />
        </radialGradient>
        
        <radialGradient id="hero-body-gradient" cx="50%" cy="55%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#F8FBFF" />
          <stop offset="100%" stopColor="#E8F4FB" />
        </radialGradient>
        
        <linearGradient id="hero-rim-light" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#1476C6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0A4E9B" stopOpacity="0.8" />
        </linearGradient>
        
        <radialGradient id="hero-subsurface" cx="55%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#1476C6" stopOpacity="0.03" />
        </radialGradient>
        
        <radialGradient id="neural-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#1476C6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0A4E9B" stopOpacity="0" />
        </radialGradient>
        
        <filter id="hero-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        <filter id="hero-rim-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feMorphology operator="dilate" radius="3" in="SourceAlpha" result="thick" />
          <feGaussianBlur stdDeviation="6" in="thick" result="blur" />
          <feFlood flood-color="#29C7D8" flood-opacity="0.7" result="glowColor" />
          <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      
      <ellipse cx="250" cy="260" rx="200" ry="180" fill="url(#hero-glow-main)" filter="url(#hero-soft-glow)" />
      
      
      <ellipse cx="250" cy="420" rx="140" ry="25" fill="#29C7D8" opacity="0.08" filter="url(#hero-soft-glow)" />

         CUERPO PRINCIPAL - Tortuga con volumen 3D
      <g filter="url(#hero-rim-glow)">
        
        <path
          d="M85,285 C65,295 55,305 48,295 C40,285 50,275 68,275 C85,275 95,285 85,285 Z"
          fill="url(#hero-body-gradient)"
        />
        
        
        <path
          d="M120,310 C90,335 70,365 85,385 C95,400 115,385 130,365 C142,350 135,330 120,310 Z"
          fill="url(#hero-body-gradient)"
        />
        <path d="M115,330 C95,350 85,370 100,378 C115,365 125,345 115,330 Z" fill="#E8F4FB" opacity="0.6" />
        
        
        <path
          d="M80,260 C110,330 290,335 370,270 C390,240 370,210 280,205 C200,200 120,225 80,260 Z"
          fill="url(#hero-body-gradient)"
        />
        <ellipse cx="225" cy="255" rx="100" ry="45" fill="url(#hero-subsurface)" />
        
        
        <path
          d="M320,265 C345,285 360,310 355,330 C350,345 335,350 315,345 C300,340 305,325 320,265 Z"
          fill="url(#hero-body-gradient)"
        />
        <path d="M315,290 C325,305 332,310 328,318 C322,315 315,305 315,290 Z" fill="#E8F4FB" opacity="0.7" />
        
        
        <path
          d="M380,185 C425,165 455,160 460,185 C465,205 455,225 385,225 C305,225 230,225 190,210 C165,200 155,190 155,198 C155,205 165,212 178,205 C195,200 205,195 220,198 C240,202 260,210 275,208 C290,205 305,200 380,185 Z"
          fill="url(#hero-body-gradient)"
          filter="url(#hero-rim-glow)"
        />
        
        
        <ellipse cx="305" cy="228" rx="12" ry="8" fill="#29C7D8" opacity="0.18" />
        
        
        <g className="hero-eye">
          
          <ellipse cx="410" cy="178" rx="14" ry="16" fill="#FFFFFF" stroke="#29C7D8" strokeWidth="1.5" />
          
          <ellipse cx="412" cy="180" rx="9" ry="10" fill="#1476C6" />
          
          <circle cx="413" cy="181" r="4.5" fill="#0A4E9B" />
          
          <circle cx="415" cy="177" r="3.5" fill="#FFFFFF" opacity="0.95" />
          
          <circle cx="408" cy="175" r="1.5" fill="#FFFFFF" opacity="0.6" />
          
          <path d="M398,170 Q410,164 422,172 C428,175 425,180 420,184 Z" fill="#F8FBFF" opacity="0.85" />
        </g>
        
        
        <path d="M395,162 Q410,156 425,164" stroke="#1476C6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
        
        
        <path 
          className="hero-smile"
          d="M365,232 Q400,248 425,236" 
          stroke="#0A4E9B" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          fill="none"
        />
        
        
        <ellipse cx="372" cy="238" rx="5" ry="3" fill="#1476C6" opacity="0.15" />
        <ellipse cx="418" cy="238" rx="5" ry="3" fill="#1476C6" opacity="0.15" />
        
           CAPARAZÓN NEURONAL - El corazón visual
        <g className="hero-shell-neural">
          
          <path
            d="M70,260 C30,200 20,160 80,115 C130,70 200,55 250,60 C260,58 270,56 280,58 C330,60 370,85 375,135 C380,185 370,220 310,245 C260,265 200,280 140,285 C80,288 50,275 70,260 Z"
            fill="#F8FBFF"
            stroke="url(#hero-rim-light)"
            strokeWidth="4"
          />
          
          
          <path d="M100,240 C80,180 120,130 180,105 C220,85 255,95 250,130 C245,155 230,175 220,195 C210,215 185,225 145,230 Z" fill="#E8F4FB" opacity="0.5" />
          
          
          <path
            d="M70,260 C30,200 20,160 80,115 C130,70 200,55 250,60 C260,58 270,56 280,58 C330,60 370,85 375,135 C380,185 370,220 310,245 C260,265 200,280 140,285 C80,288 50,275 70,260 Z"
            fill="none"
            stroke="url(#hero-rim-light)"
            strokeWidth="3"
            opacity="0.85"
          />
          
          
          <g className="hero-neural-network">
            
            <circle className="neural-node hero-node-1" cx="150" cy="130" r="11" fill="#29C7D8" />
            <circle className="neural-node hero-node-2" cx="210" cy="100" r="9" fill="#1476C6" />
            <circle className="neural-node hero-node-3" cx="280" cy="115" r="12" fill="#29C7D8" />
            <circle className="neural-node hero-node-4" cx="260" cy="165" r="10" fill="#1476C6" />
            <circle className="neural-node hero-node-5" cx="190" cy="185" r="11" fill="#29C7D8" />
            <circle className="neural-node hero-node-6" cx="120" cy="155" r="10" fill="#1476C6" />
            <circle className="neural-node hero-node-7" cx="100" cy="210" r="12" fill="#29C7D8" />
            <circle className="neural-node hero-node-8" cx="125" cy="255" r="11" fill="#1476C6" />
            <circle className="neural-node hero-node-9" cx="180" cy="275" r="12" fill="#29C7D8" />
            <circle className="neural-node hero-node-10" cx="230" cy="240" r="13" fill="#1476C6" />
            
            
            <circle className="neural-halo hero-halo-1" cx="150" cy="130" r="16" fill="#29C7D8" opacity="0.18" />
            <circle className="neural-halo hero-halo-2" cx="210" cy="100" r="14" fill="#1476C6" opacity="0.15" />
            <circle className="neural-halo hero-halo-3" cx="280" cy="115" r="17" fill="#29C7D8" opacity="0.18" />
            <circle className="neural-halo hero-halo-4" cx="260" cy="165" r="15" fill="#1476C6" opacity="0.15" />
            <circle className="neural-halo hero-halo-5" cx="190" cy="185" r="16" fill="#29C7D8" opacity="0.18" />
            <circle className="neural-halo hero-halo-6" cx="120" cy="155" r="15" fill="#1476C6" opacity="0.15" />
            <circle className="neural-halo hero-halo-7" cx="100" cy="210" r="17" fill="#29C7D8" opacity="0.18" />
            <circle className="neural-halo hero-halo-8" cx="125" cy="255" r="16" fill="#1476C6" opacity="0.15" />
            <circle className="neural-halo hero-halo-9" cx="180" cy="275" r="17" fill="#29C7D8" opacity="0.18" />
            <circle className="neural-halo hero-halo-10" cx="230" cy="240" r="18" fill="#1476C6" opacity="0.15" />
            
            
            <circle cx="150" cy="130" r="5" fill="#29C7D8" />
            <circle cx="210" cy="100" r="4" fill="#1476C6" />
            <circle cx="280" cy="115" r="5.5" fill="#29C7D8" />
            <circle cx="260" cy="165" r="4.5" fill="#1476C6" />
            <circle cx="190" cy="185" r="5" fill="#29C7D8" />
            <circle cx="120" cy="155" r="4.5" fill="#1476C6" />
            <circle cx="100" cy="210" r="5.5" fill="#29C7D8" />
            <circle cx="125" cy="255" r="5" fill="#1476C6" />
            <circle cx="180" cy="275" r="5.5" fill="#29C7D8" />
            <circle cx="230" cy="240" r="6" fill="#1476C6" />
            
            
            <circle className="neural-core" cx="230" cy="155" r="14" fill="#29C7D8" />
            <circle className="neural-core-inner" cx="230" cy="155" r="8" fill="#1476C6" />
            <circle cx="230" cy="155" r="4" fill="#FFFFFF" />
          </g>
          
          
          <g className="hero-neural-connections" stroke="#29C7D8" strokeWidth="1.8" strokeLinecap="round" opacity="0.75">
            <path d="M150,130 Q180,115 210,100" />
            <path d="M210,100 Q245,108 280,115" />
            <path d="M280,115 Q270,140 260,165" />
            <path d="M260,165 Q225,175 190,185" />
            <path d="M190,185 Q155,170 120,155" />
            <path d="M120,155 Q110,182 100,210" />
            <path d="M100,210 Q112,232 125,255" />
            <path d="M125,255 Q152,265 180,275" />
            <path d="M180,275 Q205,257 230,240" />
            <path d="M230,240 Q230,198 230,155" />
            <path d="M210,100 Q230,127 230,155" />
            <path d="M280,115 Q255,135 230,155" />
            <path d="M260,165 Q245,155 230,155" />
            <path d="M190,185 Q210,170 230,155" />
            <path d="M120,155 Q175,155 230,155" />
            <path d="M100,210 Q165,182 230,155" />
            <path d="M125,255 Q177,247 230,240" />
          </g>
          
          
          <circle className="neural-heart" cx="230" cy="155" r="16" fill="url(#neural-glow)" />
        </g>
        
        
        <ellipse cx="200" cy="130" rx="45" ry="25" fill="#FFFFFF" opacity="0.15" filter="url(#hero-soft-glow)" />
        <ellipse cx="250" cy="180" rx="35" ry="20" fill="#29C7D8" opacity="0.08" filter="url(#hero-soft-glow)" />
        
        
        <path
          d="M380,255 C405,270 415,295 410,315 C405,328 390,320 375,310 C365,300 365,285 380,255 Z"
          fill="url(#hero-body-gradient)"
        />
        
        
        <path d="M80,285 C60,295 40,290 35,280 C30,270 35,265 48,270 C62,275 72,280 80,285 Z" fill="url(#hero-body-gradient)" />
        
        
        <g opacity="0.08" stroke="#1476C6" strokeWidth="0.5" fill="none">
          <path d="M150,290 Q200,290 250,290" />
          <path d="M140,310 Q200,310 260,310" />
          <path d="M150,330 Q200,330 250,330" />
        </g>
      </g>
    </svg>
  );
}