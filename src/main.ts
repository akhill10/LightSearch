import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication , FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import AppClusterService from './app-cluster.service'; 

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  await app.listen(3000);
}

AppClusterService.clusterize(bootstrap);
