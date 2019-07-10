import React, { useEffect } from 'react'
import Field from './Field'
import { fmtCurrency } from '../utils'
import '../css/InvoiceItem.css'

const getTotal = (quantity, price) => price * quantity

function InvoiceItem ({ item, onChange = () => {}, onRemove = () => {} }) {
  const { id, quantity, price, name, total } = item

  useEffect(() =>
    onChange(id, { total: getTotal(quantity, price) }),
  [quantity, price, id, onChange]
  )

  function handleChange (evt) {
    evt.preventDefault()
    const { name: targetName, value: targetValue } = evt.target
    const value = parseInt(targetValue.replace(/\D/g, ''), 10) || targetValue
    onChange(id, { [targetName]: value })
  }

  function handleRemove (evt) {
    evt.preventDefault()
    onRemove(id)
  }

  return (
    <div className='InvoiceItem'>
      <Field className='InvoiceItem-input' value={name} name='name' placeholder='Item name' onChange={handleChange} />
      <Field className='InvoiceItem-input' value={quantity} name='quantity' placeholder='Quantity' type='number' onChange={handleChange} />
      <Field className='InvoiceItem-input' value={price.toLocaleString()} name='price' placeholder='Price' onChange={handleChange} />
      <Field className='InvoiceItem-input' value={fmtCurrency(total)} readOnly label='Total' disabled />
      <button className='InvoiceItem-btn' type='button' onClick={handleRemove}>&times;</button>
    </div>
  )
}

export default InvoiceItem
