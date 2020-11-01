import React from 'react';
import { format, parseISO } from "date-fns";
import { DataGrid } from '@material-ui/data-grid';

// import pt from 'date-fns/locale/pt';
import './styles.css';
const columns = [
  { field: 'date', headerName: 'Data', width: 70 },
  { field: 'nps_value', headerName: 'NPS', width: 130 },
  { field: 'comment_optional', headerName: 'Comentário', width: 130 },
  { field: 'shop_name', headerName: 'Loja', width: 130 },

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


