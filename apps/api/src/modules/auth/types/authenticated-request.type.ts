import type { Request } from 'express';
import type { Role } from '../enums/role.enum';

export interface AuthenticatedUser {
  userId: string;
  email: string;
  role: Role;
}

export type AuthenticatedRequest = Request & {
  user: AuthenticatedUser;
};