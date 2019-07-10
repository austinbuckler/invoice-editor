/* global afterEach, test, expect */

import React from 'react'
import App from './App'
import { cleanup, fireEvent } from '@testing-library/react'
import { renderWithRedux } from '../test-utils'

afterEach(cleanup)

test('can render with redux defaults', async () => {
  const { getByTestId, store } = renderWithRedux(<App />)
  let state = store.getState()
  expect(state.items.length).toBe(2)

  fireEvent.click(getByTestId('add-item'))

  state = store.getState()
  expect(state.items.length).toBe(3)
})
