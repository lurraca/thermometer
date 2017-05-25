import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header'

it('Header renders correctly', () => {
  const renderedComponent = shallow(
    <Header />
  );

  expect(renderedComponent).toMatchSnapshot();
})