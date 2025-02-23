"use client"

import { useEffect, useState } from "react"

export default function TodoListWidget() {
  const [openAddModal,setOpenAddModal] = useState(false);
  const [newTask,setNewTask]= useState("");
  const [todos, setTodos] = useState<{id:number,text:string; done:boolean}[]>([]);

  useEffect(()=>{
    const storedTodos = localStorage.getItem("todos");
    if(storedTodos){
      setTodos(JSON.parse(storedTodos));
    }
  },[]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleAddModalState= async()=>{
    setOpenAddModal(true);
  }
  const handleSubmit = async(e: React.FormEvent)=>{
    e.preventDefault();
    if (newTask.trim() === "") return; 

    const taskToAdd = newTask; // to ensure if the state change takes time then react does not pass an empty state in the function 
    
    setTodos((prev)=>[
      ...prev,
      {id:prev.length+1, text:taskToAdd, done:false}
    ])
    setOpenAddModal(false);
    setNewTask("");
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)))
  }

  const handleAllClear = async()=>{
    setTodos([]);
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 h-full">
      <h2 className="text-xl font-semibold mb-4">To-Do List</h2>
      <button onClick={handleAddModalState}>add task</button>
      
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
        {openAddModal &&
          <form onSubmit={handleSubmit}>
            <input type="text" value={newTask} onChange={(e)=>{setNewTask(e.target.value)}} placeholder="Enter a new task" required/>
            <button type="submit">Add task</button>
            
          </form>
        
        }
      </ul>
      <button onClick={handleAllClear}>clear all</button>
    </div>
  )
}

