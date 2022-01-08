import React, { useState, useImperativeHandle } from 'react'
import Button from './Button'

const ToggleView = React.forwardRef(
  ({ buttonTextToShow, buttonTextToHide, children }, ref) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
      setVisible(!visible)
    }

    useImperativeHandle(ref, () => ({
      toggleVisibility,
    }))

    return (
      <div>
        <div style={hideWhenVisible}>
          <Button text={buttonTextToShow} eventHandler={toggleVisibility} />
        </div>
        <div style={showWhenVisible}>
          {children}
          <Button text={buttonTextToHide} eventHandler={toggleVisibility} />
        </div>
      </div>
    )
  }
)

export default ToggleView
