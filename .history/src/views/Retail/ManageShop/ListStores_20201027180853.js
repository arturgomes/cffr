import React, { useState, useEffect } from 'react'

// @material-ui/core components
// core components

import { AiOutlinePrinter, AiOutlineDelete } from "react-icons/ai";
// import { RiEBike2Line } from "react-icons/ri";
// import { FaEdit } from "react-icons/fa";
import api from "../../../services/api";

import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import Table from "../../../components/Table/Table.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import Button from "../../../components/CustomButtons/Button.js";
import {getId, getName } from "../../../services/auth";

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

export default function ListStores() {

  const [deleteShop, setDeleteShop] = useState(false);
  const [shops, setShops] = useState([]);
  // const [qrlist, setQrlist] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const s = await api.post(`/allshops`,{retail_id:getId()})
      // const q = await api.post("/qr", { retail_id: getId() })
      s.status === 200 && setShops(s.data);
      // q.status === 200 && setQrlist(s.data);
      setDeleteShop(false);
    }
    fetchData();
  }, [deleteShop]//[categoria, passeios]
  )

  const handleShopDelete = async s =>{
    // console.log(s)
    await api
      .post(`/shops/d`, { shop_id: s })
      .then((response) => {
        // console.log(response);
     setDeleteShop(true);

        
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
          }} >Lista de lojas</h4>
          <p style={{
            // color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
          }}>
            Aqui estão as lojas da {getName()}
            </p>
          {/* </CardHeader> */}
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Nome", "Gerente", "Telefone", "Imprimir QR", "Remover Loja"]}
              tableData={
                // [
                // ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                // ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                // ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                // ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                // ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                // ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                
              // ]
              
              shops.map(item => [`${item.name}`, `${item.manager}`, `${item.phone}`, 
                    <Button onClick={() => openInNewTab(`/print-qr/${item.id}`)}><AiOutlinePrinter/></Button>,
                    <Button onClick={() => handleShopDelete(item.id)}><AiOutlineDelete/></Button>,

                  ])
            }
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
