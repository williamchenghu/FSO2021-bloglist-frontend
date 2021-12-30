import React from 'react'
import Notification from './Notification'
import Blog from './Blog'
import Button from './Button'
import BlogForm from './BlogForm'

const BlogDetail = ({
  user,
  setUser,
  blogs,
  setBlogs,
  message,
  setMessage,
  messageType,
  setMessageType,
  title,
  setTitle,
  author,
  setAuthor,
  url,
  setUrl,
}) => {
  const handleLogout = (event) => {
    event.preventDefault()
    localStorage.removeItem('loggedBlogUser')
    setUser(null)
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={message} messageType={messageType} />
      <p>
        {user.name} logged-in{' '}
        <Button text="logout" eventHandler={handleLogout} buttonType="submit" />
      </p>
      <BlogForm
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        url={url}
        setUrl={setUrl}
        blogs={blogs}
        setBlogs={setBlogs}
        setMessage={setMessage}
        setMessageType={setMessageType}
      />
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

export default BlogDetail
