import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validateEnv } from './config/env.validation';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { FamilyModule } from './modules/family/family.module';
import { GrowthModule } from './modules/growth/growth.module';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from './modules/auth/guards/roles.guard';
import { HealthModule } from './modules/health/health.module';
import { MentorModule } from './modules/mentor/mentor.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ScientificIntelligenceModule } from './modules/scientific-intelligence/scientific-intelligence.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
    }),
    ThrottlerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => [
        {
          ttl: Number(configService.get<string>('RATE_LIMIT_TTL') ?? 60) * 1000,
          limit: Number(configService.get<string>('RATE_LIMIT_LIMIT') ?? 100),
        },
      ],
    }),
    AuthModule,
    DatabaseModule,
    FamilyModule,
    ProfileModule,
    GrowthModule,
    HealthModule,
    ScientificIntelligenceModule,
    MentorModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // Orden de guards globales: rate limit, autenticacion y luego autorizacion por roles.
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
