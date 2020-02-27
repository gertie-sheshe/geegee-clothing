import React from 'react';
import { shallow } from 'enzyme';

import { Directory } from './directory.component';

describe('Directory tests', () => {
  it('Should render Directory Component', () => {
    const wrapper = shallow(<Directory sections={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
