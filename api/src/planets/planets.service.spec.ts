import { Test, TestingModule } from '@nestjs/testing';
import { PlanetsService } from './planets.service';
import { HttpModule } from '@nestjs/common';
import { PlanetsController } from './planets.controller';

describe('PlanetsService', () => {
  let service: PlanetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [PlanetsController],
      providers: [PlanetsService],
    }).compile();

    service = module.get<PlanetsService>(PlanetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findPlanet', () =>{
    it('should do something', () => {
      const result = service.findPlanet(1);
      console.log(result);
    })
  });
});