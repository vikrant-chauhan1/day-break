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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">To-Do List</h2>
      <button 
        onClick={handleAllClear} 
        className="bg-gray-300 text-black px-4 py-2 rounded-lg transition duration-200 hover:bg-red-500 hover:text-white"
      >
       Clear All
      </button>
      </div>
      
      
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mt-3 mb-3">
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
            <button type="submit" className="bg-gray-300 text-black px-1 py-1 ml-2 rounded-lg transition duration-200 hover:bg-blue-600 hover:text-white">Add Task</button>
            
          </form>
        
        }
      </ul>
      <button onClick={handleAddModalState} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-blue-600">
        Add Task
      </button>
      
    </div>
  )
}

