import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class LiveGameService {
    constructor(private readonly httpService: HttpService, private configService: ConfigService) {}

    async getLiveGameByPuuid(puuid: string) {
        try { 
            const response = await firstValueFrom(this.httpService.get(`https://br1.api.riotgames.com/lol/spectator/v5/active-games/by-summoner/${puuid}?api_key=${this.configService.get<string>('API_KEY')}`));
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
