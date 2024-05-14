export default function TodoRowItem({
  rowNumber,
  rowDescription,
  rowAssigned,
  handleDeleteTodoClick,
}) {
  return (
    <tr onClick={() => handleDeleteTodoClick(rowNumber)}>
      <th scope='row'>{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>
    </tr>
  );
}
