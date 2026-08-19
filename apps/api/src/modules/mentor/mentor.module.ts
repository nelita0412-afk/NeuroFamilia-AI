import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { MentorController } from './mentor.controller';
import { MentorService } from './mentor.service';
import { RelationshipPermissionsModule } from '../relationship-permissions/relationship-permissions.module';
import { ScientificIntelligenceModule } from '../scientific-intelligence/scientific-intelligence.module';

@Module({
  imports: [
    DatabaseModule,
    ScientificIntelligenceModule,
    RelationshipPermissionsModule,
  ],
  controllers: [MentorController],
  providers: [MentorService],
})
export class MentorModule {}
