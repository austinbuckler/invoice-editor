import React, { useEffect } from 'react'
import '../css/InvoiceItem.css'
import { fmtCurrency } from '../utils';

const getTotal = (quantity, price) => price * quantity

function InvoiceItem({ item, onChange = () => {}, onRemove = () => {}, }) {
  const { id, quantity, price, name, total } = item

  useEffect(() => 
    onChange(id, { total: getTotal(quantity, price) }), 
    [quantity, price, id]
  )

  function handleChange(evt) {
    evt.preventDefault();
    const { name: targetName, value: targetValue } = evt.target
    const value = parseInt(targetValue.replace(/\D/g, ''), 10) || targetValue
    onChange(id, { [targetName]: value })
  }

  return (
    <div className='InvoiceItem'>
      <input className='InvoiceItem-input' value={name} name='name' placeholder='Item name' onChange={handleChange} />
      <input className='InvoiceItem-input' value={quantity} name='quantity' placeholder='Quantity' type='number' onChange={handleChange} />
      <input className='InvoiceItem-input' value={price.toLocaleString()} name='price' placeholder='Price' onChange={handleChange} />
      <span>{fmtCurrency(total)}</span>
      <button type='button' onClick={onRemove}>&times;</button>
    </div>
  )
}

export default InvoiceItem