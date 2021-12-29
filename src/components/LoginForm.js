import React from 'react'
import InputField from './InputField'
import Button from './Button'

const LoginForm = ({
  username,
  setUsername,
  password,
  setPassword,
  handleLogin,
}) => {
  const handleUsernameChange = ({ target }) => setUsername(target.value)
  const handlePasswordChange = ({ target }) => setPassword(target.value)

  return (
    <>
      <h1>log in to application</h1>
      <form onSubmit={handleLogin}>
        <InputField
          inputLable="username: "
          inputValue={username}
          inputType="text"
          changeHandler={handleUsernameChange}
          completeType="username"
        />
        <InputField
          inputLable="password: "
          inputValue={password}
          inputType="password"
          changeHandler={handlePasswordChange}
          completeType="current-password"
        />
        <Button text="Login" buttonType="submit" />
      </form>
    </>
  )
}

export default LoginForm
