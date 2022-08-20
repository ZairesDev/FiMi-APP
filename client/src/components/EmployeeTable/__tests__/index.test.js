import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Table from '..';

afterEach(cleanup);

describe('Table Component', () => {
  // baseline Table test
  it('renders', () => {
    render(<Table />);
  });

  it('matches snapshot DOM node structure', () => {
    // render Table snapshot
    const { asFragment } = render(<Table />);
    expect(asFragment()).toMatchSnapshot();
  });
});
