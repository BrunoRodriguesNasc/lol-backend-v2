import { Module } from '@nestjs/common';
import { LiveGameController } from './live-game.controller';
import { LiveGameService } from './live-game.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [LiveGameController],
  providers: [LiveGameService]
})
export class LiveGameModule {}
