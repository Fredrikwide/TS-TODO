import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form'
import './App.css';
import Todo from './components/Todo'


interface TODO {
  title: String,
  completed: Boolean,
  description: String,
  id: String
}


const App = () => {

  
  const [addTodo, setAddTodo] = useState<TODO>({
    title: "",
    completed: false,
    description: "",
    id: uuidv4(),
  })
  
  const [todos, setTodos] = useState<Array<TODO>>([]);
  
  
  const { register, handleSubmit } = useForm<TODO>(); const onSubmit = (data: TODO) => {
    console.log("data", data);
    setAddTodo({
        title: data.title,
        completed: false,
        description: data.description,
        id: data.id
    })
    setTodos(prevTodos => [...prevTodos, addTodo])
  };
    useEffect(() => {
      console.log('todos added', todos)
      console.log('todos lenght', todos.length)
    }, [todos])
  return (
    
    <div className="App">
      <section className="wrapper">
        <div className="todos-container">
          <h1>typescript Todos</h1>
          { 
            todos.length ? todos.map((item ,i:Number) => { 
                <>
                  <Todo 
                    data={item}
                    key={i}
                    />
                </>
             })
             : <p>no todos</p>
          }
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-container">
            <div className="field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                ref={register}
              />
            </div>
            <div className="field">
              <label htmlFor="description">Description</label>
              <textarea

                id="description"
                name="description"
                ref={register}
              />
            </div>
            <div className="button-container">
              <button className="submit" type="submit">Save</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
