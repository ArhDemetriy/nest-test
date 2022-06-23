import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap()
{
  const app = NestFactory.create(AppModule)
  const PORT = process?.env?.PORT || 5000
  return (await app).listen(PORT, function (...args) { console.log('bootstrap; listen callback', [this].concat(args)) })
}

bootstrap();
