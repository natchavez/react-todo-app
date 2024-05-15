import React from 'react';

export const TodoRowItem: React.FC<{
  rowNumber: number;
  rowDescription: string;
  rowAssigned: string;
  handleDeleteTodoClick: Function;
}> = (props) => {
  return (
    <tr onClick={() => props.handleDeleteTodoClick(props.rowNumber)}>
      <th scope='row'>{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
    </tr>
  );
};
