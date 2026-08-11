import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { DevelopmentStage } from '@prisma/client';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  familyId: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  birthDate: string;

  @IsEnum(DevelopmentStage)
  developmentStage: DevelopmentStage;

  @IsOptional()
  @IsString()
  personId?: string;
}
