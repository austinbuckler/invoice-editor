/* global describe, test, beforeEach, expect */

import { updateItem } from './utils'

let items = null

beforeEach(() => {
  items = [
    {
      id: 'item-00',
      name: 'Item 01',
      quantity: 1,
      price: 1000,
      total: 1000
    }
  ]
})

describe('#updateItem', () => {
  test('should return a new item with updated properties', () => {
    const itemId = 'item-00'
    const payload = { price: 2000, total: 2000 }
    expect(updateItem(itemId, payload, items)).toStrictEqual([
      {
        id: 'item-00',
        name: 'Item 01',
        quantity: 1,
        price: 2000,
        total: 2000
      }
    ])
  })
})
