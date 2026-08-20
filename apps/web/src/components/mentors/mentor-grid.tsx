'use client';

import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { MENTORS } from '@/lib/constants';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

export function MentorGrid() {
  const [selectedMentor, setSelectedMentor] = useState<string>('ALBA');
  const [profileId, setProfileId] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const profilesQuery = useQuery({
    queryKey: ['profiles'],
    queryFn: api.listProfiles,
  });

  const chatMutation = useMutation({
    mutationFn: api.mentorChat,
  });

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
      <Card className="p-5">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Mentores NeuroFamilia</h2>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {MENTORS.map((mentor) => {
            const active = mentor === selectedMentor;

            return (
              <button
                key={mentor}
                onClick={() => setSelectedMentor(mentor)}
                className={`rounded-2xl border p-4 text-left transition ${
                  active
                    ? 'border-teal-500 bg-teal-50 shadow-[0_10px_24px_rgba(13,148,136,0.18)]'
                    : 'border-slate-200 bg-white hover:border-teal-300'
                }`}
              >
                <p className="text-sm font-semibold text-slate-900">{mentor}</p>
                <p className="mt-1 text-xs text-slate-500">Ilustracion oficial pendiente</p>
              </button>
            );
          })}
        </div>
      </Card>

      <Card className="p-5">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Chat con {selectedMentor}</h2>
        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-700">Perfil</label>
          <select
            value={profileId}
            onChange={(event) => setProfileId(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="">Selecciona perfil</option>
            {profilesQuery.data?.map((profile) => (
              <option key={profile.id} value={profile.id}>
                {profile.fullName} ({profile.id.slice(0, 8)})
              </option>
            ))}
          </select>

          <label className="text-sm font-medium text-slate-700">Mensaje</label>
          <Textarea
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Escribe tu pregunta para el mentor"
          />

          <Button
            disabled={!profileId || !message || chatMutation.isPending}
            onClick={() => chatMutation.mutate({ profileId, mentor: selectedMentor, message })}
            className="w-full"
          >
            {chatMutation.isPending ? 'Consultando...' : 'Enviar a mentor'}
          </Button>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Respuesta</p>
            <p className="mt-2 whitespace-pre-wrap text-sm text-slate-700">
              {chatMutation.data?.response ?? 'Aun no hay respuesta.'}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}