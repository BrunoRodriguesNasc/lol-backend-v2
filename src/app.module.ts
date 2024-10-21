import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
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
import { MatchController } from './match/match.controller';
import { MatchService } from './match/match.service';
import { MatchModule } from './match/match.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // Isso torna as variáveis de ambiente disponíveis em toda a aplicação
    }), ChampionsModule, HttpModule, SummonerModule, MatchModule, AuthModule],
  controllers: [AppController, ChampionsController, AccountController, SummonerController, MatchController, AuthController],
  providers: [AppService, ChampionsService, AccountService, SummonerService, MatchService, AuthService, JwtService],
})
export class AppModule {}
