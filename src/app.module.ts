import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionsController } from './champions/champions.controller';
import { ChampionsService } from './champions/champions.service';
import { ChampionsModule } from './champions/champions.module';
import { AccountController } from './account/account.controller';
import { AccountService } from './account/account.service';
import { SummonerController } from './summoner/summoner.controller';
import { SummonerService } from './summoner/summoner.service';
import { SummonerModule } from './summoner/summoner.module';

@Module({
  imports: [ChampionsModule, HttpModule, SummonerModule],
  controllers: [AppController, ChampionsController, AccountController, SummonerController],
  providers: [AppService, ChampionsService, AccountService, SummonerService],
})
export class AppModule {}
