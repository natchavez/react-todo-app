import React from 'react';
import { TodoRowItem } from './TodoRowItem';

export const TodoTable: React.FC<{
  todos: TodoModel[];
  handleDeleteTodoClick: Function;
}> = (props) => {
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
        {props.todos.map((todoItem) => (
          <TodoRowItem
            key={todoItem.rowNumber}
            rowNumber={todoItem.rowNumber}
            rowDescription={todoItem.rowDescription}
            rowAssigned={todoItem.rowAssigned}
            handleDeleteTodoClick={props.handleDeleteTodoClick}
          />
        ))}
      </tbody>
    </table>
  );
};
