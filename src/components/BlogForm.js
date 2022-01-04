import React, { useState } from 'react'
import Button from './Button'
import InputField from './InputField'

const BlogForm = ({ setMessage, setMessageType, createBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const blogToBeCreated = {
    title,
    author,
    url,
  }
  const handleTitleChange = ({ target }) => setTitle(target.value)
  const handleAuthorChange = ({ target }) => setAuthor(target.value)
  const handleUrlChange = ({ target }) => setUrl(target.value)
  const handleBlogCreation = (event) => {
    event.preventDefault()

    try {
      createBlog(blogToBeCreated)
      setMessageType(true)
      setMessage(
        `a new blog ${blogToBeCreated.title} by ${blogToBeCreated.author} added`
      )
      setTimeout(() => {
        setMessage(null)
        setMessageType()
      }, 5000)
      setTitle('')
      setAuthor('')
      setUrl('')
    } catch (exception) {
      setMessageType(false)
      setMessage('Cannot create blog, sth had gone wrong.')
      setTimeout(() => {
        setMessage(null)
        setMessageType()
      }, 5000)
    }
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleBlogCreation}>
        <InputField
          inputLable="title: "
          inputValue={title}
          inputType="text"
          changeHandler={handleTitleChange}
        />
        <InputField
          inputLable="author: "
          inputValue={author}
          inputType="text"
          changeHandler={handleAuthorChange}
        />
        <InputField
          inputLable="url: "
          inputValue={url}
          inputType="url"
          changeHandler={handleUrlChange}
        />
        <Button text="create" buttonType="submit" />
      </form>
    </>
  )
}

export default BlogForm
