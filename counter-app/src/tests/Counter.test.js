import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';

import Counter from '../Counter';

describe('Counter Component Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  test('should to show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should show the default value of 100', () => {
    const value = 100;
    const wrapper = shallow(<Counter value={value} />);

    const counterValue = wrapper.find('h2').text().trim();

    expect(counterValue).toBe(value.toString());
  });

  test('should increment the counter', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterValue = wrapper.find('h2').text().trim();
    expect(counterValue).toBe('11');
  });

  test('should decrease the counter', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterValue = wrapper.find('h2').text().trim();
    expect(counterValue).toBe('9');
  });

  test('should reset the counter', () => {
    const wrapper = shallow(<Counter value={100} />);
    wrapper.find('button').at(1).simulate('click');
    const counterValue = wrapper.find('h2').text().trim();
    expect(counterValue).toBe('100');
  });
});
