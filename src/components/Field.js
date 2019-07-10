import React from 'react'

function Field({ name, label, placeholder, type = 'text', ...rest }) {
  return (
    <section>
      <label htmlFor={name}>{label || placeholder}</label>
      <input type={type} placeholder={placeholder} name={name} {...rest} />
    </section>
  )
}

export default Field