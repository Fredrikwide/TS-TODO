import React, {useState} from 'react'


const Todo = ({data}) => {
  return (
    <div className="todo">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>{data.completed? "OK" : "X"}</p>
    </div>
  )
}

export default Todo
