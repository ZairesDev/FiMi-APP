import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Search from '..';

afterEach(cleanup);

describe('Search Component', () => {
  // baseline Search test
  it('renders', () => {
    render(<Search />);
  });

  it('matches snapshot DOM node structure', () => {
    // render Search snapshot
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });
});
