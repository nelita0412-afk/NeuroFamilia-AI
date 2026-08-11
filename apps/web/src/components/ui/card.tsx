import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 bg-white/90 shadow-[0_12px_32px_rgba(15,23,42,0.08)] backdrop-blur',
        className,
      )}
      {...props}
    />
  );
}