import { Module } from '@nestjs/common';
import { SummonerController } from './summoner.controller';
import { SummonerService } from './summoner.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [HttpModule, ConfigService], 
    controllers: [SummonerController],
    providers: [SummonerService],
    exports: [SummonerService],  
  })
  export class SummonerModule {}