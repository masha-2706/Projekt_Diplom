import React from 'react'

const Button = ({children, onClick, className, type = "button"}) => {
  return (
    <button
    type={type}
    onClick={onClick}
    className={`base-button ${className}`}
  >
    {children}
  </button>
  )
}

export default Button