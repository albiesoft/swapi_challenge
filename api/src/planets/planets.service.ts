import { Injectable, HttpService } from '@nestjs/common';
import dayjs from 'dayjs';

@Injectable()
export class PlanetsService {
  constructor(private readonly httpService: HttpService) {}

  async findPlanet(planetIndex: number): Promise<any> {
    const { data } = await this.httpService.get(`https://swapi.co/api/planets/${planetIndex}/`).toPromise();

    const films = await Promise.all(data.films.map(async (url: string) => {
      const { data } = await this.findFilm(url);
      
      return {
        Title: data.title,
        Director: data.director,
        ReleaseDate: data.release_date
      }
    }));

    return {
      Name: data.name,
      Climate: data.climate,
      Population: data.population,
      Films: films.sort((a: any, b: any) => dayjs(a.ReleaseDate).isBefore(dayjs(b.ReleaseDate)) ? 1 : -1 )
    };
  }

  findFilm(url: string): Promise<any> {
    return this.httpService.get(url).toPromise();
  }
}
