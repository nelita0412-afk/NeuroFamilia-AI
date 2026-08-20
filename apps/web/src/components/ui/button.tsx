import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const styles: Record<Variant, string> = {
  primary: 'bg-ocean-600 text-white shadow-ocean-card hover:bg-ocean-700',
  secondary: 'bg-ocean-100 text-ocean-800 hover:bg-ocean-200',
  ghost: 'bg-transparent text-ocean-800 hover:bg-ocean-100',
  danger: 'bg-rose-600 text-white hover:bg-rose-500',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'primary', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50',
        styles[variant],
        className,
      )}
      {...props}
    />
  );
});