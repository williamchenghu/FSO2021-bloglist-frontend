import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'
import Button from './Button'

describe('blog display without details', () => {
  let component
  const blog = {
    user: {
      id: 'testUser',
      name: 'Test User',
    },
    id: 'randomIdForTest',
    likes: 10,
    author: 'testAuthor',
    title: 'Blog for test',
    url: 'http://testBlog',
  }

  beforeEach(() => {
    component = render(<Blog blog={blog} />)
  })

  test('shows title & author', () => {
    const lessDetailBlog =
      component.container.querySelector('.lessDetailedBlog')
    expect(lessDetailBlog).not.toHaveStyle('display: none')
  })

  test('shows url & likes', () => {
    const detailedBlog = component.container.querySelector('.detailedBlog')
    expect(detailedBlog).toHaveStyle('display: none')
  })
})

describe('blog display details upon view button click', () => {
  let component
  const blog = {
    user: {
      id: 'testUser',
      name: 'Test User',
    },
    id: 'randomIdForTest',
    likes: 10,
    author: 'testAuthor',
    title: 'Blog for test',
    url: 'http://testBlog',
  }

  beforeEach(() => {
    component = render(<Blog blog={blog} />)
  })

  test('render content', () => {
    const showDetails = component.getByText('view')
    fireEvent.click(showDetails)
    const detailedBlog = component.container.querySelector('.detailedBlog')
    expect(detailedBlog).not.toHaveStyle('display: none')
  })
})

test('clicking the like twice calls event handler twice', () => {
  const mockHandler = jest.fn()
  const component = render(<Button text="like" eventHandler={mockHandler} />)
  const likeButton = component.getByText('like')
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)
  expect(mockHandler.mock.calls).toHaveLength(2)
})
