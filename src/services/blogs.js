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

export default { getAll, setToken }
