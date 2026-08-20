const NEURAL: Array<{ x: number; y: number }> = [
  { x: 112, y: 218 },
  { x: 162, y: 152 },
  { x: 236, y: 132 },
  { x: 306, y: 168 },
  { x: 322, y: 216 },
  { x: 252, y: 232 },
  { x: 176, y: 232 },
  { x: 128, y: 226 },
];

const NEURAL_LINKS: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 0],
  [1, 7],
  [2, 6],
  [3, 5],
  [0, 5],
];

export function HeroTurtle({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 460 430"
      fill="none"
      role="img"
      aria-label="Tortuga NeuroFamilia con caparazón neuronal luminoso"
    >
      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="0.30" />
          <stop offset="55%" stopColor="#1476C6" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#29C7D8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hero-shell-inner" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#F8FBFF" />
          <stop offset="70%" stopColor="#E8F6FB" />
          <stop offset="100%" stopColor="#D9F0F9" />
        </radialGradient>
        <linearGradient id="hero-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#29C7D8" />
          <stop offset="55%" stopColor="#1476C6" />
          <stop offset="100%" stopColor="#0A4E9B" />
        </linearGradient>
      </defs>

      {/* Resplandor general */}
      <ellipse cx="225" cy="215" rx="200" ry="175" fill="url(#hero-glow)" />

      {/* Cola */}
      <path
        d="M62,232 C42,220 20,214 8,228 C14,248 40,252 64,244 Z"
        fill="#F8FBFF"
      />
      {/* Aleta trasera */}
      <path
        d="M96,262 C62,282 36,308 44,328 C54,342 82,322 110,296 C122,278 112,268 96,262 Z"
        fill="#F8FBFF"
      />
      {/* Cuerpo */}
      <path
        d="M58,240 C96,292 258,300 300,232 C292,262 246,282 194,287 C132,292 82,276 58,240 Z"
        fill="#F8FBFF"
      />
      {/* Aleta delantera */}
      <path
        d="M272,258 C308,270 342,298 338,318 C328,332 300,318 268,292 C254,276 262,262 272,258 Z"
        fill="#F8FBFF"
      />
      {/* Cabeza */}
      <path
        d="M300,204 C330,186 362,196 372,212 C370,236 336,240 296,232 C288,216 292,208 300,204 Z"
        fill="#F8FBFF"
      />
      {/* Ojo amigable */}
      <ellipse cx="352" cy="196" rx="10" ry="12" fill="#F8FBFF" stroke="#29C7D8" strokeWidth="2" />
      <circle cx="354" cy="198" r="5" fill="#1476C6" />
      <circle cx="356" cy="195.5" r="1.8" fill="#F8FBFF" />
      {/* Mejilla */}
      <circle cx="334" cy="218" r="5.5" fill="#29C7D8" opacity="0.22" />
      {/* Sonrisa */}
      <path
        d="M352,222 Q366,234 380,220"
        stroke="#0A4E9B"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Caparazón: red neuronal luminosa */}
      <path
        d="M60,242 C48,150 128,96 216,102 C320,108 370,162 356,242 C308,252 116,252 60,242 Z"
        fill="url(#hero-shell-inner)"
      />
      <path
        d="M60,242 C48,150 128,96 216,102 C320,108 370,162 356,242"
        fill="none"
        stroke="url(#hero-rim)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M74,240 C64,160 134,110 214,114"
        fill="none"
        stroke="#1476C6"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Web neuronal */}
      {NEURAL_LINKS.map(([a, b], i) => {
        const p1 = NEURAL[a];
        const p2 = NEURAL[b];
        const mx = (p1.x + p2.x) / 2 + (i % 2 === 0 ? 10 : -10);
        const my = (p1.y + p2.y) / 2 - 8;
        return (
          <path
            key={i}
            className="js-hero-node-line"
            d={`M${p1.x},${p1.y} Q${mx},${my} ${p2.x},${p2.y}`}
            stroke="#29C7D8"
            strokeWidth="2.4"
            strokeLinecap="round"
            opacity="0.7"
          />
        );
      })}
      {NEURAL.map((n, i) => (
        <g key={i}>
          <circle className="js-hero-node-halo" cx={n.x} cy={n.y} r="14" fill="#29C7D8" opacity="0.16" />
          <circle
            className="js-hero-node"
            cx={n.x}
            cy={n.y}
            r="4.8"
            fill={i % 2 === 0 ? '#29C7D8' : '#1476C6'}
          />
        </g>
      ))}
      <circle cx="216" cy="102" r="3.2" fill="#29C7D8" />
    </svg>
  );
}