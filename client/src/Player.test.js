import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Player from './Components/Player'

afterEach(cleanup);

const data = {
  name: "brian",
  country: "brianlandia"
}

it('renders', () => {
  const {asFragment} = render(<Player key={1} player={data} />)
  expect(asFragment()).toMatchSnapshot();
});
