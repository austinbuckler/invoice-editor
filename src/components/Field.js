import React from 'react'
import '../css/Field.css'

function Field ({ label, placeholder, name, type = 'text', ...rest }) {
  return (
    <section className='Field'>
      <label className='Field-label' htmlFor={name}>{label || placeholder}</label>
      <input data-testid={`field--${name}`} type={type} placeholder={placeholder} name={name} {...rest} />
    </section>
  )
}

export default Field
