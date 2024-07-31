import http from '../api'

const getTodoLists = async () => {
  return await http.get('todo')
}

const getTodoList = async (id: string) => {
  return await http.get(`todo/${id}`)
}

export default {
  getTodoLists,
  getTodoList
}
