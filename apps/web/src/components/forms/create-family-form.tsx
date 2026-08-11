'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { api } from '@/lib/api';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const schema = z.object({
  name: z.string().min(3, 'Nombre demasiado corto'),
});

type FormValues = z.infer<typeof schema>;

export function CreateFamilyForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: api.createFamily,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['families'] });
      reset();
    },
  });

  return (
    <form onSubmit={handleSubmit((values) => mutation.mutate(values))} className="flex flex-col gap-3 sm:flex-row">
      <Input placeholder="Familia Gomez" {...register('name')} />
      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Creando...' : 'Crear familia'}
      </Button>
      {formState.errors.name ? <p className="text-xs text-rose-600">{formState.errors.name.message}</p> : null}
    </form>
  );
}