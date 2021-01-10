import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';

import App from '../App';

describe('App component tests', () => {
  test('should to show App component', () => {
    const greeting = 'Hi, I am Goku';
    const wrapper = shallow(<App greeting={greeting} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should to show subtitle', () => {
    const greeting = 'Hi, I am Goku';
    const subtitle = 'Ok Google!';
    const wrapper = shallow(<App greeting={greeting} subtitle={subtitle} />);

    const paragraph = wrapper.find('p').text();

    expect(paragraph).toBe(subtitle);
  });
});
