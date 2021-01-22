import React, {useState, useEffect} from 'react'


const Todo = (props:any) => {
  
  
  useEffect(() => {
    console.log('this is props', props)
  }, [])

  return (
    <div className="todo">
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
            <p>{props.data.completed? "OK" : "X"}</p>
    </div>
  )
}

export default Todo
