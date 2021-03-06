import { shallow, ShallowWrapper } from 'enzyme';
import preloadAll from 'jest-next-dynamic';
import PlanetsPage from '../../../pages/planets/[name]';

describe('<PlanetsPage />', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  test('It renders correctly', () => {
    const data = {
      Name: 'PlanetName',
      Climate: 'Hot',
      Population: 10000,
      Films: [
        {
          Title: 'FilmTitle',
          Director: 'FilmDirector',
          ReleaseDate: new Date()
        }
      ]
    };

    const target: ShallowWrapper = shallow(<PlanetsPage planet={data} />);
    expect(target).toMatchSnapshot();
  });
});
