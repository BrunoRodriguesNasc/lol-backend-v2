import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ACCOUNT_URL_BY_RIOT_ID } from '../constants/account.constants';
import { API_KEY } from '../constants/app.constants';

@Injectable()
export class AccountService {
    constructor(private readonly httpService: HttpService) {}
    
    async getAccount(name: string, tag: string): Promise<any> {
        try {
            const response = await firstValueFrom(this.httpService.get(`${ACCOUNT_URL_BY_RIOT_ID}/${name}/${tag}?api_key=${API_KEY}`));
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
