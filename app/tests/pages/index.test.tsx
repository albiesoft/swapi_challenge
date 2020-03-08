import { shallow, ShallowWrapper } from 'enzyme';
import preloadAll from 'jest-next-dynamic';
import Home from '../../pages/index';

describe('<Home />', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  test('It renders correctly', () => {
    let target: ShallowWrapper = shallow(<Home />);
    expect(target).toMatchSnapshot();
  });
});
