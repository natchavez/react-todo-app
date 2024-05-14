import { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {
  const intialTodos = [
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One' },
    {
      rowNumber: 4,
      rowDescription: 'Charge phone battery',
      rowAssigned: 'User One',
    },
  ];

  const [todos, setTodos] = useState(intialTodos);

  const handleAddTodoClick = () => {
    const currentTodos = [...todos];

    if (currentTodos.length > 0) {
      const newTodo = {
        rowNumber: currentTodos.length + 1,
        rowDescription: 'New Todo',
        rowAssigned: 'User Three',
      };
      setTodos((todos) => [...todos, newTodo]);
    }
  };

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's</div>
        <div className='card-body'>
          <TodoTable todos={todos} />
          <button className='btn btn-primary' onClick={handleAddTodoClick}>
            Add new todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
