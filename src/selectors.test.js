/* global beforeEach, test, expect */

import { subtotalSelector, taxSelector, totalSelector } from './selectors'

const state = {}
let items = null

beforeEach(() => {
  items = [
    { total: 2000 },
    { total: 3000 },
    { total: 0.32 }
  ]
  state.items = items
})

test('subtotalSelector should return the total of all items', () => {
  expect(subtotalSelector(state)).toBe(5000.32)
})

test('taxSelector should return 5% of the subtotal', () => {
  expect(taxSelector(state)).toBe(250)
})

test('totalSelector should return the sum of tax + subtotal', () => {
  expect(totalSelector(state)).toBe(5250.32)
})
