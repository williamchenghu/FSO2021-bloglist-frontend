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

  const removeBlog = async (blogId) => {
    const blogToBeRemoved = blogs.find((e) => e.id === blogId)
    try {
      await blogService.remove(blogId)
      setBlogs(blogs.filter((e) => e.id !== blogId))
      setMessageType(true)
      setMessage(
        `Blog ${blogToBeRemoved.title} by ${blogToBeRemoved.author} removed.`
      )
      setTimeout(() => {
        setMessage(null)
        setMessageType()
      }, 5000)
    } catch (exception) {
      setMessageType(false)
      setMessage('Cannot delete the blog, perhaps that does not belong to you?')
      setTimeout(() => {
        setMessage(null)
        setMessageType()
      }, 5000)
    }
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
        <Blog key={blog.id} blog={blog} handleBlogRemove={removeBlog} />
      ))}
    </div>
  )
}

export default BlogDetail
