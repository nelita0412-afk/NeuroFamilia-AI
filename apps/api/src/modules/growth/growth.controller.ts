import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CreateObservationDto } from './dto/create-observation.dto';
import { GrowthService } from './growth.service';
import type { AuthenticatedRequest } from '../auth/types/authenticated-request.type';

@Controller('growth')
export class GrowthController {
  constructor(private readonly growthService: GrowthService) {}

  @Post('observations')
  createObservation(@Req() request: AuthenticatedRequest, @Body() dto: CreateObservationDto) {
    return this.growthService.createObservation(request.user.userId, dto);
  }

  @Get('profiles/:profileId/report')
  getReport(@Req() request: AuthenticatedRequest, @Param('profileId') profileId: string) {
    return this.growthService.getReport(request.user.userId, profileId);
  }
}
