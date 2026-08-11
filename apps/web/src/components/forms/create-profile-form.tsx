'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { api } from '@/lib/api';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const schema = z.object({
  familyId: z.string().min(1),
  fullName: z.string().min(3),
  birthDate: z.string().min(1),
  developmentStage: z.enum(['EARLY_CHILDHOOD', 'MIDDLE_CHILDHOOD', 'ADOLESCENCE']),
});

type FormValues = z.infer<typeof schema>;

export function CreateProfileForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      developmentStage: 'EARLY_CHILDHOOD',
    },
  });

  const mutation = useMutation({
    mutationFn: api.createProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profiles'] });
      reset();
    },
  });

  return (
    <form onSubmit={handleSubmit((values) => mutation.mutate(values))} className="grid gap-3 md:grid-cols-2">
      <Input placeholder="ID de familia" {...register('familyId')} />
      <Input placeholder="Nombre completo" {...register('fullName')} />
      <Input type="date" {...register('birthDate')} />
      <select
        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
        {...register('developmentStage')}
      >
        <option value="EARLY_CHILDHOOD">Early Childhood</option>
        <option value="MIDDLE_CHILDHOOD">Middle Childhood</option>
        <option value="ADOLESCENCE">Adolescence</option>
      </select>
      <Button className="md:col-span-2" type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Creando...' : 'Crear expediente'}
      </Button>
    </form>
  );
}