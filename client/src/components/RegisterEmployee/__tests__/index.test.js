import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Register from '..';

afterEach(cleanup);

describe('Register Component', () => {
  // baseline Register test
  it('renders', () => {
    render(<Register />);
  });

  it('matches snapshot DOM node structure', () => {
    // render Register snapshot
    const { asFragment } = render(<Register />);
    expect(asFragment()).toMatchSnapshot();
  });
});
