import React from 'react'

const Button = ({children, onClick, className, type = "button", disabled = false}) => {
  return (
    <button
    type={type}
    onClick={onClick}
    className={`base-button ${className}`}
    // disabled={disabled}
  >
    {children}
  </button>
  )
}

export default Button