import React, { useState } from 'react'

const Form = ({addTask}) => {

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value) 
    addTask(value);
    setValue('');
  }

  return (
      <form onSubmit={handleSubmit} className="form">
        <input 
            type="text"
            placeholder="✍Task for today..."
            className="task-input"
            onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn" type="submit" >Add Task</button>
        </form>
  )
}

export default Form;