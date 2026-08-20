const NEURAL: Array<{ x: number; y: number }> = [
  { x: 135, y: 175 },
  { x: 195, y: 140 },
  { x: 260, y: 165 },
  { x: 285, y: 210 },
  { x: 215, y: 215 },
  { x: 155, y: 215 },
];

const NEURAL_LINKS: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [1, 4],
  [0, 5],
];

export function HeroTurtle({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 400"
      fill="none"
      role="img"
      aria-label="Tortuga NeuroFamilia con caparazón neuronal"
    >
      <defs>
        <radialGradient id="hero-shell-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#29C7D8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="200" cy="205" rx="175" ry="150" fill="url(#hero-shell-glow)" />

      {/* Cola */}
      <path
        d="M60,225 C40,215 20,210 8,222 C14,240 38,244 62,238 Z"
        fill="#F8FBFF"
      />
      {/* Aleta trasera */}
      <path
        d="M92,258 C60,275 35,300 42,318 C52,330 78,312 106,288 C116,272 108,262 92,258 Z"
        fill="#F8FBFF"
      />
      {/* Cuerpo (vientre) */}
      <path
        d="M55,235 C90,285 250,290 292,228 C285,255 240,275 190,280 C130,285 80,270 55,235 Z"
        fill="#F8FBFF"
      />
      {/* Aleta delantera */}
      <path
        d="M268,255 C300,270 330,300 325,318 C315,330 290,315 262,290 C252,275 258,260 268,255 Z"
        fill="#F8FBFF"
      />
      {/* Cabeza */}
      <path
        d="M295,200 C330,185 355,195 362,210 C352,232 320,235 292,228 C288,212 290,204 295,200 Z"
        fill="#F8FBFF"
      />
      <circle cx="330" cy="205" r="5" fill="#29C7D8" />
      <circle cx="332" cy="203" r="1.6" fill="#F8FBFF" />

      {/* Caparazón */}
      <path
        d="M55,235 C45,150 120,100 205,105 C300,110 355,160 345,235 C300,245 120,245 55,235 Z"
        fill="#F8FBFF"
      />
      <path
        d="M55,235 C45,150 120,100 205,105 C300,110 355,160 345,235"
        fill="none"
        stroke="#29C7D8"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M66,233 C60,160 122,114 205,118"
        fill="none"
        stroke="#1476C6"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Red neuronal del caparazón */}
      {NEURAL_LINKS.map(([a, b], i) => {
        const p1 = NEURAL[a];
        const p2 = NEURAL[b];
        const mx = (p1.x + p2.x) / 2 + (i % 2 === 0 ? 8 : -8);
        const my = (p1.y + p2.y) / 2 - 6;
        return (
          <path
            key={i}
            className="js-hero-node-line"
            d={`M${p1.x},${p1.y} Q${mx},${my} ${p2.x},${p2.y}`}
            stroke="#29C7D8"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.6"
          />
        );
      })}
      {NEURAL.map((n, i) => (
        <g key={i}>
          <circle className="js-hero-node-halo" cx={n.x} cy={n.y} r="13" fill="#29C7D8" opacity="0.16" />
          <circle
            className="js-hero-node"
            cx={n.x}
            cy={n.y}
            r="4.5"
            fill={i % 2 === 0 ? '#29C7D8' : '#1476C6'}
          />
        </g>
      ))}
      <circle cx="205" cy="105" r="3" fill="#29C7D8" />
    </svg>
  );
}