import React, { useState } from 'react'

const EditTodo = ({editTask, todo}) => {

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value, todo.id);
  }

  return (
      <form onSubmit={handleSubmit} className="form">
        <input 
            type="text"
            value={value}
            placeholder="Update task"
            className="task-input"
            onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn" type="submit">Update Task</button>
        </form>
  )
}

export default EditTodo;