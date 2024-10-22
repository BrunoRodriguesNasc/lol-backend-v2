import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule, ConfigService], 
    controllers: [AccountController],
    providers: [AccountService],
    exports: [AccountService],  
  })
  export class AccountModule {}
