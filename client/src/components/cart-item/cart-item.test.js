import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item.component';

describe('CartItem component tests', () => {
  const mockItem = {
    imageUrl: 'www.testImage.com',
    price: 10,
    name: 'hats',
    quantity: 2,
  };

  it('Should render CartItem component', () => {
    expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
  });
});
