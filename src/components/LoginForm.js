import React from 'react'
import loginService from '../services/login'
import blogService from '../services/blogs'
import Notification from './Notification'
import InputField from './InputField'
import Button from './Button'

const LoginForm = ({
  username,
  setUsername,
  password,
  setPassword,
  setUser,
  message,
  setMessage,
  messageType,
  setMessageType,
}) => {
  const handleUsernameChange = ({ target }) => setUsername(target.value)
  const handlePasswordChange = ({ target }) => setPassword(target.value)
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const loginUser = await loginService.login({
        username,
        password,
      })
      window.localStorage.setItem('loggedBlogUser', JSON.stringify(loginUser))
      blogService.setToken(loginUser.token)
      setUser(loginUser)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setMessageType(false)
      setMessage('Wrong username or password')
      setTimeout(() => {
        setMessage(null)
        setMessageType()
      }, 5000)
    }
  }

  return (
    <>
      <h1>log in to application</h1>
      <Notification message={message} messageType={messageType} />
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
