import { defineStore } from 'pinia'
import axios from 'axios'
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
    async login(credentials: oldUser) {
      try {
        const response = await axios.post('/api/login', credentials)
        this.user = response.data // Update based on your API response structure
        this.isLoggedIn = true
        return response.data
      } catch (error) {
        console.error('Login failed:', error)
        throw error
      }
    },

    async logout() {
      try {
        const token = localStorage.getItem('token')
        await axios.post(
          '/api/logout',
          {},
          {
            headers: { Authorization: 'Bearer ' + token }
          }
        )
        this.user = null
        this.isLoggedIn = false
      } catch (error) {
        console.error('Logout failed:', error)
        throw error
      }
    },

    async register(newUser: User) {
      try {
        const response = await axios.post('api/register', newUser)
        this.isLoggedIn = true
        this.user = response.data.user
        return response.data
      } catch (error) {
        console.error('Registration failed:', error)
        throw error
      }
    },

    async getUser() {
      try {
        const response = await axios.get('/api/user')
        this.user = response.data // Update based on your API response structure
      } catch (error) {
        console.error('Get user failed:', error)
        throw error
      }
    }
  }
})
