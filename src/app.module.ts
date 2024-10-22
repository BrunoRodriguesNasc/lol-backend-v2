import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionsModule } from './champions/champions.module';
import { SummonerModule } from './summoner/summoner.module';
import { MatchModule } from './match/match.module';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { LeaderboardsModule } from './leaderboards/leaderboards.module';
import { LiveGameModule } from './live-game/live-game.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ChampionsModule,
    SummonerModule,
    MatchModule, 
    AuthModule, AccountModule, LeaderboardsModule, LiveGameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
