export function NeuralParticles({ className = "", count = 30 }: { className?: string; count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => {
    const seed = i * 137.5 + 42;
    const x = ((seed * 17) % 1440) / 1440 * 100;
    const y = ((seed * 23) % 900) / 900 * 100;
    const size = 1 + (seed % 3) * 0.8;
    const opacity = 0.3 + (seed % 5) * 0.12;
    const color = seed % 3 === 0 ? "#29C7D8" : seed % 3 === 1 ? "#1476C6" : "#0A4E9B";
    const speed = 0.8 + (seed % 4) * 0.3;
    return { x, y, size, opacity, color, speed, delay: (seed % 100) / 100 * 2 };
  });

  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true" style={{ width: "100%", height: "100%", position: "absolute", inset: 0, pointerEvents: "none" }}>
      <defs>
        <radialGradient id="particle-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#29C7D8" stopOpacity="1" />
          <stop offset="60%" stopColor="#1476C6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0A4E9B" stopOpacity="0" />
        </radialGradient>
        <filter id="particle-blur">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {particles.map((p, i) => (
        <circle
          key={i}
          className="js-neural-particle"
          cx={p.x}
          cy={p.y}
          r={p.size}
          fill={p.color}
          opacity={p.opacity}
          style={{
            animation: "particle-float-" + (i % 3) + " " + (8 + p.speed) + "s ease-in-out infinite",
            animationDelay: p.delay + "s",
            filter: "url(#particle-blur)"
          } as React.CSSProperties}
        />
      ))}
      <style>{`
        @keyframes particle-float-0 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          25% { transform: translate(-3%, 2%) scale(1.1); opacity: 0.7; }
          50% { transform: translate(2%, -4%) scale(0.9); opacity: 0.5; }
          75% { transform: translate(4%, 1%) scale(1.05); opacity: 0.6; }
        }
        @keyframes particle-float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          25% { transform: translate(3%, -2%) scale(1.1); opacity: 0.7; }
          50% { transform: translate(-2%, 3%) scale(0.9); opacity: 0.5; }
          75% { transform: translate(-4%, -1%) scale(1.05); opacity: 0.6; }
        }
        @keyframes particle-float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          25% { transform: translate(2%, 3%) scale(1.1); opacity: 0.7; }
          50% { transform: translate(-3%, -2%) scale(0.9); opacity: 0.5; }
          75% { transform: translate(1%, -3%) scale(1.05); opacity: 0.6; }
        }
      `}
      </style>
    </svg>
  );
}