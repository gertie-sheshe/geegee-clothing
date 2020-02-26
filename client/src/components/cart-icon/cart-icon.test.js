import React from 'react';
import { shallow } from 'enzyme';
import { CartIcon } from './cart-icon.component';

describe('CartIcon Component Tests', () => {
  let wrapper;
  let mockToggleCartHidden;

  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden,
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it('Should render CartIcon Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call toggleCartHidden when icon is clicked', () => {
    wrapper.find('CartContainer').simulate('click');
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it('Should render the itemCount as the text', () => {
    const itemCount = parseInt(wrapper.find('ItemCountContainer').text());
    expect(itemCount).toBe(0);
  });
});
