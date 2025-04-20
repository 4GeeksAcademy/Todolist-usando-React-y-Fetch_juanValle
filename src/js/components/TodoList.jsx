//funcionará como mi componente contenedor, padre.
import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  


//POST METHOD
  const addTask = async(newTaskText) => {
    //setTasks([...tasks, {id: taskIdCounter.current++, text: newTaskText }]);
    try {
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json', 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                "label": newTaskText,
                "is_done": false
              })
        }
        const response = await fetch('https://playground.4geeks.com/todo/todos/Juanpa', options)
        const data= await response.json()
        setTasks([...tasks, data ]);


    } catch (error) {
        console.log(error)
    }

  };

//DELETE METHOD

  const deleteTask = async (taskIdToDelete) => {
  setTasks(tasks.filter(task => task.id !== taskIdToDelete));

    try {
      const options ={
        method: 'DELETE',
        headers:{
           accept: 'application/json',
          
        },
      }

      const response = await fetch ('https://playground.4geeks.com/todo/todos/Juanpa/taskIdToDelete', options)
      const data= await response.json()
      //setTasks([...tasks, data ]);

      getListTasks()
      
    } catch (error) {
      console.log(error)
      
    }
  };


  // GET METHOD
  const getListTasks =async()=>{
    try { 
        const response = await fetch ('https://playground.4geeks.com/todo/users/Juanpa')

        const data= await response.json()
        //console.log (data)
        setTasks(data.todos)
            
    } catch (error) {
        console.log(error);
        
    }
  }

    useEffect(()=>{
        getListTasks()
    }, [])

  


  return (
    <div>
      <TodoInput onAddTask={addTask} />
      {tasks.length === 0 ? (
        <p>No hay tareas, añadir tareas</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} onDelete={deleteTask} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;