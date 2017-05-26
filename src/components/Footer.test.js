import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

it('Footer renders correctly', () => {
  const renderedComponent = shallow(
    <Footer />
  );

  expect(renderedComponent).toMatchSnapshot();
});