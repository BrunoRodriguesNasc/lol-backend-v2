import { Controller, Get, Param, Res } from '@nestjs/common';
import { MatchService } from './match.service';

@Controller('match')
export class MatchController {
    constructor(private readonly matchService: MatchService) {
    }

    @Get(':puuid')
    async getMatchsByPuuid(@Param('puuid') puuid: string, @Res() res) {
        const data = await this.matchService.getMatchByPuuids(puuid);
        return res.send(data);
    }

    @Get('/getById/:matchId')
    async getMatchById(@Param('matchId') matchId: string, @Res() res) {
        const data = await this.matchService.getMatchById(matchId);
        return res.send(data);
    }

}
