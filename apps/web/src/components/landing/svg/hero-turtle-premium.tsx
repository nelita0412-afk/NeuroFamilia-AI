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
        {/* Gradientes premium para piel 3D */}
        <radialGradient id="turtle-skin" cx="50%" cy="55%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F8FBFF" />
          <stop offset="100%" stopColor="#E8F4FB" />
        </radialGradient>
        
        <linearGradient id="turtle-rim-light" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#1476C6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0A4E9B" stopOpacity="0.8" />
        </linearGradient>
        
        <radialGradient id="turtle-subsurface" cx="55%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#1476C6" stopOpacity="0.03" />
        </radialGradient>
        
        <radialGradient id="neural-shell-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#1476C6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0A4E9B" stopOpacity="0" />
        </radialGradient>
        
        <radialGradient id="neural-node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="1" />
          <stop offset="70%" stopColor="#1476C6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0A4E9B" stopOpacity="0" />
        </radialGradient>
        
        <filter id="turtle-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        <filter id="turtle-rim-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feMorphology operator="dilate" radius="3" in="SourceAlpha" result="thick" />
          <feGaussianBlur stdDeviation="5" in="thick" result="blur" />
          <feFlood flood-color="#29C7D8" flood-opacity="0.7" result="glowColor" />
          <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Halo principal trasero - halo protector */}
      <ellipse cx="250" cy="270" rx="210" ry="190" fill="url(#neural-shell-glow)" filter="url(#turtle-soft-glow)" opacity="0.6" />
      
      {/* Reflejo de luz en el suelo */}
      <ellipse cx="250" cy="440" rx="150" ry="28" fill="#29C7D8" opacity="0.1" filter="url(#turtle-soft-glow)" />

           CUERPO - Tortuga con volumen 3D, expresión protectora
      <g filter="url(#turtle-rim-glow)">
        {/* Cola con volumen */}
        <path
          d="M90,300 C70,310 55,315 50,305 C45,295 55,285 70,285 C85,285 95,295 90,300 Z"
          fill="url(#turtle-skin)"
        />
        
        {/* Aleta trasera izquierda */}
        <path
          d="M125,325 C95,350 75,380 90,400 C100,415 120,400 135,380 C147,365 140,345 125,325 Z"
          fill="url(#turtle-skin)"
        />
        <path d="M120,340 C100,360 90,380 105,388 C120,375 130,360 120,340 Z" fill="#E8F4FB" opacity="0.6" />
        
        {/* Cuerpo principal - vientre con subsurface scattering */}
        <path
          d="M85,275 C115,340 295,345 385,285 C405,255 380,225 290,220 C210,215 130,240 85,275 Z"
          fill="url(#turtle-skin)"
        />
        <ellipse cx="235" cy="270" rx="110" ry="50" fill="url(#turtle-subsurface)" />
        
        {/* Aleta delantera izquierda con volumen */}
        <path
          d="M330,275 C355,295 370,320 365,340 C360,355 345,355 325,345 C310,340 315,325 330,275 Z"
          fill="url(#turtle-skin)"
        />
        <path d="M325,300 C335,315 342,320 338,328 C332,325 325,315 325,300 Z" fill="#E8F4FB" opacity="0.7" />
        
        {/* Cabeza - expresión inteligente, amable, protectora */}
        <path
          d="M390,190 C435,170 465,165 470,190 C475,210 465,230 395,230 C315,230 240,230 200,215 C175,205 165,195 165,203 C165,210 175,217 188,210 C205,205 215,200 230,203 C250,207 270,215 285,213 C300,210 315,205 390,190 Z"
          fill="url(#turtle-skin)"
          filter="url(#turtle-rim-glow)"
        />
        
        {/* Mejilla - calidez */}
        <ellipse cx="315" cy="238" rx="14" ry="9" fill="#29C7D8" opacity="0.18" />
        
        {/* Ojo - inteligente, vivo, con profundidad */}
        <g className="hero-eye">
          {/* Esclerótica con brillo sutil */}
          <ellipse cx="420" cy="183" rx="15" ry="17" fill="#FFFFFF" stroke="#29C7D8" strokeWidth="1.5" />
          {/* Iris con profundidad y calidez */}
          <ellipse cx="422" cy="185" rx="10" ry="11" fill="#1476C6" />
          {/* Pupila - foco inteligente */}
          <circle cx="423" cy="186" r="5" fill="#0A4E9B" />
          {/* Destello principal - vida e inteligencia */}
          <circle cx="425" cy="182" r="4" fill="#FFFFFF" opacity="0.95" />
          {/* Destello secundario - profundidad 3D */}
          <circle cx="418" cy="180" r="2" fill="#FFFFFF" opacity="0.6" />
          {/* Párpado superior - expresión amable y protectora */}
          <path d="M406,175 Q420,168 432,176 C438,179 435,185 428,188 Z" fill="#F8FBFF" opacity="0.9" />
        </g>
        
        {/* Ceja sutil - expresión atenta */}
        <path d="M405,165 Q420,158 435,167" stroke="#1476C6" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
        
        {/* Sonrisa cálida, genuina, protectora */}
        <path 
          className="hero-smile"
          d="M375,240 Q410,258 440,242" 
          stroke="#0A4E9B" 
          strokeWidth="4" 
          strokeLinecap="round" 
          fill="none"
        />
        
        {/* Hoyuelos de la sonrisa */}
        <ellipse cx="382" cy="248" rx="6" ry="4" fill="#1476C6" opacity="0.15" />
        <ellipse cx="430" cy="248" rx="6" ry="4" fill="#1476C6" opacity="0.15" />
        
           CAPARAZÓN NEURAL LUMINOSO - Corazón visual y tecnológico
        <g className="hero-shell-neural">
          {/* Caparazón base con volumen y luz */}
          <path
            d="M75,275 C35,210 25,170 95,125 C145,80 215,65 265,70 C275,68 285,66 295,68 C345,70 385,95 385,145 C390,195 380,230 320,255 C270,275 210,290 150,295 C90,298 60,285 75,275 Z"
            fill="url(#turtle-skin)"
            stroke="url(#turtle-rim-light)"
            strokeWidth="4.5"
          />
          
          {/* Luz interna del caparazón */}
          <path d="M105,255 C85,195 130,145 195,120 C235,100 270,110 265,140 C260,170 245,195 235,215 C225,235 210,245 195,235 C175,235 155,250 135,250 Z" fill="#E8F4FB" opacity="0.5" />
          
          {/* Borde luminoso del caparazón */}
          <path
            d="M75,275 C35,210 25,170 95,125 C145,80 215,65 265,70 C275,68 285,66 295,68 C345,70 385,95 385,145 C390,195 370,220 310,245 C260,265 210,280 150,295 C90,298 60,285 75,275 Z"
            fill="none"
            stroke="url(#turtle-rim-light)"
            strokeWidth="4"
            opacity="0.9"
          />
          
          {/* Reflejo especular en el caparazón */}
          <ellipse cx="210" cy="145" rx="50" ry="30" fill="#FFFFFF" opacity="0.12" filter="url(#turtle-soft-glow)" />
          <ellipse cx="260" cy="190" rx="40" ry="22" fill="#29C7D8" opacity="0.06" filter="url(#turtle-soft-glow)" />
          
               RED NEURAL LUMINOSA - El cerebro del ecosistema
          <g className="hero-shell-neural">
            {/* Nodos neuronales - posiciones orgánicas en el caparazón */}
            <g className="hero-neural-nodes">
              <circle className="neural-node hero-node-1" cx="160" cy="140" r="12" fill="#29C7D8" />
              <circle className="neural-node hero-node-2" cx="220" cy="110" r="10" fill="#1476C6" />
              <circle className="neural-node hero-node-3" cx="290" cy="125" r="13" fill="#29C7D8" />
              <circle className="neural-node hero-node-4" cx="270" cy="175" r="11" fill="#1476C6" />
              <circle className="neural-node hero-node-5" cx="200" cy="195" r="12" fill="#29C7D8" />
              <circle className="neural-node hero-node-6" cx="130" cy="165" r="11" fill="#1476C6" />
              <circle className="neural-node hero-node-7" cx="110" cy="220" r="13" fill="#29C7D8" />
              <circle className="neural-node hero-node-8" cx="135" cy="265" r="12" fill="#1476C6" />
              <circle className="neural-node hero-node-9" cx="190" cy="285" r="13" fill="#29C7D8" />
              <circle className="neural-node hero-node-10" cx="240" cy="250" r="14" fill="#1476C6" />
              
              {/* Halo de cada nodo */}
              <circle className="neural-halo hero-halo-1" cx="160" cy="140" r="17" fill="#29C7D8" opacity="0.18" />
              <circle className="neural-halo hero-halo-2" cx="220" cy="110" r="15" fill="#1476C6" opacity="0.15" />
              <circle className="neural-halo hero-halo-3" cx="290" cy="115" r="18" fill="#29C7D8" opacity="0.18" />
              <circle className="neural-halo hero-halo-4" cx="270" cy="175" r="16" fill="#1476C6" opacity="0.15" />
              <circle className="neural-halo hero-halo-4" cx="200" cy="195" r="17" fill="#29C7D8" opacity="0.18" />
              <circle className="neural-halo hero-halo-6" cx="130" cy="165" r="16" fill="#1476C6" opacity="0.15" />
              <circle className="neural-halo hero-halo-7" cx="110" cy="220" r="18" fill="#29C7D8" opacity="0.18" />
              <circle className="neural-halo hero-halo-8" cx="135" cy="265" r="17" fill="#1476C6" opacity="0.15" />
              <circle className="neural-halo hero-halo-9" cx="190" cy="285" r="18" fill="#29C7D8" opacity="0.18" />
              <circle className="neural-halo hero-halo-10" cx="240" cy="250" r="19" fill="#1476C6" opacity="0.15" />
              
              {/* Núcleo de cada nodo */}
              <circle cx="160" cy="140" r="5.5" fill="#29C7D8" />
              <circle cx="220" cy="110" r="4.5" fill="#1476C6" />
              <circle cx="290" cy="125" r="6" fill="#29C7D8" />
              <circle cx="270" cy="175" r="5" fill="#1476C6" />
              <circle cx="200" cy="195" r="5.5" fill="#29C7D8" />
              <circle cx="130" cy="165" r="5" fill="#1476C6" />
              <circle cx="110" cy="220" r="6" fill="#29C7D8" />
              <circle cx="135" cy="265" r="5.5" fill="#1476C6" />
              <circle cx="190" cy="285" r="6" fill="#29C7D8" />
              <circle cx="240" cy="250" r="6.5" fill="#1476C6" />
              
              {/* Núcleo central - el cerebro del ecosistema */}
              <circle className="neural-core" cx="230" cy="160" r="16" fill="url(#neural-shell-glow)" />
              <circle className="neural-core-inner" cx="230" cy="160" r="9" fill="#1476C6" />
              <circle cx="230" cy="160" r="4.5" fill="#FFFFFF" />
            </g>
            
            {/* Conexiones neuronales orgánicas entre nodos */}
            <g className="hero-neural-connections" stroke="#29C7D8" strokeWidth="2" strokeLinecap="round" opacity="0.8">
              <path d="M160,140 Q190,125 220,110" />
              <path d="M220,110 Q255,118 290,125" />
              <path d="M290,125 Q280,150 270,175" />
              <path d="M270,175 Q235,185 200,195" />
              <path d="M200,195 Q165,180 130,165" />
              <path d="M130,165 Q120,188 110,220" />
              <path d="M110,220 Q122,245 135,265" />
              <path d="M135,265 Q158,275 190,285" />
              <path d="M190,285 Q215,262 240,250" />
              <path d="M240,250 Q230,205 230,160" />
              <path d="M220,110 Q230,135 230,160" />
              <path d="M290,125 Q260,142 230,160" />
              <path d="M270,175 Q250,165 230,160" />
              <path d="M200,195 Q215,180 230,160" />
              <path d="M130,165 Q180,160 230,160" />
              <path d="M110,220 Q170,190 230,160" />
              <path d="M135,265 Q187,252 240,250" />
            </g>
            
            {/* Núcleo central pulsante - el corazón neural del ecosistema */}
            <circle className="neural-heart" cx="230" cy="160" r="18" fill="url(#neural-shell-glow)" />
          </g>
          
          {/* Reflejo especular en el caparazón */}
          <ellipse cx="210" cy="145" rx="55" ry="30" fill="#FFFFFF" opacity="0.12" filter="url(#turtle-soft-glow)" />
          <ellipse cx="260" cy="195" rx="45" ry="25" fill="#29C7D8" opacity="0.06" filter="url(#turtle-soft-glow)" />
          
          {/* Detalle de textura sutil en el caparazón */}
          <g opacity="0.06" stroke="#1476C6" strokeWidth="0.6" fill="none">
            <path d="M160,295 Q215,295 270,295" />
            <path d="M150,315 Q215,315 280,315" />
            <path d="M155,335 Q215,335 275,335" />
          </g>
        </g>
        
        {/* Aleta delantera derecha - detalle y movimiento */}
        <path
          d="M390,265 C415,280 425,305 405,325 C400,338 390,320 370,310 C360,300 365,285 390,265 Z"
          fill="url(#turtle-skin)"
        />
        
        {/* Cola visible */}
        <path d="M85,295 C65,305 45,300 30,290 C25,280 35,285 48,285 C62,290 72,295 85,295 Z" fill="url(#turtle-skin)" />
        
        {/* Textura sutil de escamas en el cuerpo */}
        <g opacity="0.05" stroke="#1476C6" strokeWidth="0.5" fill="none">
          <path d="M160,305 Q215,305 270,305" />
          <path d="M150,325 Q215,325 280,325" />
          <path d="M155,345 Q215,345 285,345" />
        </g>
      </g>
    </svg>
  );
}