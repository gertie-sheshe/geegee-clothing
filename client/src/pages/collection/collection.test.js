import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPage } from './collection.component';
import CollectionItem from '../../components/collection-item/collection-item.component';

describe('CollectionPage Tests', () => {
  let wrapper;
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: 'Test',
    };

    wrapper = shallow(<CollectionPage collection={mockCollection} />);
  });

  it('Should render the CollectionPage Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render the same number of CollectionItems as collection array', () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
  });
});
