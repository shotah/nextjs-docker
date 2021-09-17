/**
 * @jest-environment jsdom
 */

import React, { Suspense } from 'react';
import { render } from '@testing-library/react'
import { RecoilRoot } from 'recoil';
import Home from '../pages/index';

it('renders homepage unchanged', async() => { 
  const { asFragment } = render(
    <RecoilRoot>
      <Suspense fallback={<div>loading...</div>}>
        <Home />
      </Suspense>
    </RecoilRoot>
  );
  expect(asFragment()).toMatchSnapshot();
})

