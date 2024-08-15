export type TodoList = {
  id: number
  title: string
  deleted: boolean
  created_at: Date
  category: TodoCategory
  item_count: Array<{ count: number }>
  items?: Array<TodoItem>
}

export type TodoCategory = {
  id: number
  created_at: Date
  title: string
  deleted: boolean
}

export type TodoItem = {
  id: number
  title: string
  completed: boolean
}
