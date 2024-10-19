import { Controller, Get, Res, Param } from '@nestjs/common';
import { ChampionsService } from './champions.service';

@Controller('champions')
export class ChampionsController {
    constructor(private readonly championsService: ChampionsService) {}

    @Get()
    async getAll(@Res() res) {
       const data = await this.championsService.getAll();
       res.send(data); 
    }

    @Get('/:name')
    async getChampionByName(@Param('name') name: string,  @Res() res) {
        const data = await this.championsService.getByName(name);
        res.send(data);
    }
}
