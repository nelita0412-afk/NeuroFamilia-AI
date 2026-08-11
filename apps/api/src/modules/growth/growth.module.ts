import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { GrowthController } from './growth.controller';
import { GrowthService } from './growth.service';
import { RelationshipPermissionsModule } from '../relationship-permissions/relationship-permissions.module';

@Module({
  imports: [DatabaseModule, RelationshipPermissionsModule],
  controllers: [GrowthController],
  providers: [GrowthService],
})
export class GrowthModule {}
