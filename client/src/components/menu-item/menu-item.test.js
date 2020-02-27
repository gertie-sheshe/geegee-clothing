import React from 'react';
import { shallow } from 'enzyme';

import { MenuItem } from './menu-item.component';

describe('Menu Item Tests', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;

  const linkUrl = '/hats';
  const size = 'large';
  const imageUrl = 'testimage';

  beforeEach(() => {
    mockMatch = {
      url: '/shop',
    };

    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      linkUrl,
      size,
      title: 'hats',
      imageUrl,
    };

    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  it('Should render MenuItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call history.push with the right string when MenuItemContainer clicked', () => {
    wrapper.find('MenuItemContainer').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`);
  });

  it('Should pass size to MenuItemContainer as the prop size', () => {
    expect(wrapper.find('MenuItemContainer').prop('size')).toBe(size);
  });

  it('Should pass imageUrl to BackgroundImageContainer as the prop imageUrl', () => {
    expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toBe(
      imageUrl,
    );
  });
});
