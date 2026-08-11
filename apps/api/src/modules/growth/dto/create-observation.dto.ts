import { IsNotEmpty, IsString } from 'class-validator';

export class CreateObservationDto {
  @IsString()
  @IsNotEmpty()
  profileId: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  note: string;

  @IsString()
  observedAt?: string;
}
