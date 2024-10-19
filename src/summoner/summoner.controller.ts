import { Controller, Get, Param, Res } from '@nestjs/common';
import { SummonerService } from './summoner.service';

@Controller('summoner')
export class SummonerController {
    constructor(private readonly summonerService: SummonerService) {
    }

    @Get('/:puuid')
    async getSummonerByPuuid(@Param('puuid') puuid: string, @Res() res) {
        const data = await this.summonerService.getSummonerByPuuid(puuid);
        return res.send(data);
    }
}
