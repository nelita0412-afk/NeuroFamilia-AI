import { RelationshipType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class AddFamilyMemberDto {
  @IsString()
  @IsNotEmpty()
  personId: string;

  @IsEnum(RelationshipType)
  relationship: RelationshipType;
}
