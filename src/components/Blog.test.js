import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

describe('test blog display without details', () => {
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
