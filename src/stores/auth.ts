import { defineStore } from 'pinia'
import { API } from '../services'
import type { APIResponse } from '../services/types'
import { AxiosError } from 'axios'
import type { User, Token } from '@/services/auth/types'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {} as User,
    token: null
  }),
  getters: {
    getUser(state) {
      return state.user
    }
  },
  actions: {
    async signup(email: string, password: string): Promise<APIResponse<Token | null>> {
      try {
        const { status, data } = await API.auth.signUp(email, password)
        if (status === 200) {
          console.log('yaii')
          return {
            success: true,
            content: { token: data.token }
          }
        }
      } catch (error) {
        const _error = error as AxiosError<string>
        return {
          success: false,
          status: _error.response?.status,
          content: null
        }
      }
      return {
        success: false,
        content: null,
        status: 400
      }
    },
    async login(email: string, password: string): Promise<APIResponse<User | null>> {
      try {
        const { status, data } = await API.auth.login(email, password)
        if (status === 200) {
          this.user = data
          return {
            success: true,
            status: status,
            content: data
          }
        }
      } catch (error) {
        const _error = error as AxiosError<string>
        return {
          success: false,
          status: _error.response?.status,
          content: null
        }
      }
      return {
        success: false,
        content: null,
        status: 400
      }
    }
  }
})
