import React from 'react';

export default function FeedbackTable({data}) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table>
      <thead></thead>
      <tbody></tbody>
      </table>
  );
}
