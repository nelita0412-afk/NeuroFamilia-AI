import { Body, Controller, Post, Req } from '@nestjs/common';
import { ChatDto } from './dto/chat.dto';
import { MentorService } from './mentor.service';
import type { AuthenticatedRequest } from '../auth/types/authenticated-request.type';

@Controller('mentor')
export class MentorController {
  constructor(private readonly mentorService: MentorService) {}

  @Post('chat')
  chat(@Req() request: AuthenticatedRequest, @Body() dto: ChatDto) {
    return this.mentorService.chat(request.user.userId, dto);
  }
}
