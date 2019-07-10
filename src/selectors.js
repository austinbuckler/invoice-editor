import { createSelector } from 'reselect'

const TAX = 0.05

export const itemsSelector = state => state.items

export const subtotalSelector = createSelector(
  itemsSelector,
  items => items.reduce((acc, curr) => acc + curr.total, 0)
)
export const taxSelector = createSelector(
  subtotalSelector,
  subtotal => Math.round(subtotal) * TAX
)
export const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) => subtotal + tax
)
