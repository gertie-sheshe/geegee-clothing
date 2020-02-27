import React from 'react';
import { shallow } from 'enzyme';

import { CustomButton } from './custom-button.component';

describe('CustomButton Tests', () => {
  it('Should render CustomButton component', () => {
    const wrapper = shallow(<CustomButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
