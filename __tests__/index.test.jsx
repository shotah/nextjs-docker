import React from 'react';
import { RecoilRoot } from 'recoil';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a heading', async () => {
    render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );

    const heading = screen.getByRole('heading', {
      name: /Welcome to Astro!/i
    });

    expect(heading).toBeInTheDocument();
  });
});
