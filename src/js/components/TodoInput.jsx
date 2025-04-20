//componente para agregar tareas

import React, { useState } from 'react';

function TodoInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      onAddTask(inputValue);
      setInputValue('');
    }
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      onAddTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Añadir tarea"
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default TodoInput;