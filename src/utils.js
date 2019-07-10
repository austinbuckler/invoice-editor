const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency', 
  currency: 'USD'
})

export function fmtCurrency(number) {
  return formatter.format(number)
}

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}