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

      {/* Título institucional invisible — semántica/SEO sin competir con la imagen */}
      <h1 className="sr-only">
        Construyendo bienestar desde Galápagos para las nuevas generaciones
      </h1>
    </section>
  );
}
