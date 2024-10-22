import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MatchService {
    constructor(private httpService: HttpService, private configService: ConfigService) {}

    async getMatchByPuuids(puuid: string) {
        try {
            const response = await firstValueFrom(this.httpService.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${this.configService.get<string>('API_KEY')}`));
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getMatchById(matchId: string) {
        try {
            const response = await firstValueFrom(this.httpService.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${this.configService.get<string>('API_KEY')}`));
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
