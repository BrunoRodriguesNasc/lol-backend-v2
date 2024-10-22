import { Module } from '@nestjs/common';
import { ChampionsService } from './champions.service';
import { ChampionsController } from './champions.controller';
import { HttpModule } from '@nestjs/axios'; 

@Module({
  imports: [HttpModule], 
  controllers: [ChampionsController],
  providers: [ChampionsService],
  exports: [ChampionsService],  
})
export class ChampionsModule {}
