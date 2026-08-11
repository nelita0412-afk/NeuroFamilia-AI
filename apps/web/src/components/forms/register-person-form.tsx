'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { UserRound } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { api } from '@/lib/api';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(['MOTHER', 'FATHER', 'TUTOR', 'PROFESSIONAL']).default('TUTOR'),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  onSuccess?: () => void;
};

export function RegisterPersonForm({ onSuccess }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      role: 'TUTOR',
    },
  });

  const mutation = useMutation({
    mutationFn: api.register,
    onSuccess: () => {
      reset();
      onSuccess?.();
    },
  });

  return (
    <form className="space-y-6" onSubmit={handleSubmit((values) => mutation.mutate(values))}>
      <div className="flex items-center gap-3 rounded-full border border-sky-100 bg-sky-50/80 px-4 py-3 text-sm text-sky-900">
        <UserRound className="h-4 w-4" />
        Identidad base para ingresar al ecosistema.
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Nombre</label>
          <Input className="h-12 rounded-2xl border-white bg-white/80 px-4" placeholder="Sofia" {...register('firstName')} />
          {errors.firstName ? <p className="text-xs text-rose-600">{errors.firstName.message}</p> : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Apellido</label>
          <Input className="h-12 rounded-2xl border-white bg-white/80 px-4" placeholder="Andrade" {...register('lastName')} />
          {errors.lastName ? <p className="text-xs text-rose-600">{errors.lastName.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Correo</label>
          <Input className="h-12 rounded-2xl border-white bg-white/80 px-4" type="email" placeholder="correo@familia.ai" {...register('email')} />
          {errors.email ? <p className="text-xs text-rose-600">{errors.email.message}</p> : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Rol</label>
          <select
            className="h-12 w-full rounded-2xl border border-white bg-white/80 px-4 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
            {...register('role')}
          >
            <option value="MOTHER">Madre</option>
            <option value="FATHER">Padre</option>
            <option value="TUTOR">Tutor</option>
            <option value="PROFESSIONAL">Profesional</option>
          </select>
          {errors.role ? <p className="text-xs text-rose-600">{errors.role.message}</p> : null}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Clave inicial</label>
        <Input className="h-12 rounded-2xl border-white bg-white/80 px-4" type="password" placeholder="Clave de 8 caracteres" {...register('password')} />
        {errors.password ? <p className="text-xs text-rose-600">{errors.password.message}</p> : null}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70 pt-2">
        <p className="max-w-md text-sm text-slate-500">
          El registro usa el endpoint real de autenticacion. La vinculacion a familia o expediente se hace despues.
        </p>
        <Button type="submit" disabled={mutation.isPending} className="h-12 rounded-full px-6">
          {mutation.isPending ? 'Creando...' : 'Crear persona'}
        </Button>
      </div>
    </form>
  );
}