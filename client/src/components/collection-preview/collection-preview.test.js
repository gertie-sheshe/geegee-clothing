import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPreview } from './collection-preview.component';
import CollectionItem from '../collection-item/collection-item.component';

describe('Collection Preview Tests', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  let mockItems = [{ id: 1 }, { id: 2 }];

  const mockRouteName = 'hats';

  beforeEach(() => {
    mockMatch = {
      path: '/shop',
    };

    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      routeName: mockRouteName,
      title: 'hats',
      items: mockItems,
    };

    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  it('Should render Collection Preview Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render Collection Item component based on the number of items', () => {
    expect(wrapper.find(CollectionItem).length).toEqual(mockItems.length);
  });
  // Uncomment this test later
  //   it('Should call history.push with the right string when TitleContainer clicked', () => {
  //     wrapper.find('TitleContainer').simulate('click');
  //     expect(mockHistory.push).toHaveBeenCalledWith(
  //       `${mockMatch.path}/${mockRouteName}`,
  //     );
  //   });
});
