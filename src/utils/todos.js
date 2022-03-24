import { nanoid } from 'nanoid'

const todos = []

const baseTodo = {
  id: nanoid(),
  text: 'test todo item',
  completed: false,
}

todos.push(baseTodo)

export const getTodos = () => {
  return todos
}

export const addTodo = (todo) => {
  todos.push(todo)
}
