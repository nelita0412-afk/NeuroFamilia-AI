import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  BookOpen,
  MessageCircleHeart,
} from 'lucide-react';

const HUBS = [
  {
    icon: Activity,
    title: 'Seguimiento del avance',
    detail: 'Datos claros de desarrollo: qué avanza y qué pide atención, con informes por etapa.',
    href: '/plataforma',
    linkLabel: 'Ver la plataforma',
  },
  {
    icon: MessageCircleHeart,
    title: 'NeuroMentores',
    detail: 'Ocho guías con identidad propia para conversar y recibir un paso concreto.',
    href: '/neuromentores',
    linkLabel: 'Conocer los mentores',
  },
  {
    icon: BookOpen,
    title: 'Recursos y servicios',
    detail: 'Contenido por edad y servicios para cada necesidad, listos para hoy.',
    href: '/servicios',
    linkLabel: 'Ver los servicios',
  },
];

export function HubSection() {
  return (
    <section
      id="hub"
      className="js-hub relative overflow-hidden bg-white px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="js-hub-kicker text-xs font-bold uppercase tracking-[0.3em] text-[#0066CC]">
            Qué encuentras aquí
          </p>
          <h2 className="js-hub-title mt-3 text-3xl font-extrabold leading-tight text-[#0B3B82] sm:text-4xl">
            Un mismo lugar para cada etapa del crecimiento
          </h2>
          <p className="js-hub-body mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#072A5C]">
            Tres puertas, un mismo hilo: saber cómo va, preguntar a un mentor y tener el recurso
            adecuado.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HUBS.map(({ icon: Icon, title, detail, href, linkLabel }) => (
            <li key={title} className="js-hub-card">
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-[#0066CC]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(11,59,130,0.14)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#0066CC]/8 text-[#0066CC] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-[#0B3B82]">{title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-6 text-[#072A5C]">{detail}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0066CC]">
                  {linkLabel}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}