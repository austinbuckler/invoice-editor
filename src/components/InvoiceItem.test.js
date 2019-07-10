/* global afterEach, test, expect */

import React from 'react'
import InvoiceItem from './InvoiceItem'
import { render, cleanup } from '@testing-library/react'

const defaultItem = {
  id: `default-item`,
  name: 'New Item',
  quantity: 1,
  price: 1000,
  total: 1000
}

afterEach(cleanup)

test('can render with redux defaults', async () => {
  const { getByTestId } = render(<InvoiceItem item={defaultItem} />)
  // fireEvent.
  expect(getByTestId('field--name'))
  // let state = store.getState()
  // expect(state.items.length).toBe(2)

  // fireEvent.click(getByTestId('add-item'))

  // state = store.getState()
  // expect(state.items.length).toBe(3)
})
