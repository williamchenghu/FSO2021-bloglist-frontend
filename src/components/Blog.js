import React, { useState } from 'react'
import Button from './Button'

const Blog = ({ blog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }
  const [showDetail, setShowDetail] = useState(false)
  const [buttonText, setButtonText] = useState('view')
  const visibilityStyle = { display: showDetail ? '' : 'none' }

  const toggleVisibility = () => {
    setShowDetail(!showDetail)
    setButtonText(showDetail ? 'view' : 'hide')
  }

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}{' '}
        <Button text={buttonText} eventHandler={toggleVisibility} />
      </div>
      <div style={visibilityStyle}>
        <div>{blog.url}</div>
        <div>
          likes {blog.likes}
          <Button text="like" />
        </div>
        <div>{blog.user.name}</div>
      </div>
    </div>
  )
}

export default Blog
