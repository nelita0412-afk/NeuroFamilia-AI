'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { api } from '@/lib/api';
import { setAccessToken } from '@/lib/storage';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const schema = z.object({
  email: z.string().email('Correo invalido'),
  password: z.string().min(1, 'Ingresa tu clave'),
});

type FormValues = z.infer<typeof schema>;

export function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const loginMutation = useMutation({
    mutationFn: api.login,
    onSuccess: (response) => {
      setAccessToken(response.access_token);
      router.push('/dashboard');
    },
  });

  const onSubmit = handleSubmit((values) => {
    loginMutation.mutate(values);
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Correo</label>
        <Input type="email" placeholder="madre@familia.ai" {...register('email')} />
        {errors.email ? <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p> : null}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Clave</label>
        <Input type="password" placeholder="********" {...register('password')} />
        {errors.password ? <p className="mt-1 text-xs text-rose-600">{errors.password.message}</p> : null}
      </div>

      {loginMutation.error ? (
        <p className="rounded-xl bg-rose-50 px-3 py-2 text-sm text-rose-700">No fue posible iniciar sesion.</p>
      ) : null}

      <Button type="submit" className="w-full" disabled={loginMutation.isPending}>
        {loginMutation.isPending ? 'Ingresando...' : 'Entrar'}
      </Button>
    </form>
  );
}