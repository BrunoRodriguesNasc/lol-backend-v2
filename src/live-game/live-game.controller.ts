import { Controller, Get, Param } from '@nestjs/common';
import { LiveGameService } from './live-game.service';

@Controller('live-game')
export class LiveGameController {
    constructor(private readonly liveGameService: LiveGameService) {}

    @Get(':puuid')
    async getLiveGameByPuuid(@Param('puuid') puuid: string) {
        return this.liveGameService.getLiveGameByPuuid(puuid);
    }
}
