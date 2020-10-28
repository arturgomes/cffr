import React, { useState, useEffect } from 'react'
// import { makeStyles } from "@material-ui/core/styles";
// import { TextField, } from "@material-ui/core";
import {format,parseISO} from "date-fns";
import pt from 'date-fns/locale/pt';
import { AiOutlineDelete } from "react-icons/ai";
import api from "../../../services/api";

import Card from "../../../components/Card/Card.js";
import Table from "../../../components/Table/Table.js";
import CardBody from "../../../components/Card/CardBody.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";

import {getId} from "../../../services/auth";


// import { Container } from './styles';



export default function ListCoupon(props) {
  const [deleteCoupons, setDeleteCoupons] = useState(false);
  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const s = await api.post(`/coupons/l/${getId()}`)
      // const q = await api.post("/qr", { retail_id: getId() })
      s.status === 200 && setCoupons(s.data);
      // q.status === 200 && setQrlist(s.data);
      setDeleteCoupons(false);
    }
    fetchData();
  }, [deleteCoupons]//[categoria, passeios]
  )
  const handleCouponDelete = async s =>{
    // console.log(s)
    await api
      .post(`/coupons/d`, { coupon_id: s })
      .then((response) => {
        console.log(response);
     setDeleteCoupons(true);

        
      })
      .catch((error) => {
        // console.log(error);
        // this.setState({ error: error });
      });


  }
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          {/* <CardHeader color="primary"> */}
          <h4 style={{
            // color: "rgba(255,255,255,1)",
            margin: "0",
            fontSize: "18px",
            marginTop: "0",
            marginBottom: "10px"
          }} >Listar os Cupons</h4>
          <p style={{
            // color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
          }}>
            Aqui estão os cupons da {props.name}
            </p>
          {/* </CardHeader> */}
          <CardBody>
            {coupons.length===0 ? (<Table
              tableHeaderColor="primary"
              tableHead={["Nome", "Descrição", "Desconto", "Validade","Feedcoins","Usa fidelidade?","Remover"]}
              tableData={
                coupons.map(item => [`${item.name}`, `${item.description}`, `${item.discount}`, `${format(parseISO(item.expire_date), "dd ' de ' MMMM  ' de '  y", { locale: pt })}`, `${item.feedcoins}`, `${item.loyalty? "Sim":"Não"}`,
              <Button onClick={() => handleCouponDelete(item.id)}><AiOutlineDelete/></Button>,
            ])
            }
            />) : <span>Nenhum cupom cadastrado.</span>}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}