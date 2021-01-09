import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  app.use(csurf());
  await app.listen(3000);
}

bootstrap().then(() => console.log(' 🚀️ We have liftoff...'));
