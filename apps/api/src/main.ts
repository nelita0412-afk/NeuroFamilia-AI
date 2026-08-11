import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.use(helmet());

  const corsOrigin = configService.get<string>('CORS_ORIGIN') ?? '*';
  const origins = corsOrigin.split(',').map((origin) => origin.trim());

  app.enableCors({
    origin: origins,
    credentials: true,
  });

  const port = Number(configService.get<string>('PORT') ?? 3001);

  await app.listen(port);

  console.log(`🚀 NeuroFamilia API running on http://localhost:${port}`);
}

bootstrap();
