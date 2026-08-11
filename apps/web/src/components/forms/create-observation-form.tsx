'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { api } from '@/lib/api';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const schema = z.object({
  profileId: z.string().min(1),
  category: z.enum(['strength', 'opportunity']),
  note: z.string().min(3),
});

type FormValues = z.infer<typeof schema>;

export function CreateObservationForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      category: 'strength',
    },
  });

  const mutation = useMutation({
    mutationFn: api.createObservation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['growth-report'] });
      reset();
    },
  });

  return (
    <form onSubmit={handleSubmit((values) => mutation.mutate(values))} className="space-y-3">
      <Input placeholder="Profile ID" {...register('profileId')} />
      <select
        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
        {...register('category')}
      >
        <option value="strength">Fortaleza</option>
        <option value="opportunity">Oportunidad</option>
      </select>
      <Textarea placeholder="Observacion clinica" rows={4} {...register('note')} />
      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Guardando...' : 'Guardar observacion'}
      </Button>
    </form>
  );
}