import { Module } from '@nestjs/common';
import { LiveGameController } from './live-game.controller';
import { LiveGameService } from './live-game.service';

@Module({
  controllers: [LiveGameController],
  providers: [LiveGameService]
})
export class LiveGameModule {}
