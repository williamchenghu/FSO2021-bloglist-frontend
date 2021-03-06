import React, { useState } from 'react'
import Button from './Button'
import blogService from '../services/blogs'

const Blog = ({ blog, handleBlogRemove }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }
  const [showDetail, setShowDetail] = useState(false)
  const [buttonText, setButtonText] = useState('view')
  const [likes, setLikes] = useState(blog.likes)
  const visibilityStyle = { display: showDetail ? '' : 'none' }

  const toggleVisibility = () => {
    setShowDetail(!showDetail)
    setButtonText(showDetail ? 'view' : 'hide')
  }

  const handleLike = async () => {
    const updateBlog = {
      user: blog.user.id,
      likes: likes + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url,
    }
    const blogLikesUpdate = await blogService.update(blog.id, updateBlog)
    setLikes(blogLikesUpdate.likes)
  }

  const handleRemove = () =>
    // eslint-disable-next-line no-alert
    window.confirm(`Remove blog ${blog.title} by ${blog.author}?`) &&
    handleBlogRemove(blog.id)

  return (
    <div style={blogStyle}>
      <div className="lessDetailedBlog">
        {blog.title} {blog.author}{' '}
        <Button text={buttonText} eventHandler={toggleVisibility} />
      </div>
      <div style={visibilityStyle} className="detailedBlog">
        <div>{blog.url}</div>
        <div>
          likes {likes}
          <Button text="like" eventHandler={handleLike} />
        </div>
        <div>{blog.user.name}</div>
        <Button text="remove" eventHandler={handleRemove} />
      </div>
    </div>
  )
}

export default Blog
