import type { HTMLAttributes, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export function NeuroSurface({ children, className = '', ...props }: Props) {
  return (
    <section
      className={`rounded-[26px] bg-white p-6 shadow-[0_16px_34px_rgba(0,61,120,0.10)] sm:p-7 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
