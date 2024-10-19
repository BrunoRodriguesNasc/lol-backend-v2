import { Controller, Get, Param, Res } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}
    
    @Get('/:name/:tag')
    async getAccount(@Param('name') name: string, @Param('tag') tag: string, @Res() res) {

        const data = await this.accountService.getAccount(name, tag);
        res.send(data);
    }
}
