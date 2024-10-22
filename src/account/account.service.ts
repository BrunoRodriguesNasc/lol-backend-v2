import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { ACCOUNT_URL_BY_RIOT_ID } from '../constants/account.constants';
@Injectable()
export class AccountService {
    constructor(private readonly httpService: HttpService, private configService: ConfigService) {}

    async getAccount(name: string, tag: string): Promise<any> {
        try {
            const response = await firstValueFrom(this.httpService.get(`${ACCOUNT_URL_BY_RIOT_ID}/${name}/${tag}?api_key=${this.configService.get<string>('API_KEY')}`));
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
