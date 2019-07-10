import { createReducer } from '../utils'
import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from '../actions'

const initialState = [
  {
    id: 'init-00',
    name: 'Widget',
    quantity: 2,
    price: 10
  },
  {
    id: 'init-01',
    name: 'Cog',
    quantity: 2,
    price: 15
  }
]

export default createReducer(initialState, {
  [ADD_ITEM]: (state, action) => [...state, action.payload],
  [REMOVE_ITEM]: (state, action) => state.filter(item => item.id !== action.payload),
  [EDIT_ITEM]: (state, { payload }) => state.map(item => {
    const isEditedItem = item.id === payload.id
    return isEditedItem ? ({ ...item, ...payload }) : item
  })
})
