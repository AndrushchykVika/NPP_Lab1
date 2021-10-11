import { Test, TestingModule } from '@nestjs/testing';
import { Lab1AndrushchukController } from './lab1-andrushchuk.controller';

describe('Lab1AndrushchukController', () => {
  let controller: Lab1AndrushchukController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Lab1AndrushchukController],
    }).compile();

    controller = module.get<Lab1AndrushchukController>(Lab1AndrushchukController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
