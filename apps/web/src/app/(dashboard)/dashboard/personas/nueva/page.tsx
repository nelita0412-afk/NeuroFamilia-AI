'use client';

import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { NeurofamiliaMasterLayout } from '@/components/layout/neurofamilia-master-layout';
import { RegisterPersonForm } from '@/components/forms/register-person-form';

export default function NuevaPersonaPage() {
  return (
    <NeurofamiliaMasterLayout profileName="Comunidad activa" activeLabel="Personas">
      <div className="space-y-8">
        <section className="mt-8 overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,249,252,0.78))] p-6 shadow-[0_28px_80px_rgba(7,23,44,0.08)] backdrop-blur sm:mt-10 sm:p-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-900">
              <Sparkles className="h-3.5 w-3.5" />
              Nueva persona
            </div>
            <h1 className="max-w-3xl font-[family-name:var(--font-space)] text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Registrar una nueva presencia dentro del ecosistema.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Esta pantalla usa el endpoint real de registro existente. Crea la persona y deja listo el siguiente paso para vincularla a una familia o a un expediente.
            </p>
          </div>

          <Link
            href="/dashboard/personas"
            className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Personas
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.75rem] border border-white/80 bg-white/70 p-5 shadow-[0_18px_50px_rgba(7,23,44,0.06)] sm:p-7">
            <RegisterPersonForm />
          </div>

          <aside className="rounded-[1.75rem] border border-white/70 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(231,242,247,0.72))] p-6 text-slate-700 shadow-[0_18px_50px_rgba(7,23,44,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Lectura del flujo</p>
            <h2 className="mt-3 font-[family-name:var(--font-space)] text-2xl font-semibold tracking-[-0.03em] text-slate-950">
              Alta simple, sin lenguaje administrativo.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <p>La persona se registra con identidad, rol y acceso de cuenta usando el contrato actual de autenticacion.</p>
              <p>La vinculacion con familia y expediente ocurre en los modulos que ya existen, sin crear endpoints nuevos.</p>
              <p>La asignacion persistida de mentor no existe hoy en backend, por eso el modulo mantiene esa zona preparada sin inventar datos.</p>
            </div>
          </aside>
        </div>
        </section>
      </div>
    </NeurofamiliaMasterLayout>
  );
}