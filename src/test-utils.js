import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducers'
import { render } from '@testing-library/react'

export function renderWithRedux (ui, {
  initialState,
  store = createStore(appReducer, initialState)
} = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  }
}
