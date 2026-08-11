import { Type } from 'class-transformer';
import { IsArray, IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator';

export class ChatHistoryItemDto {
  @IsString()
  @IsIn(['user', 'mentor'])
  role: 'user' | 'mentor';

  @IsString()
  @IsNotEmpty()
  @MaxLength(4000)
  content: string;

  @IsString()
  @IsOptional()
  mentor?: string;
}

export class ChatDto {
  @IsString()
  @IsNotEmpty()
  profileId: string;

  @IsString()
  @IsNotEmpty()
  mentor: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChatHistoryItemDto)
  @IsOptional()
  history?: ChatHistoryItemDto[];
}
