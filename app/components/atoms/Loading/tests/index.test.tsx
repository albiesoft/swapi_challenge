import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Loading from '..';

describe('<Loading />', () => {
  test('It renders correctly initially', () => {
    const target: ShallowWrapper = shallow(<Loading />);
    expect(target).toMatchSnapshot();
  });
});
