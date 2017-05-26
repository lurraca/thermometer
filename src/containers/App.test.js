import React from 'react';
import { mount, shallow } from 'enzyme';
// import ReactDOM from 'react-dom';
import App from './App';

import Header from '../components/Header';
import Footer from '../components/Footer';

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

it('renders the Footer', () => {
  const renderedComponent = shallow(
    <App />
  );
  expect(renderedComponent.find(Footer).length).toBe(1);
});