import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function TerritorySection() {
  return (
    <section
      id="territorio"
      className="js-territory relative overflow-hidden bg-white px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="js-territory-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
          Nacido en Galápagos
        </p>
        <h2 className="js-territory-title mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
          Una isla, una pregunta, una respuesta
        </h2>
        <p className="js-territory-body mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#072A5C]">
          Galápagos es un territorio donde la distancia no se mide en kilómetros, sino en acceso:
          acceso a educación, a salud, a quién preguntar. NeuroFamilia nació aquí para acortar esa
          distancia — con ciencia, con presencia y con guías que conocen cada isla.
        </p>
        <div className="js-territory-cta mt-8">
          <Link
            href="/historia"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0066CC] transition-colors hover:text-[#0B3B82]"
          >
            Conocer nuestra historia
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}