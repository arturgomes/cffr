import React from 'react';

export default function FeedbackTable({data}) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table>
      <thead>
        <tr>(data[0] && columns.map((heading) => <th>{heading}</th>))</tr>
        </thead>
      <tbody></tbody>
      </table>
  );
}
