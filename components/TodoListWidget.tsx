"use client"

import { useState } from "react"

export default function TodoListWidget() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete project proposal", done: false },
    { id: 2, text: "Buy groceries", done: true },
    { id: 3, text: "Schedule dentist appointment", done: false },
    { id: 4, text: "Prepare for team meeting", done: false },
  ])

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)))
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 h-full">
      <h2 className="text-xl font-semibold mb-4">To-Do List</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2 form-checkbox h-5 w-5 text-black border-gray-300 rounded"
            />
            <span className={`text-sm ${todo.done ? "line-through text-gray-400" : ""}`}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

