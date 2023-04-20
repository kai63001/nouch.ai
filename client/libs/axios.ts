import axios from 'axios'
import { getSession } from 'next-auth/react'

const ApiClient = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:4000',
  })
  instance.interceptors.request.use(async (request: any) => {
    const session: any = await getSession()

    if (session) {
      request.headers.Authorization = `Bearer ${session.token}`
    }
    return request
  })

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      console.log('error', error)
    }
  )

  return instance
}

export default ApiClient()