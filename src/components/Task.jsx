import React from 'react'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Task = ({task, toggleComplete, deleteTask, editTask}) => {
  return (
    <div className="tasks">
      <p className={`${task.completed? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div className="btns">
        <FontAwesomeIcon icon={faPenToSquare} onClick={ () => editTask(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)}/>
      </div>
    </div>
  )
}

export default Task;