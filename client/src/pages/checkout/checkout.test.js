import React from 'react';
import { shallow } from 'enzyme';

import { CheckOutPage } from './checkout.component';

describe('CheckOutPage tests', () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      cartItems: [],
      total: 100,
    };

    wrapper = shallow(<CheckOutPage {...mockProps} />);
  });

  it('Should render Checkout Page', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
