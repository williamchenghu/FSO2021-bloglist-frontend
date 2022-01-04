import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import BlogDetail from './components/BlogDetail'

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
        const respondedBlogs = await blogService.getAll()
        setBlogs(respondedBlogs)
      }
      fetchBlogs()
    }
  }, [user])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      setUser(loggedUser)
      blogService.setToken(loggedUser.token)
    }
  }, [])

  return !user ? (
    <LoginForm
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      setUser={setUser}
      message={message}
      setMessage={setMessage}
      messageType={messageType}
      setMessageType={setMessageType}
    />
  ) : (
    <BlogDetail
      user={user}
      setUser={setUser}
      blogs={blogs}
      setBlogs={setBlogs}
      message={message}
      setMessage={setMessage}
      messageType={messageType}
      setMessageType={setMessageType}
    />
  )
}

export default App
