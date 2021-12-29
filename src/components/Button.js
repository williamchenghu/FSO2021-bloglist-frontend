import React from 'react'

const Button = ({ text, eventHandler, buttonType }) => (
  <button onClick={eventHandler} type={buttonType}>
    {text}
  </button>
)

export default Button
