import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.20.16.1:8080',
})

export default api
