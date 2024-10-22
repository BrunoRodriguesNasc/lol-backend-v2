import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';

@Module({
    imports: [HttpModule], 
    controllers: [MatchController],
    providers: [MatchService],
    exports: [MatchService],  
  })
  export class MatchModule {}