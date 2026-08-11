import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { RelationshipPermissionsService } from './relationship-permissions.service';

@Module({
  imports: [DatabaseModule],
  providers: [RelationshipPermissionsService],
  exports: [RelationshipPermissionsService],
})
export class RelationshipPermissionsModule {}