import * as helmet from 'helmet';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  await app.listen(3000);
}

bootstrap().then(() => console.log(' 🚀️ We have liftoff...'));
