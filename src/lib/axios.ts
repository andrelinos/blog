import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  // withCredentials: true,
})

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random()) * 3000),
    )

    return config
  })
}

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const genericError = {
      message: 'Ocorreu um erro na requisição. Tente novamente mais tarde.',
    }

    if (error.response) {
      console.error('Erro de resposta:', error.response.data)
      return Promise.reject(error.response.data)
    } else if (error.request) {
      console.error('Erro de requisição:', error.request)
      return Promise.reject(genericError)
    } else {
      console.error('Erro desconhecido:', error.message)
      return Promise.reject(genericError)
    }
  },
)
