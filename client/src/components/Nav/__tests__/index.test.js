import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Nav from '..';

afterEach(cleanup);

describe('Nav Component', () => {
  // baseline Nav test
  it('renders', () => {
    render(<Nav />);
  });

  it('matches snapshot DOM node structure', () => {
    // render Nav snapshot
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});
