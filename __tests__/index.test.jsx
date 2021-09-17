/**
 * @jest-environment jsdom
 */

import React from 'react'
import { act } from "react-dom/test-utils";
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    act(() => {render(<Home />)});
    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
