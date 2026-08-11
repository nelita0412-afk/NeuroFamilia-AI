import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { RelationshipPermissionsModule } from '../relationship-permissions/relationship-permissions.module';

@Module({
  imports: [DatabaseModule, RelationshipPermissionsModule],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
