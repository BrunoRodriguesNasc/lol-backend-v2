import { Test, TestingModule } from '@nestjs/testing';
import { LiveGameService } from './live-game.service';

describe('LiveGameService', () => {
  let service: LiveGameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiveGameService],
    }).compile();

    service = module.get<LiveGameService>(LiveGameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
