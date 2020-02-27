import React from 'react';
import { shallow } from 'enzyme';

import HomePage from './homepage.component';

describe('HomePage Test', () => {
  it('Should render HomePage component', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
