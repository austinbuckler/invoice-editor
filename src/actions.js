import uuid from 'uuid/v4'

const defaultItem = {
  name: 'New Item',
  quantity: 1,
  price: 1000,
  total: 1000
}

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const EDIT_ITEM = 'EDIT_ITEM'

export function addItem (item = defaultItem) {
  const id = uuid()
  return {
    type: ADD_ITEM,
    payload: { id, ...item }
  }
}

export function removeItem (id) {
  return {
    type: REMOVE_ITEM,
    payload: id
  }
}

export function editItem (id, data) {
  return {
    type: EDIT_ITEM,
    payload: { id, ...data }
  }
}
