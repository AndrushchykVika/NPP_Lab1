import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Lab1AndrushchukService } from './lab1-andrushchuk/lab1-andrushchuk.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly lab1Service: Lab1AndrushchukService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return this.lab1Service();
  }
}
