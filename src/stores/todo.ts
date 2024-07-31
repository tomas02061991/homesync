import { defineStore } from 'pinia'
import { API } from '../services'
import type { AxiosError } from 'axios'
import type { APIResponse } from '@/services/types'
import type { TodoList } from '@/services/todo/types'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    lists: []
  }),
  getters: {
    getLists(state) {
      return state.lists
    }
  },
  actions: {
    async fetchLists() {
      try {
        const { data, status } = await API.todo.getTodoLists()
        if (status === 200) {
          this.lists = data
        }
      } catch (error) {
        const _error = error as AxiosError<string>
        return {
          success: false,
          status: _error.response?.status,
          content: null
        }
      }
    },
    async getList(id: string): Promise<APIResponse<TodoList | null>> {
      try {
        const { data, status } = await API.todo.getTodoList(id)
        if (status === 200) {
          return {
            success: true,
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
