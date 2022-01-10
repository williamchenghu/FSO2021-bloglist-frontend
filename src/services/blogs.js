import axios from 'axios'

const baseUrl = 'http://localhost:3003/api/blogs'

let token
const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  const config = {
    headers: { Authorization: token },
  }
  const res = await axios.get(baseUrl, config)
  return res.data
}

const create = async (newBlog) => {
  const config = {
    headers: { Authorization: token },
  }
  const res = await axios.post(baseUrl, newBlog, config)
  return res.data
}

const update = async (blogId, updateBlog) => {
  const config = {
    headers: { Authorization: token },
  }
  const res = await axios.put(`${baseUrl}/${blogId}`, updateBlog, config)
  return res.data
}

const remove = async (blogId) => {
  const config = {
    headers: { Authorization: token },
  }
  const res = await axios.delete(`${baseUrl}/${blogId}`, config)
  return res
}

export default { getAll, create, setToken, update, remove }
