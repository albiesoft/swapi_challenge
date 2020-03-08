import { shallow, ShallowWrapper } from 'enzyme';
import * as nextRouter from 'next/router';
import Header from '..';

describe('<Header />', () => {
  test('It renders correctly', () => {
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({
      route: '/',
      query: {
        name: 'planet'
      }
    }));
    
    const target: ShallowWrapper = shallow(<Header />);
    expect(target).toMatchSnapshot();
  });
});
