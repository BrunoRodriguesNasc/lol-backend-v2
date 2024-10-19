import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { API_KEY } from 'src/constants/app.constants';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SummonerService {
    constructor(private readonly httpService: HttpService) {}
    
    async getSummonerByPuuid(puuid: string): Promise<any> {
        try {
            const response = await firstValueFrom(this.httpService.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}/?api_key=${API_KEY}`));
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
