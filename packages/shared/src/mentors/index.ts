import type { MentorIdentity } from './types';
import { ALBA } from './alba';
import { NIA } from './nia';
import { MAKI } from './maki';
import { BOBBY } from './bobby';
import { LEO } from './leo';
import { CORA } from './cora';
import { PINGO } from './pingo';
import { DARWIN } from './darwin';

export { ALBA, NIA, MAKI, BOBBY, LEO, CORA, PINGO, DARWIN };

export type { MentorIdentity, MentorResource, MentorResourceType, MentorRuntimeConfig } from './types';

export const MENTOR_NAMES = ['ALBA', 'NIA', 'MAKI', 'BOBBY', 'LEO', 'CORA', 'PINGO', 'DARWIN'] as const;

export const MENTOR_IDENTITY: Record<string, MentorIdentity> = {
  ALBA,
  NIA,
  MAKI,
  BOBBY,
  LEO,
  CORA,
  PINGO,
  DARWIN,
};
