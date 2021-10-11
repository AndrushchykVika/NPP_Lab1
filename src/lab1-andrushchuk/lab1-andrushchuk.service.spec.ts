import { Test, TestingModule } from '@nestjs/testing';
import { Lab1AndrushchukService } from './lab1-andrushchuk.service';

describe('Lab1AndrushchukService', () => {
  let service: Lab1AndrushchukService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Lab1AndrushchukService],
    }).compile();

    service = module.get<Lab1AndrushchukService>(Lab1AndrushchukService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
