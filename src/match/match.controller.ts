import { Controller, Get, Param, Res } from '@nestjs/common';
import { MatchService } from './match.service';

@Controller('match')
export class MatchController {
    constructor(private readonly matchService: MatchService) {
    }

    @Get(':puuid')
    async getMatchByPuuid(@Param('puuid') puuid: string, @Res() res) {
        const data = await this.matchService.getMatchByPuuid(puuid);
        return res.send(data);
    }

}
