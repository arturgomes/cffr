import React from 'react';
import {format,parseISO} from "date-fns";
import pt from 'date-fns/locale/pt';

export default function FeedbackTable({data}) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
        {/* <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr> */}
        <tr>
          <th>Data</th>
          <th>NPS</th>
          <th>Comentário</th>
          <th>Loja</th>
        </tr>
        </thead>
      <tbody>
        {data.map(row => 
        <tr>
          <td>{format(parseISO(row.date), "dd ' de ' MMMM  ' de '  y", { locale: pt })}</td>
          <td>row.nps</td>
          <td>row.comment_optional</td>
          <td>row.shop_name</td>
        </tr>
        // <tr>
        //   {
        //     columns.map(col => <td>{row[col]}</td>)
        //   }
 
        // </tr>
        )}
      </tbody>
      </table>
  );
}
