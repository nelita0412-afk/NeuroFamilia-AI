import type { Family, PersonSummary, Profile } from './types';

export type PersonCardModel = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  role: string;
  familyId?: string;
  familyName: string;
  profileId?: string;
  birthDate?: string;
  ageLabel: string;
  developmentStage: string;
  mentorAssignedLabel: string;
};

function calculateAge(birthDate?: string) {
  if (!birthDate) {
    return undefined;
  }

  const date = new Date(birthDate);

  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  const today = new Date();
  let years = today.getFullYear() - date.getFullYear();
  const monthDiff = today.getMonth() - date.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
    years -= 1;
  }

  return years;
}

export function formatAgeLabel(birthDate?: string) {
  const age = calculateAge(birthDate);

  if (typeof age !== 'number' || age < 0) {
    return 'Sin edad visible';
  }

  return age === 1 ? '1 ano' : `${age} anos`;
}

export function buildPeopleIndex(families: Family[] = [], profiles: Profile[] = []): PersonCardModel[] {
  const profileByPersonId = new Map<string, Profile>();

  for (const profile of profiles) {
    if (profile.personId) {
      profileByPersonId.set(profile.personId, profile);
    }
  }

  const people = new Map<string, PersonCardModel>();

  for (const family of families) {
    for (const member of family.members) {
      const person = member.person;
      const profile = profileByPersonId.get(person.id) ?? profiles.find((item) => item.familyId === family.id && item.personId === person.id);
      const fullName = `${person.firstName} ${person.lastName}`.trim();

      people.set(person.id, {
        id: person.id,
        firstName: person.firstName,
        lastName: person.lastName,
        fullName,
        role: person.role,
        familyId: family.id,
        familyName: family.name,
        profileId: profile?.id,
        birthDate: profile?.birthDate,
        ageLabel: formatAgeLabel(profile?.birthDate),
        developmentStage: profile?.developmentStage ?? 'Sin expediente vinculado',
        mentorAssignedLabel: 'Sin asignacion disponible',
      });
    }
  }

  return Array.from(people.values()).sort((left, right) => left.fullName.localeCompare(right.fullName, 'es'));
}

export function findPersonById(personId: string, families: Family[] = [], profiles: Profile[] = []) {
  return buildPeopleIndex(families, profiles).find((person) => person.id === personId);
}

export function describeRole(role: PersonSummary['role']) {
  const labels: Record<string, string> = {
    ADMINISTRATOR: 'Administrador',
    MOTHER: 'Madre',
    FATHER: 'Padre',
    TUTOR: 'Tutor',
    PROFESSIONAL: 'Profesional',
  };

  return labels[role] ?? role;
}