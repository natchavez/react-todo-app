import './App.css';
import TodoRowItem from './components/TodoRowItem';

function App() {
  const todos = [
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One' },
  ];

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's</div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todoItem, index) => (
                <TodoRowItem
                  rowNumber={todoItem.rowNumber}
                  rowDescription={todoItem.rowDescription}
                  rowAssigned={todoItem.rowAssigned}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
