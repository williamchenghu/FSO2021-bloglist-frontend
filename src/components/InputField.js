import React from 'react'

const InputField = ({
  inputLable,
  inputValue,
  inputType,
  changeHandler,
  completeType,
}) => (
  <div>
    {inputLable}{' '}
    <input
      value={inputValue}
      onChange={changeHandler}
      type={inputType}
      autoComplete={completeType}
    />
  </div>
)

export default InputField
