import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export function CtaFinaleSection() {
  return (
    <section
      id="contactar"
      className="js-home-closing relative overflow-hidden bg-[#F0F7FF] px-5 py-20 text-center sm:px-8"
    >
      <span
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#00B8D9]/10 blur-3xl"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#0066CC]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="js-home-closing-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
          Empecemos
        </p>
        <h2 className="js-home-closing-title mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
          Una conversación para tu primer paso
        </h2>
        <p className="js-home-closing-body mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#072A5C]">
          Cuéntanos quién eres y qué necesitas: te mostramos la plataforma con datos reales y te
          proponemos el plan para empezar, sin compromisos.
        </p>

        <div className="js-home-closing-cta mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="mailto:neurofamiliagps@gmail.com?subject=Solicitud%20de%20acceso%20%2D%20NeuroFamilia"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#00B8D9',
              color: '#0B3B82',
              border: '1.5px solid #00B8D9',
              boxShadow: '0 8px 24px rgba(0,184,217,0.35)',
            }}
          >
            Solicitar acceso
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href="tel:+593980406055"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 hover:bg-[#0B3B82]/5"
            style={{ color: '#0B3B82', border: '1.5px solid rgba(11,59,130,0.35)' }}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Llamar · +593 98 040 6055
          </a>
        </div>

        <p className="mt-6 inline-flex items-center gap-2 text-[13px] text-[#0B3B82]/60">
          <Mail className="h-4 w-4" aria-hidden="true" />
          neurofamiliagps@gmail.com
        </p>
      </div>
    </section>
  );
}