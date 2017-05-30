import React from 'react';
import {shallow} from 'enzyme';

import WeatherCard from './WeatherCard';


it('renders correctly WeatherCard ', () => {
  const forecast = {
    temp: {
      day: 2
    },
    weather: [{
      description: 'rainy'
    }],
    'humidity': 100
  };

  const renderedComponent = shallow(
    <WeatherCard data={forecast}/>
  );

  expect(renderedComponent).toMatchSnapshot();
});