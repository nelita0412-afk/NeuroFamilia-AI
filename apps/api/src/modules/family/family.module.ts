import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { FamilyController } from './family.controller';
import { FamilyService } from './family.service';
import { RelationshipPermissionsModule } from '../relationship-permissions/relationship-permissions.module';

@Module({
  imports: [DatabaseModule, RelationshipPermissionsModule],
  controllers: [FamilyController],
  providers: [FamilyService],
})
export class FamilyModule {}
