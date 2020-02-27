import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './header.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

describe('Header Component Tests', () => {
  let wrapper;
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      hidden: true,
      currentUser: {
        uid: '123',
      },
      signOutStart: mockSignOutStart,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it('Should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('If currentUser is present', () => {
    it('Should render sign out link', () => {
      expect(
        wrapper
          .find('OptionLink')
          .at(2)
          .text(),
      ).toBe('SIGN OUT');
    });

    it('should call Sign out start method when link is created', () => {
      wrapper
        .find('OptionLink')
        .at(2)
        .simulate('click');
      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe('if currentUser is null', () => {
    it('Should render sign in link', () => {
      const mockProps = {
        hidden: true,
        currentUser: null,
        signOutStart: mockSignOutStart,
      };

      const newWrapper = shallow(<Header {...mockProps} />);
      expect(
        newWrapper
          .find('OptionLink')
          .at(2)
          .text(),
      ).toBe('SIGN IN');
    });
  });

  describe('if hidden is true', () => {
    it('Should not render CartDropDown', () => {
      expect(wrapper.exists(CartDropDown)).toBe(false);
    });
  });

  describe('if hidden is false', () => {
    it('Should render CartDropdown', () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart,
      };

      const newWrapper = shallow(<Header {...mockProps} />);
      expect(newWrapper.exists(CartDropDown)).toBe(true);
    });
  });
});
