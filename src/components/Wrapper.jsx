import React, { useEffect, useState } from 'react';
import Form from './Form';
import { v4 as uuidv4 } from "uuid";
import Task from './Task';
import EditTodo from './EditTodo';

  const Wrapper = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
      setTasks([
        ...tasks,
        { id: uuidv4(), task: task, completed: false, isEditing: false },
      ]);
    }

    useEffect(() => {
      localStorage.setItem('lists',JSON.stringify(tasks))
    },[tasks]);

    const toggleComplete = (id) => {
      setTasks(
        tasks.map((task) => 
        task.id === id ? { ...task, completed: !task.completed } : task));
    }

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    }

    const editTask = (id) => {
      setTasks(tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task));
    }
  
    const editTodo = (todo, id) => {
      setTasks(tasks.map((task) =>
      task.id === id ? {...task, task:todo, isEditing: !task.isEditing} : task));
    }

    return (
      <div className="wrapper">
        <h1>To-Do List</h1>
        <Form addTask={addTask}/>
        {tasks.map((task) => (
          task.isEditing ? (
            <EditTodo editTask={editTodo} todo={task} />
            ) : (
            <Task
              key={task.id}
              task={task} 
              deleteTask={deleteTask}
              editTask={editTask}
              toggleComplete={toggleComplete}/>
              )
        ))}
      </div>
    )
  }

export default Wrapper;