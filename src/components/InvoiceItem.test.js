/* global afterEach, test, expect, jest */

import React from 'react'
import InvoiceItem from './InvoiceItem'
import { render, cleanup, fireEvent } from '@testing-library/react'

const defaultItem = {
  id: `default-item`,
  name: 'New Item',
  quantity: 1,
  price: 1000,
  total: 1000
}

afterEach(cleanup)

test('a change in values calls onChange handler', async () => {
  const handleChange = jest.fn()
  const { getByTestId } = render(<InvoiceItem item={defaultItem} onChange={handleChange} />)
  const nameField = getByTestId('default-item-field--name')
  const quantityField = getByTestId('default-item-field--quantity')

  fireEvent.change(nameField, { target: { value: 'Default Item' } })
  expect(handleChange).toHaveBeenCalledTimes(2)

  fireEvent.change(quantityField, { target: { value: '2' } })
  expect(handleChange).toHaveBeenCalledTimes(3)
})

test('when the remove button is clicked onRemove should be called.', async () => {
  const handleRemove = jest.fn()
  const { getByTestId } = render(<InvoiceItem item={defaultItem} onChange={handleRemove} />)
  const removeButton = getByTestId('default-item-btn--remove')

  fireEvent.click(removeButton)
  expect(handleRemove).toHaveBeenCalledTimes(1)
})
