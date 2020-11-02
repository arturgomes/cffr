import React from 'react';
import { DataGrid } from '@material-ui/data-grid';


import moment from 'moment'

moment.locale('pt-br');

import contente from "../../../assets/img/contente@4x.png";
import descontente from "../../../assets/img/descontente@4x.png";
import imparcial from "../../../assets/img/imparcial@4x.png";
import './styles.css';


const columns = [
  { field: "_id", hide: true },
  { field: 'nps_value', headerName: 'NPS', width: 140 },
  { field: 'date', headerName: 'Data', width: 140 },
  { field: 'comment_optional', headerName: 'Comentário', width: 600 },
  { field: 'shop_name', headerName: 'Loja', width: 140 },

];

export default function FeedbackTable({ data }) {
  // const rows = data[0] && Object.keys(data[0]);
  // const newArr = data.map(f => {
  //   const newDate = {
  //     _id: f._id,
  //     nps_value: f.nps_value,
  //     date: format(data.date, 'dd/MM/yyyy'),
  //     comment_optional: f.comment_optional,
  //     shop_name: f.shop_name
  //   }
  //   return newDate;
  // })
  const newDates = data.map(d => moment(d.date).format('DD/MM/YYYY HH:mm:ss'))

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        id="id"
        // loading={true}
        rowHeight={75}
        rows={data}
        columns={columns}
        pageSize={50}
        // onCellHover={() => handleCellHover()}
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


