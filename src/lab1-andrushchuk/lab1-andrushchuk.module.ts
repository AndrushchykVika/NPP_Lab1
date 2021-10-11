import { Module } from '@nestjs/common';
import { Lab1AndrushchukService } from './lab1-andrushchuk.service';

@Module({
  providers: [Lab1AndrushchukService]
})
export class Lab1AndrushchukModule {}
