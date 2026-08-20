import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function Input(
  { className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={cn(
        'w-full rounded-xl border border-ocean-200 bg-white px-3 py-2 text-sm text-ink outline-none transition focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200',
        className,
      )}
      {...props}
    />
  );
});