import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SummonerService {
    constructor(private httpService: HttpService, private confiService: ConfigService ) {}
    
    async getSummonerByPuuid(puuid: string): Promise<any> {
        try {
            const response = await firstValueFrom(this.httpService.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}/?api_key=${this.confiService.get<string>('API_KEY')}`));
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
