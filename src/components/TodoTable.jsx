import TodoRowItem from './TodoRowItem';

export default function TodoTable({ todos, handleDeleteTodoClick }) {
  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Description</th>
          <th scope='col'>Assigned</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todoItem) => (
          <TodoRowItem
            key={todoItem.rowNumber}
            rowNumber={todoItem.rowNumber}
            rowDescription={todoItem.rowDescription}
            rowAssigned={todoItem.rowAssigned}
            handleDeleteTodoClick={handleDeleteTodoClick}
          />
        ))}
      </tbody>
    </table>
  );
}
