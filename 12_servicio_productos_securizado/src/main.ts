import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    new ValidationPipe({
    whitelist: false, // Si lo ponemos a true, SOLO LOS CAMPOS CONDECORADOR SE TIENEN EN CUENTA. El resto son OBVIADOS
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }),
  app.enableCors()
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
