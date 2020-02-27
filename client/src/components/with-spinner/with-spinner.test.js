import React from 'react';
import { shallow } from 'enzyme';

import WithSpinner from './with-spinner.component';
import Spinner from '../spinner/spinner.component';

describe('WithSpinner HOC', () => {
  const TestComponent = () => <div className="test" />;
  const WrappedComponent = WithSpinner(TestComponent);

  describe('If loading is true', () => {
    it('Should render Spinner component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />);
      expect(wrapper.exists(Spinner)).toBe(true);
    });

    it('Should render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />);
      expect(wrapper.exists(TestComponent)).toBe(false);
    });
  });

  describe('If loading is false', () => {
    it('Should render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);
      expect(wrapper.exists(TestComponent)).toBe(true);
    });

    it('Should not render Spinner', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);
      expect(wrapper.exists(Spinner)).toBe(false);
    });
  });
});
