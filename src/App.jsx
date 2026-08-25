import './App.css'
import AddATodo from './Components/AddATodo'
import TodoList from './Components/TodoList'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
  { id: 1, title: "Buy some groceries!", note: "Eggs, Bread...",done: false },
  { id: 2, title: "Review React props", note: "Pass data from parent to child.",done: false },
  { id: 3, title: "Practice useState", note: "Update the UI when data changes." ,done: false}
])
const addTodo = (title, note) => {
 const newTodo = {
    id: Date.now(),
    title: title,
    note: note,
     done: false 
  }
  setTodos([...todos, newTodo])
}
const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id))
}
const markDone = (id) => {
    setTodos(
    todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: true }
      }

      return todo
    }))
}
const editTodo = (id, newTitle, newNote) => {
  setTodos(
    todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: newTitle,
          note: newNote
        }
      }

      return todo
    })
  )
}
  return (
    <><body>
    <div className="left"><h1>Todo Board</h1></div>
    <AddATodo addTodo={addTodo}/>
    <TodoList todos={todos} deleteTodo={deleteTodo} markDone={markDone} editTodo={editTodo}/>
    </body></>
  )
}


export default App
