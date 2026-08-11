import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';
import type { AuthenticatedRequest } from '../auth/types/authenticated-request.type';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Req() request: AuthenticatedRequest, @Body() dto: CreateProfileDto) {
    return this.profileService.createProfile(request.user.userId, dto);
  }

  @Get()
  findAll(@Req() request: AuthenticatedRequest) {
    return this.profileService.findAllProfiles(request.user.userId);
  }

  @Get(':id')
  findOne(@Req() request: AuthenticatedRequest, @Param('id') id: string) {
    return this.profileService.findProfileById(request.user.userId, id);
  }
}
