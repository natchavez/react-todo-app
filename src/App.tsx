import { useState } from 'react';
import './App.css';
import { NewTodoForm } from './components/NewTodoForm';
import { TodoTable } from './components/TodoTable';

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
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

  const handleShowTodoForm = () => {
    setShowAddTodoForm((isShowing) => !isShowing);
  };

  const handleAddTodoClick = (assigned: string, description: string) => {
    let rowNumber = 0;
    const currentTodos = [...todos];
    if (currentTodos.length > 0) {
      rowNumber = currentTodos[currentTodos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const handleDeleteTodo = (rowNumberToDelete: number) => {
    const currentTodos = [...todos];
    let filtered = currentTodos.filter(function (value) {
      return value.rowNumber !== rowNumberToDelete;
    });
    setTodos(filtered);
  };

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's</div>
        <div className='card-body'>
          <TodoTable todos={todos} handleDeleteTodoClick={handleDeleteTodo} />
          <button className='btn btn-primary' onClick={handleShowTodoForm}>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm && (
            <NewTodoForm handleAddTodoClick={handleAddTodoClick} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
