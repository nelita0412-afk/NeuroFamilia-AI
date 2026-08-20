const GROUPS: Array<{ label: string; x: number; y: number }> = [
  { label: 'Niños', x: 150, y: 160 },
  { label: 'Adolescentes', x: 660, y: 130 },
  { label: 'Familias', x: 130, y: 400 },
  { label: 'Profesionales', x: 680, y: 410 },
];

export function CommunityOrbit({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 500" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="comm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#29C7D8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="400" cy="255" r="190" fill="url(#comm-glow)" opacity="0.6" />

      {GROUPS.map((g, i) => (
        <path
          key={i}
          className="js-comm-line"
          d={`M400,255 L${g.x},${g.y}`}
          stroke="#29C7D8"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="4 6"
          pathLength={1}
          opacity="0.6"
        />
      ))}

      <g className="js-comm-core">
        <circle cx="400" cy="255" r="46" fill="#1476C6" />
        <circle cx="400" cy="255" r="46" fill="none" stroke="#29C7D8" strokeWidth="2" opacity="0.8" />
        <circle cx="400" cy="255" r="8" fill="#F8FBFF" />
      </g>

      {GROUPS.map((g, i) => (
        <g key={i} className={`js-comm-node js-comm-node-${i + 1}`}>
          <circle cx={g.x} cy={g.y} r="52" fill="#0A4E9B" opacity="0.9" />
          <circle cx={g.x} cy={g.y} r="52" fill="none" stroke="#29C7D8" strokeWidth="1.5" opacity="0.7" />
          <circle cx={g.x} cy={g.y} r="7" fill="#29C7D8" />
          <text
            x={g.x}
            y={g.y + 4}
            textAnchor="middle"
            fill="#F8FBFF"
            fontSize="19"
            fontWeight="700"
            letterSpacing="0.1em"
          >
            {g.label.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}