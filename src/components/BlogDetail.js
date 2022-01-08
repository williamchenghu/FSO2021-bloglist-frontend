import React, { useRef } from 'react'
import Notification from './Notification'
import Blog from './Blog'
import Button from './Button'
import BlogForm from './BlogForm'
import ToggleView from './ToggleView'
import blogService from '../services/blogs'

const BlogDetail = ({
  user,
  setUser,
  blogs,
  setBlogs,
  message,
  setMessage,
  messageType,
  setMessageType,
}) => {
  const blogFormRef = useRef()

  const handleLogout = (event) => {
    event.preventDefault()
    localStorage.removeItem('loggedBlogUser')
    setUser(null)
  }

  const createBlog = async (blogObject) => {
    blogFormRef.current.toggleVisibility()
    const blogToCreate = await blogService.create(blogObject)
    setBlogs(blogs.concat(blogToCreate))
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={message} messageType={messageType} />
      <p>
        {user.name} logged-in{' '}
        <Button text="logout" eventHandler={handleLogout} buttonType="submit" />
      </p>
      <ToggleView
        buttonTextToShow="create new blog"
        buttonTextToHide="cancel"
        ref={blogFormRef}
      >
        <BlogForm
          setMessage={setMessage}
          setMessageType={setMessageType}
          createBlog={createBlog}
        />
      </ToggleView>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

export default BlogDetail
