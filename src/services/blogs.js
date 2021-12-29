import axios from 'axios'

const baseUrl = 'http://localhost:3003/api/blogs'

const getAll = async (authToken) => {
  const res = await axios.get(baseUrl, authToken)
  return res.data
}

export default { getAll }
