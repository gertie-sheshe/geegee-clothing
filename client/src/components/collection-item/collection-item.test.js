import React from 'react';
import { shallow } from 'enzyme';

import { CollectionItem } from './collection-item.component';

describe('Collection Item Tests', () => {
  let wrapper;
  let mockAddItem;
  const imageUrl = 'www.testImage.com';
  const mockName = 'black hat';
  const mockPrice = 10;

  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName,
      },
      addItem: mockAddItem,
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it('Should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call addItem when AddButton is clicked', () => {
    wrapper.find('AddButton').simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('Should render imageUrl as a prop on Background Image', () => {
    expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(imageUrl);
  });

  it('Should render name prop in NameContainer', () => {
    expect(wrapper.find('NameContainer').text()).toBe(mockName);
  });

  it('Should render price prop in PriceContainer', () => {
    const price = parseInt(wrapper.find('PriceContainer').text());
    expect(price).toBe(mockPrice);
  });
});
