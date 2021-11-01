import axios from 'axios'

import Env from 'app/env'

const api = axios.create({
  baseURL: Env.apiUrl,
})

export default api
