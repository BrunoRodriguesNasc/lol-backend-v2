import { Module } from '@nestjs/common';
import { SummonerController } from './summoner.controller';
import { SummonerService } from './summoner.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule], 
    controllers: [SummonerController],
    providers: [SummonerService],
    exports: [SummonerService],  
  })
  export class SummonerModule {}