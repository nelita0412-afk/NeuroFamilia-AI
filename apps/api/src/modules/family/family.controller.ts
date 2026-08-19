import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AddFamilyMemberDto } from './dto/add-family-member.dto';
import { CreateFamilyDto } from './dto/create-family.dto';
import { FamilyService } from './family.service';
import type { AuthenticatedRequest } from '../auth/types/authenticated-request.type';

@Controller('families')
export class FamilyController {
  constructor(private readonly familyService: FamilyService) {}

  @Post()
  create(@Req() request: AuthenticatedRequest, @Body() dto: CreateFamilyDto) {
    return this.familyService.createFamily(request.user.userId, dto);
  }

  @Get()
  findAll(@Req() request: AuthenticatedRequest) {
    return this.familyService.findAllFamilies(request.user.userId);
  }

  @Post(':id/members')
  addMember(
    @Req() request: AuthenticatedRequest,
    @Param('id') id: string,
    @Body() dto: AddFamilyMemberDto,
  ) {
    return this.familyService.addMember(request.user.userId, id, dto);
  }
}
