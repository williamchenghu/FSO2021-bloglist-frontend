import React from 'react'
import blogService from '../services/blogs'
import Button from './Button'
import InputField from './InputField'

const BlogForm = ({
  title,
  setTitle,
  author,
  setAuthor,
  url,
  setUrl,
  blogs,
  setBlogs,
  setMessage,
  setMessageType,
}) => {
  const handleTitleChange = ({ target }) => setTitle(target.value)
  const handleAuthorChange = ({ target }) => setAuthor(target.value)
  const handleUrlChange = ({ target }) => setUrl(target.value)
  const handleBlogCreation = async (event) => {
    event.preventDefault()
    try {
      const blogToBeCreated = await blogService.create({
        title,
        author,
        url,
      })
      setMessageType(true)
      setMessage(
        `a new blog ${blogToBeCreated.title} by ${blogToBeCreated.author} added`
      )
      setTimeout(() => {
        setMessage(null)
        setMessageType()
      }, 5000)
      setBlogs(blogs.concat(blogToBeCreated))
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
