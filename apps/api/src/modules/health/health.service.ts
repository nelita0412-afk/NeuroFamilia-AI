import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseService } from '../../database/database.service';

@Injectable()
export class HealthService {
  constructor(
    private readonly db: DatabaseService,
    private readonly configService: ConfigService,
  ) {}

  async check() {
    const database = await this.getDatabaseStatus();

    return {
      status: database === 'up' ? 'ok' : 'degraded',
      database,
      version: this.configService.get<string>('APP_VERSION') ?? '1.0.0',
      timestamp: new Date().toISOString(),
    };
  }

  private async getDatabaseStatus(): Promise<'up' | 'down'> {
    try {
      await this.db.$queryRaw`SELECT 1`;
      return 'up';
    } catch {
      return 'down';
    }
  }
}
