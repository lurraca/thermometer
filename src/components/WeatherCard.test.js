import React from 'react';
import { mount, shallow } from 'enzyme';

import WeatherCard from './WeatherCard';

it('renders correctly WeatherCard ', () => {
  const forecast = {
    "avgTemp": "2",
    "weatherDesc": "rainy",
    "humidity": 100
  };

  const renderedComponent = shallow(
    <WeatherCard data={forecast} />
  );

  expect(renderedComponent).toMatchSnapshot();
});