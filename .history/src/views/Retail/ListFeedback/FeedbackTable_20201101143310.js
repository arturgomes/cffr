import React from 'react';
import { format, parseISO } from "date-fns";
import { DataGrid } from '@material-ui/data-grid';

// import pt from 'date-fns/locale/pt';
import './styles.css';
const columns = [
  { field: "_id", hide: true },
  { field: 'date', headerName: 'Data', width: 140 },
  { field: 'nps_value', headerName: 'NPS', width: 70 },
  { field: 'comment_optional', headerName: 'Comentário', width: 776 },
  { field: 'shop_name', headerName: 'Loja', width: 140 },

];

export default function FeedbackTable({ data }) {
  // const rows = data[0] && Object.keys(data[0]);
  const formatDate = (date) => {
    const newYears = new Date(date);
    return format(parseISO(newYears), 'DD/MM/YYYY');
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        id="id"
        loading={true}
        rows={data}
        columns={columns}
        pageSize={10}
      // checkboxSelection
      />
    </div>
  );
}


