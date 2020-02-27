import React from 'react';
import { shallow } from 'enzyme';

import FormInput from './form-input.component';

describe('FormInput Component Tests', () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: 'email',
      value: 'test@gmail.com',
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it('Should render FormInput component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call handleChange method when input changes', () => {
    wrapper.find('FormInputContainer').simulate('change');

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('Should render FormInputLabel if there is a label', () => {
    expect(wrapper.exists('FormInputLabel')).toBe(true);
  });

  it('Should not render FormInputLabel if there is no label', () => {
    const newMockProps = {
      label: '',
      value: 'test@gmail.com',
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormInput {...newMockProps} />);
    expect(newWrapper.exists('FormInputLabel')).toBe(false);
  });
});
