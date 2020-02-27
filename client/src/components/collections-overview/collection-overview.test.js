import React from 'react';
import { shallow } from 'enzyme';

import { CollectionsOverview } from './collections-overview.component';

describe('Collection Overview Component', () => {
  it('Should render Collection Overview component', () => {
    let wrapper = shallow(<CollectionsOverview collections={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
