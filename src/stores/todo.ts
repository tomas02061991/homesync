import { defineStore } from 'pinia'
import { API } from '../services'
import type { AxiosError } from 'axios'
import type { TodoItem, TodoList } from '@/services/todo/types'

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
    async getList(id: string): Promise<TodoList | null> {
      try {
        const { data, status } = await API.todo.getTodoList(id)
        if (status === 200) {
          return data
        }
      } catch (error) {
        const _error = error as AxiosError<string>
        return null
      }
      return null
    },
    async updateItem(id: string, value: { completed: boolean }): Promise<TodoItem | null> {
      try {
        const { data, status } = await API.todo.updateTodoItem(id, value)
        if (status === 200) {
          return data
        }
      } catch (error) {
        const _error = error as AxiosError<string>
        return null
      }
      return null
    },
    async deleteItem(id: string ) {
      try {
        await API.todo.deleteTodoItem(id)
      } catch (error) {
        const _error = error as AxiosError<string>
      }
    
    }
  }
})
