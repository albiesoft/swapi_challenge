import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { PlanetsService } from './planets.service';

@Controller('planets')
export class PlanetsController {
  constructor(private planetsService: PlanetsService) {}

  @Get(':stub')
  async findOne(@Param('stub') stub) {
    switch (stub) {
      case 'tatooine':
        const planet = await this.planetsService.findPlanet(1);
        return planet;
      case 'alderaan':
        return this.planetsService.findPlanet(2);
      case 'yavin':
        return this.planetsService.findPlanet(3);
      default:
        throw new NotFoundException('Planet not found');
    }
  }
}
