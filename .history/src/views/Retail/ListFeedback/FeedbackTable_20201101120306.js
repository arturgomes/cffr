import React from 'react';
import { format, parseISO } from "date-fns";
import { DataGrid } from '@material-ui/data-grid';

// import pt from 'date-fns/locale/pt';
import './styles.css';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Loja', width: 130 },
  { field: 'phone', headerName: 'Telefone', width: 130 },
  { field: 'manager', headerName: 'Gerente', width: 130 },

];

export default function FeedbackTable({ data }) {
  const rows = data[0] && Object.keys(data[0]);
  const formatDate = (date) => {
    const newYears = new Date(date);
    return format(parseISO(newYears), 'DD/MM/YYYY');
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        id="id"
        rows={data}
        columns={columns}
        pageSize={10}
      // checkboxSelection
      />
    </div>
  );
}


const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
