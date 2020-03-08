import { shallow, ShallowWrapper } from 'enzyme';
import Footer from '..';

describe('<Footer />', () => {
  test('It renders correctly', () => {
    const target: ShallowWrapper = shallow(<Footer />);
    expect(target).toMatchSnapshot();
  });
});
