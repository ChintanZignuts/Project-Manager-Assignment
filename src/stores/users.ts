import { defineStore } from 'pinia'
import axios from 'axios'
import { toast, type ToastOptions } from 'vue3-toastify'
import type { User, oldUser } from '../user'

interface UserState {
  user: User | null
  isLoggedIn: boolean
}

export const useUsers = defineStore('users', {
  state: (): UserState => ({
    user: null,
    isLoggedIn: false
  }),

  actions: {
    async handleRequest(request: Promise<any>, errorMessage: string) {
      try {
        const response = await request
        return response.data
      } catch (error: any) {
        toast.error(error.response?.data.message || errorMessage, {
          autoClose: 1000,
          position: toast.POSITION.TOP_RIGHT
        } as ToastOptions)
      }
    },

    async login(credentials: oldUser) {
      return this.handleRequest(axios.post('/api/login', credentials), 'Login failed:')
    },

    async logout() {
      const token = localStorage.getItem('token')
      return this.handleRequest(
        axios.post('/api/logout', {}, { headers: { Authorization: 'Bearer ' + token } }),
        'Logout failed:'
      )
    },

    async register(newUser: User) {
      return this.handleRequest(axios.post('api/register', newUser), 'Registration failed:')
    },

    async getUser() {
      return this.handleRequest(axios.get('/api/user'), 'Get user failed:')
    }
  }
})
