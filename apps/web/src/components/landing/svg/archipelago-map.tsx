export type Island = {
  id: string;
  label: string;
  x: number;
  y: number;
};

export const ISLANDS: Island[] = [
  { id: 'proposito', label: 'Propósito', x: 250, y: 185 },
  { id: 'emociones', label: 'Emociones', x: 480, y: 120 },
  { id: 'aprendizaje', label: 'Aprendizaje', x: 700, y: 145 },
  { id: 'resiliencia', label: 'Resiliencia', x: 920, y: 225 },
  { id: 'familia', label: 'Familia', x: 1010, y: 425 },
  { id: 'liderazgo', label: 'Liderazgo', x: 855, y: 565 },
  { id: 'creatividad', label: 'Creatividad', x: 615, y: 625 },
  { id: 'tecnologia', label: 'Tecnología', x: 355, y: 565 },
];

const ROUTES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 0],
  [0, 3],
  [1, 6],
];

function islandPath(x: number, y: number) {
  return `M${x - 34},${y} Q${x - 34},${y - 26} ${x},${y - 26} Q${x + 34},${y - 26} ${x + 34},${y} Q${x + 34},${y + 20} ${x},${y + 20} Q${x - 34},${y + 20} ${x - 34},${y} Z`;
}

export function ArchipelagoMap({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 700" fill="none" aria-hidden="true">
      <style>{`
        .js-isle { cursor: pointer; transform-box: fill-box; transform-origin: center; transition: transform .35s ease, filter .35s ease; }
        .js-isle:hover { transform: scale(1.12); filter: drop-shadow(0 0 18px rgba(41,199,216,0.8)); }
      `}</style>
      <defs>
        <radialGradient id="arch-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#29C7D8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="route-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F8FBFF" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      <circle cx="600" cy="380" r="330" fill="url(#arch-glow)" opacity="0.5" />

      {ROUTES.map(([a, b], i) => {
        const from = ISLANDS[a];
        const to = ISLANDS[b];
        const mx = (from.x + to.x) / 2;
        const my = (from.y + to.y) / 2 - 40;
        return (
          <path
            key={i}
            className="js-route"
            d={`M${from.x},${from.y} Q${mx},${my} ${to.x},${to.y}`}
            stroke="url(#route-grad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="7 9"
            pathLength={1}
          />
        );
      })}

      {ISLANDS.map((isl, i) => (
        <g key={isl.id} className={`js-isle js-isle-${i + 1}`}>
          <circle cx={isl.x} cy={isl.y} r="58" fill="url(#arch-glow)" opacity="0.7" />
          <path d={islandPath(isl.x, isl.y)} fill="#1476C6" opacity="0.95" />
          <path d={islandPath(isl.x, isl.y)} fill="#29C7D8" opacity="0.25" transform={`translate(0 -6)`} />
          <circle cx={isl.x} cy={isl.y} r="6" fill="#F8FBFF" opacity="0.9" />
          <text
            className="js-isle-label"
            x={isl.x}
            y={isl.y + 48}
            textAnchor="middle"
            fill="#F8FBFF"
            fontSize="20"
            fontWeight="700"
            letterSpacing="0.12em"
          >
            {isl.label.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}