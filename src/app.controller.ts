import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Lab1AndrushchukService } from './lab1-andrushchuk/lab1-andrushchuk.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly lab1Service: Lab1AndrushchukService) {}

  @Get()
  getHello(): string{
    return this.appService.getString();
  }

  getNumber(): number{
    return this.appService.getNumber();
  }

  getArrays(): number[]{
    return this.appService.getArrays();
  }

  getEnums():number{
    return this.appService.getEnums();
  }

  getMultitypeValues():number|string{
    return this.appService.getMultitypeValues();
  }

  getMultitupeArrays(): (number|string)[][]{
    return this.appService.getMultitypeArrays();
  }
}
