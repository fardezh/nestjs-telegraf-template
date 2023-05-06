import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // just have to create an app and not listening on any port
  await NestFactory.createApplicationContext(AppModule);
}
bootstrap();
