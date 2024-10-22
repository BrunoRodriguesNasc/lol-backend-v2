import { Test, TestingModule } from '@nestjs/testing';
import { LiveGameController } from './live-game.controller';

describe('LiveGameController', () => {
  let controller: LiveGameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LiveGameController],
    }).compile();

    controller = module.get<LiveGameController>(LiveGameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
