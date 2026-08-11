import { ReactNode } from 'react';

type Props = {
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHeader({ title, description, actions }: Props) {
  return (
    <header className="mb-6 flex flex-col gap-3 rounded-2xl border border-white/40 bg-white/75 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
      {actions}
    </header>
  );
}