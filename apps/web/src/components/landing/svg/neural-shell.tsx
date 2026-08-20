const NODES: Array<[number, number]> = [
  [200, 60],
  [110, 110],
  [290, 110],
  [70, 190],
  [170, 200],
  [240, 205],
  [330, 185],
  [105, 280],
  [295, 280],
  [200, 330],
];

const LINKS: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 5],
  [2, 6],
  [3, 7],
  [4, 7],
  [5, 8],
  [6, 8],
  [7, 9],
  [8, 9],
  [4, 5],
];

export function NeuralShell({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden="true">
      {LINKS.map(([a, b], i) => {
        const [x1, y1] = NODES[a];
        const [x2, y2] = NODES[b];
        const mx = (x1 + x2) / 2 + (i % 2 === 0 ? 18 : -18);
        const my = (y1 + y2) / 2 + (i % 2 === 0 ? -14 : 14);
        return (
          <path
            key={i}
            className="js-neural-line"
            d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
            stroke="#29C7D8"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.55"
          />
        );
      })}
      {NODES.map(([cx, cy], i) => (
        <g key={i}>
          <circle
            className="js-node"
            cx={cx}
            cy={cy}
            r="14"
            fill="#29C7D8"
            opacity="0.18"
          />
          <circle
            className="js-node-core"
            cx={cx}
            cy={cy}
            r="5"
            fill={i % 3 === 0 ? '#29C7D8' : '#1476C6'}
          />
        </g>
      ))}
    </svg>
  );
}