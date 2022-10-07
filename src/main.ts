import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { INestMicroservice } from '@nestjs/common';
import { AppModule } from './app.module';

const microserviceOptions = {
  name: 'MQTT_SERVICE',
  transport: Transport.TCP,
};

(async () => {
  const app: INestMicroservice = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );

  await app.listen();
})();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
bootstrap();