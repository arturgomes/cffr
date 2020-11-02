import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import moment from 'moment';

import './styles.css';

moment.locale('pt-br');

const columns = [
  // { field: "id", hide: true },
  // { field: 'date', headerName: 'Data', width: 130 },
  // { field: 'nps_value', headerName: 'NPS', width: 80 },
  // { field: 'comment_optional', headerName: 'Comentário', width: 670 },
  // { field: 'shop_name', headerName: 'Loja', width: 140 },
  { field: "id", hide: true },
  { field: 'date', headerName: 'Data', width: 130 },
  { field: 'nps_value', headerName: 'NPS', width: 80 },
  { field: 'comment_optional', headerName: 'Comentário' },
  { field: 'shop_name', headerName: 'Loja', width: 140 },

];

export default function FeedbackTable({ data }) {
  // const rows = data[0] && Object.keys(data[0]);
  const newArr = data.map(d => {
    const newDate = {
      id: d.id,
      nps_value: d.nps_value,
      date: moment(d.date).format('DD/MM/YY HH:mm'),
      comment_optional: d.comment_optional,
      shop_name: d.shop_name
    }
    return newDate;
  })
  return (
    <div style={{ height: '450px', width: '100%' }}>
      <DataGrid
        id="id"
        rowHeight={50}
        rows={newArr}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[10, 25, 50]}
        checkboxSelection={false} // TODO: selecting..
        onRowHover={(RowParams) => {
          console.log(RowParams);
        }}
      // checkboxSelection
      />
    </div>
  );
}


