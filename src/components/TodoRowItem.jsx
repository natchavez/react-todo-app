export default function TodoRowItem({
  rowNumber,
  rowDescription,
  rowAssigned,
}) {
  return (
    <tr>
      <th scope='row'>{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>
    </tr>
  );
}
