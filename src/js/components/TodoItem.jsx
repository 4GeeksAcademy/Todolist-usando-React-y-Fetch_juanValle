//componente para mostrar las tareas existentes
import React from 'react';
import '../../styles/index.css'; 

function TodoItem({ task, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  return (
    <li className="todo-item">
      <span>{task.label}</span>
      <span className="delete-icon" onClick={handleDeleteClick}>X</span>
    </li>
  );
}

export default TodoItem;