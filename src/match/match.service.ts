import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { API_KEY } from 'src/constants/app.constants';

@Injectable()
export class MatchService {
    constructor(private httpService: HttpService) {}

    async getMatchByPuuid(puuid: string) {
        try {
            const response = await firstValueFrom(this.httpService.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${API_KEY}`));
            return response.data;
        } catch (error) {
            throw new Error(error);
        }

    }
}
