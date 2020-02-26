import React from 'react';
import { shallow } from 'enzyme';

import { CartDropDown } from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ItemDetailsContainer } from '../cart-item/cart-item.styles';

describe('CartDropdown Component', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;

  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };

    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch,
    };

    wrapper = shallow(<CartDropDown {...mockProps} />);
  });

  it('Should render CartDropdown Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call history.push when button is clicked', () => {
    wrapper.find('CartDropdownButton').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  });

  it('Should render an equal number of CartItem components as the cartItems props', () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  it('Should render EmptyMessageContainer when cartItems is empty', () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      dispatch: mockDispatch,
    };

    const newWrapper = shallow(<CartDropDown {...mockProps} />);
    expect(newWrapper.exists('EmptyMessageContainer')).toBe(true);
  });
});
