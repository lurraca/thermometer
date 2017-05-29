import React from 'react';
import { mount, shallow } from 'enzyme';

import WeatherCard from './WeatherCard';

it('renders correctly WeatherCard ', () => {
  const renderedComponent = shallow(
    <WeatherCard />
  );

  expect(renderedComponent).toMatchSnapshot();
});