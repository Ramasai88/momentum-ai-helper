import axios from 'axios'
import { env } from '@/lib/env'

const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
