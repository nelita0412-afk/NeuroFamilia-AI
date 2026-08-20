import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-ocean-100 bg-white/90 shadow-ocean-card backdrop-blur',
        className,
      )}
      {...props}
    />
  );
}