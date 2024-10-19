import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ChampionsService } from './champions.service';

@Module({
    imports:[HttpModule],
    providers: [ChampionsService],
})
export class ChampionsModule {}
