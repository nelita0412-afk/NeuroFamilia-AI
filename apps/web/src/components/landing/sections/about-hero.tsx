import Image from 'next/image';

/* Capas atmosféricas estáticas sobre HERO-5 (posiciones en % del propio hero,
   derivadas del análisis de píxeles de la imagen — no alteran la composición) */

const NODOS_CONEXION = [
  { x: 84.7, y: 66.5 },
  { x: 76.8, y: 15.5 },
  { x: 52.3, y: 86.9 },
  { x: 56.1, y: 52.8 },
  { x: 29.7, y: 65.3 },
];

const BRUMA_MAR = [
  { x: 16, y: 72, s: 34 },
  { x: 47, y: 89, s: 40 },
  { x: 66, y: 30, s: 30 },
];

export function AboutHeroSection() {
  return (
    <section className="js-about-hero relative flex w-full justify-center overflow-hidden bg-[#032458]">
      {/* HERO-5 · portada institucional del ecosistema NeuroFamilia */}
      {/* Banner estático de ancho completo: la altura deriva del aspect ratio nativo (1672×940) */}
      <Image
        src="/images/landing/hero-5.png"
        alt="Ecosistema NeuroFamilia: conexión entre comunidades insulares de Galápagos"
        width={1672}
        height={940}
        priority
        unoptimized
        className="js-about-hero-image block h-auto w-full object-contain"
      />

      {/* Neblina oceánica muy sutil sobre zonas del mar */}
      {BRUMA_MAR.map((b, i) => (
        <div
          key={`bruma-${i}`}
          aria-hidden="true"
          className="pointer-events-none absolute aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: `${b.s}%`,
            background:
              'radial-gradient(closest-side, rgba(150,195,230,0.055), transparent 72%)',
          }}
        />
      ))}

      {/* Brillo discreto en los nodos de conexión entre islas */}
      {NODOS_CONEXION.map((n, i) => (
        <div
          key={`nodo-${i}`}
          aria-hidden="true"
          className="pointer-events-none absolute aspect-square w-[9%] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            background:
              'radial-gradient(circle closest-side, rgba(0,184,217,0.13), transparent 70%)',
          }}
        />
      ))}

      {/* Profundidad ligera en los bordes — viñeta institucional */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 118% 96% at 50% 44%, transparent 56%, rgba(1,22,56,0.26) 100%)',
        }}
      />

      {/* Neblina institucional sutil — degradado navy que unifica sin ocultar contenido */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,36,88,0.20)_0%,rgba(3,36,88,0.04)_36%,rgba(2,31,76,0.10)_68%,rgba(1,24,62,0.30)_100%)]"
      />

      {/* Título institucional invisible — semántica/SEO sin competir con la imagen */}
      <h1 className="sr-only">
        Construyendo bienestar desde Galápagos para las nuevas generaciones
      </h1>
    </section>
  );
}
