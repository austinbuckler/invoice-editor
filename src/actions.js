import uuid from 'uuid/v4'

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const EDIT_ITEM = 'EDIT_ITEM'

export function addItem() {
  const id = uuid()
  return {
    type: ADD_ITEM,
    payload: {
      id,
      name: 'New Item',
      quantity: 1,
      price: 1000,
      total: 1000,
    }
  }
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    payload: id,
  }
}

export function editItem(id, data) {
  return {
    type: EDIT_ITEM,
    payload: { id, ...data }
  }
}