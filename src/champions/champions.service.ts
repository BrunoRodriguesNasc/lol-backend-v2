import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ChampionsService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          'http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion.json',
        ),
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getByName(name: string): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          `http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion/${name}.json`,
        ),
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
