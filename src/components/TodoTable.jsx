import TodoRowItem from './TodoRowItem';

export default function TodoTable({ todos }) {
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
        {todos.map((todoItem, index) => (
          <TodoRowItem
            rowNumber={todoItem.rowNumber}
            rowDescription={todoItem.rowDescription}
            rowAssigned={todoItem.rowAssigned}
          />
        ))}
      </tbody>
    </table>
  );
}
