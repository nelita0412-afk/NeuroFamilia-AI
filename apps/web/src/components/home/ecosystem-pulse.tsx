type EcosystemPulseProps = {
  status: string | undefined;
  database: string | undefined;
  version: string | undefined;
};

// Estado del sistema como senal ambiental discreta, no como tarjeta de estado administrativa.
export function EcosystemPulse({ status, database, version }: EcosystemPulseProps) {
  const healthy = status === 'ok' && database === 'up';

  return (
    <section
      role="status"
      aria-live="polite"
      className="flex flex-col items-center gap-2 rounded-full border border-sky-100 bg-white/60 px-5 py-3 text-center text-xs text-slate-600 sm:flex-row sm:justify-center sm:gap-3"
    >
      <span className="relative flex h-2.5 w-2.5" aria-hidden>
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${healthy ? 'bg-cyan-400' : 'bg-amber-400'}`}
        />
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${healthy ? 'bg-cyan-500' : 'bg-amber-500'}`} />
      </span>
      <span>
        {healthy ? 'El ecosistema respira con normalidad' : 'Estamos revisando la corriente del sistema'}
        {version ? ` · v${version}` : ''}
      </span>
    </section>
  );
}
