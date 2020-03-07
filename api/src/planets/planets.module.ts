import { Module, HttpModule } from '@nestjs/common';
import { PlanetsController } from './planets.controller';
import { PlanetsService } from './planets.service';

@Module({
  imports: [HttpModule],
  controllers: [PlanetsController],
  providers: [PlanetsService]
})
export class PlanetsModule {}
