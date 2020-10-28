import React from 'react';

export default function FeedbackTable({data}) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
        </thead>
      <tbody>
        {data.map(row => <tr>
          {
            columns.map(col => <td>{row[col]}</td>)
          }

        </tr>)}
      </tbody>
      </table>
  );
}
