import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Lab1AndrushchukController } from './lab1-andrushchuk/lab1-andrushchuk.controller';
import { Lab1AndrushchukModule } from './lab1-andrushchuk/lab1-andrushchuk.module';

@Module({
  imports: [Lab1AndrushchukModule],
  controllers: [AppController, Lab1AndrushchukController],
  providers: [AppService],
})
export class AppModule {}
