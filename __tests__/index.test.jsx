import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { act } from "react-dom/test-utils";
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a heading', async() => {
    act(() => { render(
      <RecoilRoot>
        <Suspense fallback={<div>loading...</div>}>
          <Home />
        </Suspense>
      </RecoilRoot>
    )});
    const heading = screen.getByRole('heading', {
      name: /Welcome to Astro!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
