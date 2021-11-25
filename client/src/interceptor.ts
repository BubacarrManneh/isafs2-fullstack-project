import axios from 'axios'

axios.interceptors.request.use((request) => {
    const token = localStorage.getItem('token') as string
    const requestHeader = {
      Authorization: `Bearer ${token}`,
    }
    request.headers = requestHeader
    return request
  })