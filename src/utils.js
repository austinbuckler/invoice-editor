const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

export function fmtCurrency (number) {
  return formatter.format(number)
}

export function createReducer (initialState, handlers) {
  return function reducer (state = initialState, action) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export function updateItem (id, payload, items) {
  return items.map(item => {
    const isMatch = item.id === id
    return isMatch ? ({ ...item, ...payload }) : item
  })
}
