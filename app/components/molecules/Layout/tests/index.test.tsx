import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Layout from '..';

describe('<Loading />', () => {
  test('It renders correctly initially', () => {
    const target: ShallowWrapper = shallow(
      <Layout>
        <div></div>
      </Layout>
    );
    expect(target).toMatchSnapshot();
  });
});
