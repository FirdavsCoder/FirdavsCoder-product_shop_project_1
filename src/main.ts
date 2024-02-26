import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Product Shop API')
    .setDescription('Product Shop API description!')
    .setVersion('1.0')
    .addServer('http://localhost:3000/', 'Local environment')
    .addServer('https://staging.yourapi.com/', 'Staging')
    .addTag('Users API', 'Users API description')
    .addTag('Products API', 'Products API description')
    .addTag('Transactions API', 'Transactions API description')
    .build();

  const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);

  
  app.enableCors();
  // app.useBodyParser('json')

  app.setGlobalPrefix('api');

  await app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    console.log('Server is running on http://localhost:3000/swagger');
    
  });
}
bootstrap();
