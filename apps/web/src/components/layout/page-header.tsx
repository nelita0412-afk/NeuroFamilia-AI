import { ReactNode } from 'react';

type Props = {
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHeader({ title, description, actions }: Props) {
  return (
    <header className="mb-6 flex flex-col gap-3 rounded-[28px] border border-ocean-100 bg-white/80 p-6 shadow-ocean-card backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-7">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-ocean-900 [font-family:var(--font-nunito)] sm:text-3xl">
          {title}
        </h1>
        <p className="mt-1 text-sm text-ocean-700">{description}</p>
      </div>
      {actions}
    </header>
  );
}