import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import Blog from './components/Blog'
import Notification from './components/Notification'

const App = () => {
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState()

  useEffect(() => {
    if (user) {
      const fetchBlogs = async () => {
        const authToken = { headers: { Authorization: `Bearer ${user.token}` } }
        const respondedBlogs = await blogService.getAll(authToken)
        setBlogs(respondedBlogs)
      }
      fetchBlogs()
    }
  }, [user])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const loginUser = await loginService.login({
        username,
        password,
      })
      setUser(loginUser)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setMessageType(false)
      setMessage('Wrong credentials')
      setTimeout(() => {
        setMessage(null)
        setMessageType()
      }, 5000)
    }
  }

  const blogList = () => (
    <div>
      <h2>blogs</h2>
      <p>{user.name} logged-in</p>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  )

  return (
    <>
      <Notification message={message} messageType={messageType} />
      {!user ? (
        <LoginForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      ) : (
        blogList()
      )}
    </>
  )
}

export default App
