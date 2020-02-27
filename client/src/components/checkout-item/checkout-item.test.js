import React from 'react';
import { shallow } from 'enzyme';

import { CheckOutItem } from './checkout-item.component';

describe('CheckoutItem Component', () => {
  let wrapper;
  let mockClearItem;
  let mockAddItem;
  let mockRemoveItem;
  let mockRemoveQuantity;

  beforeEach(() => {
    mockClearItem = jest.fn();
    mockAddItem = jest.fn();
    mockRemoveItem = jest.fn();
    mockRemoveQuantity = jest.fn();

    const mockProps = {
      cartItem: {
        imageUrl: 'www.testimage.com',
        price: 10,
        name: 'hats',
        quantity: 2,
      },
      clearItem: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
      removeQuantity: mockRemoveQuantity,
    };

    wrapper = shallow(<CheckOutItem {...mockProps} />);
  });

  it('Should render CheckoutItem Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call clearItem when remove button is clicked', () => {
    wrapper.find('RemoveButtonContainer').simulate('click');
    expect(mockRemoveItem).toHaveBeenCalled();
  });

  it('Should call removeItem when left arrow is clicked', () => {
    wrapper
      .find('QuantityContainer')
      .childAt(0)
      .simulate('click');

    expect(mockRemoveQuantity).toHaveBeenCalled();
  });

  it('Shoulc call addItem when right arrow is clicked', () => {
    wrapper
      .find('QuantityContainer')
      .childAt(2)
      .simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });
});
