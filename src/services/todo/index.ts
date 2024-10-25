import http from '../api'

const getTodoLists = async () => {
  return await http.get('todo')
}

const getTodoList = async (id: string) => {
  return await http.get(`todo/${id}`)
}

const updateTodoItem = async (id: string, value: { completed: boolean }) => {
  return await http.patch(`todo/item/${id}`, value)
}

const deleteTodoItem = async (id: string) => {
  return await http.delete(`todo/item/${id}`)
}

export default {
  getTodoLists,
  getTodoList,
  updateTodoItem,
  deleteTodoItem
}
