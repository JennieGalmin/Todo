import React,{ useEffect, useState }  from 'react'
import './index.css';


const TodoWrapper = ({addTodo}) => {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] =useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) :[];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const handleSubmit = event => {
    event.preventDefault();
  setTodo('')
  };

  const handleChange = event => {
    setTodo(event.target.value)
  };

  function addTodo(){
    if(todo.trim() !== ""){
      setTodos(todos => [...todos, todo ])
    setTodo('')
    }
    
  };

  function Deletetodo(index){
    const UppdateradLista = todos.filter((_, i) => i !==index)
    setTodos(UppdateradLista)
  };

  return (
    <div className='wrapper'>
      <h1>Att göra lista</h1>
    <form className="form" onSubmit={handleSubmit}>
      <input 
      className='input'
      type="text" 
      placeholder='Skriv in din todo' 
      value={todo} 
      onChange={handleChange}
      />
      <button type="submit" onClick={addTodo}>Uppdatera listan</button>
      
    </form>
    <ol>
      {todos.map((todo, index) =>  
      <li className='list'key={index}>
        <span>{todo}</span>
        <button onClick={() => Deletetodo(index)}>Ta bort</button>
      </li>
        )}
    </ol>
    </div>
  )
}

export default TodoWrapper
