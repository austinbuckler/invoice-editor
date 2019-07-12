/* global afterEach, test, expect */

import React from 'react'
import App from './App'
import { cleanup, fireEvent } from '@testing-library/react'
import { renderWithRedux } from '../test-utils'

afterEach(cleanup)

test('can render with redux defaults', () => {
  const { store } = renderWithRedux(<App />)
  const state = store.getState()
  expect(state.items.length).toBe(2)
})

test('can render additional items when "Add +" is clicked.', () => {
  const { getByTestId, store } = renderWithRedux(<App />)
  let state = store.getState()

  expect(state.items.length).toBe(2)

  fireEvent.click(getByTestId('add-item'))

  state = store.getState()
  expect(state.items.length).toBe(3)
})

test('can update an item', () => {
  const { getByTestId, store } = renderWithRedux(<App />)
  const nameField = getByTestId('init-00-field--name')
  const priceField = getByTestId('init-00-field--price')
  let state = null

  fireEvent.change(nameField, { target: { value: 'Widgetttt' } })
  fireEvent.change(priceField, { target: { value: '3000' } })

  state = store.getState()
  expect(state.items[0]).toStrictEqual({
    id: 'init-00',
    name: 'Widgetttt',
    quantity: 2,
    price: 3000,
    total: 6000
  })
})
