import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WeatherCard from '../components/WeatherCard';

it('renders without crashing', () => {
  const renderedComponent = mount(
    <App />,
  );
  expect(renderedComponent.find('div').length).toBeGreaterThanOrEqual(1)
});

it('renders the Header', () => {
  const renderedComponent = shallow(
    <App />
  );
  expect(renderedComponent.find(Header).length).toBe(1);
});

it('renders the WeatherCard', () => {
  const renderedComponent = shallow (
    <App />
  );
  expect(renderedComponent.find(WeatherCard).length).toBe(3);
});

it('renders the Footer', () => {
  const renderedComponent = shallow(
    <App />
  );
  expect(renderedComponent.find(Footer).length).toBe(1);
});