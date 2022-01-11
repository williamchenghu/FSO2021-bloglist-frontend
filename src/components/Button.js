import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, eventHandler, buttonType }) => (
  <button onClick={eventHandler} type={buttonType}>
    {text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button
