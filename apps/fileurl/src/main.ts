import "reflect-metadata";
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FileurlModule } from './fileurl.module';

async function bootstrap() {
  const app = await NestFactory.create(FileurlModule);
  app.setGlobalPrefix("api/fileurl/");
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  const config = new DocumentBuilder()
    .setTitle('FileUrl')
    .setDescription('FileUrl API description')
    .setVersion('1.0')
    .addTag('fileurl')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger/api', app, document);
  await app.listen(3000);
}
bootstrap();
