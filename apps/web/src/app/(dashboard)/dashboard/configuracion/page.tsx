'use client';

import { useQuery } from '@tanstack/react-query';
import { Settings, ShieldCheck, Activity, Database } from 'lucide-react';
import { NeurofamiliaMasterLayout } from '@/components/layout/neurofamilia-master-layout';
import { NeuroSurface } from '@/components/ui/neuro-surface';
import { api } from '@/lib/api';
import { API_BASE_URL } from '@/lib/constants';

export default function ConfiguracionPage() {
  const healthQuery = useQuery({
    queryKey: ['health'],
    queryFn: api.health,
    retry: 1,
  });

  const healthStatus = healthQuery.data?.status ?? 'No disponible';
  const databaseStatus = healthQuery.data?.database ?? 'No disponible';
  const version = healthQuery.data?.version ?? 'No disponible';

  return (
    <NeurofamiliaMasterLayout profileName="Comunidad activa" activeLabel="Configuracion">
      <div className="space-y-6 pb-10 pt-8 sm:space-y-8 sm:pt-10">
        <section className="rounded-[32px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(238,248,253,0.80))] p-6 shadow-[0_28px_80px_rgba(0,61,120,0.10)] sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0069B7]">
            <Settings className="h-3.5 w-3.5" />
            Modulo Configuracion
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#002A68] [font-family:Nunito,ui-rounded,system-ui,sans-serif] sm:text-5xl">
            Parametros operativos y estado de conexion en tiempo real.
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#33618D] sm:text-base">
            Esta vista muestra la configuracion activa del frontend y una verificacion real del endpoint de salud.
            Si algun dato no esta disponible, se muestra en estado No disponible.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <NeuroSurface className="bg-[#FFFFFF]/90 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Estado API</p>
              <p className="mt-2 text-3xl font-semibold text-[#003D78]">{healthStatus}</p>
            </NeuroSurface>

            <NeuroSurface className="bg-[#FFFFFF]/90 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Base de datos</p>
              <p className="mt-2 text-3xl font-semibold text-[#003D78]">{databaseStatus}</p>
            </NeuroSurface>

            <NeuroSurface className="bg-[#FFFFFF]/90 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-[#5F8DB5]">Version API</p>
              <p className="mt-2 text-3xl font-semibold text-[#003D78]">{version}</p>
            </NeuroSurface>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <NeuroSurface>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6ECFA] bg-[#EFF8FE] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0069B7]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Configuracion activa
            </div>

            <div className="space-y-3 text-sm text-[#1D4E7B]">
              <p>
                <span className="font-semibold text-[#003D78]">API Base URL:</span> {API_BASE_URL}
              </p>
              <p>
                <span className="font-semibold text-[#003D78]">Variable:</span> NEXT_PUBLIC_API_BASE_URL
              </p>
            </div>
          </NeuroSurface>

          <NeuroSurface>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6ECFA] bg-[#EFF8FE] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0069B7]">
              <Activity className="h-3.5 w-3.5" />
              Telemetria de salud
            </div>

            {healthQuery.isLoading ? (
              <p className="text-sm text-[#5F8DB5]">Consultando endpoint /health...</p>
            ) : null}

            {healthQuery.isError ? (
              <p className="text-sm text-rose-600">No disponible. No se pudo leer el estado de salud de la API.</p>
            ) : null}

            {!healthQuery.isLoading && !healthQuery.isError ? (
              <div className="space-y-3 text-sm text-[#1D4E7B]">
                <p>
                  <span className="font-semibold text-[#003D78]">Status:</span> {healthStatus}
                </p>
                <p>
                  <span className="font-semibold text-[#003D78]">Database:</span> {databaseStatus}
                </p>
                <p>
                  <span className="font-semibold text-[#003D78]">Version:</span> {version}
                </p>
                <p>
                  <span className="font-semibold text-[#003D78]">Timestamp:</span>{' '}
                  {healthQuery.data?.timestamp ?? 'No disponible'}
                </p>
              </div>
            ) : null}

            <div className="mt-5 rounded-2xl border border-dashed border-[#CEE2F1] bg-[#F7FBFF] p-4 text-sm text-[#5F8DB5]">
              Integraciones externas de notificaciones: No disponible.
              <br />
              Gestion de credenciales desde UI: No disponible.
              <br />
              Configuracion avanzada de seguridad: No disponible.
            </div>
          </NeuroSurface>
        </div>
      </div>
    </NeurofamiliaMasterLayout>
  );
}