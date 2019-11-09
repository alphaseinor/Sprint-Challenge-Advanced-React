import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NavBar from './Components/NavBar';

afterEach(cleanup);

it('renders', () => {
  const {asFragment} = render(<NavBar dark=".dark-mode" />)
  expect(asFragment()).toMatchSnapshot();
});