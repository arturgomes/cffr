import React from 'react';
import { format, parseISO } from "date-fns";
import { DataGrid } from '@material-ui/data-grid';
import contente from "../../../assets/img/contente@4x.png";
import descontente from "../../../assets/img/descontente@4x.png";
import imparcial from "../../../assets/img/imparcial@4x.png";
// import pt from 'date-fns/locale/pt';
import './styles.css';

const formatDate = (date) => {
  const newYears = new Date(date);
  return format(newYears, 'dd/MM/yyyy');
}

const columns = [
  { field: "_id", hide: true },
  { field: 'nps_value', headerName: 'NPS', width: 70 },
  {
    field: 'date', headerName: 'Data', width: 140,
    // valueGetter: (params) =>
    //   `${formatDate(params.getValue('date'))}`,
  },
  {
    field: 'comment_optional', headerName: 'Comentário', width: 776,

  },
  { field: 'shop_name', headerName: 'Loja', width: 140 },

];

export default function FeedbackTable({ data }) {
  // const rows = data[0] && Object.keys(data[0]);


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        id="id"
        loading={true}
        rowHeight={75}
        rows={data}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={10, 25, 50}
        checkboxSelection={false} // TODO: selecting..
      // checkboxSelection
      />
    </div>
  );
}


