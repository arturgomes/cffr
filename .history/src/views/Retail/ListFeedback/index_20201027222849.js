import React, {useState,useEffect} from 'react';



import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
// import CustomInput from "../components/CustomInput/CustomInput.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CardBody from "../../../components/Card/CardBody.js";


import api from "../../../services/api";
import FeedbackTable from './FeedbackTable'
import {
  getId,
} from "../../../services/auth";


export default function ListFeedback() {
  const [detrator,setDetrator] = useState(false)
  const [neutro,setNeutro] = useState(false)
  const [promotor,setPromotor] = useState(false)
  const [fb,setFb] = useState([])

  useEffect(()=>{
    const myfetch = async () =>{
      await api
      .post("/list", { retail_id: getId() })
      .then(response => {
        console.log(response.data);
        setFb(response.data);
        // this.setState({ fb: response.data, isLoading: false });
        // console.log(response.data);
      })
      .catch(error => {
        // Error 😨
        if (error.response) {
          
          // this.setState({ err: error.response.data });
        } else if (error.request) {
         
        }
      });
    }
    myfetch();
  },[])

  function checkDetrator(){
    setDetrator(!detrator)
  }
  function checkNeutro(){
    setNeutro(!detrator)
  }
  function checkPromotor(){
    setPromotor(!detrator)
  }

  return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <CardHeader color="success">
                <h4 style={{
                  color: "rgba(255,255,255,1)",
                  margin: "0",
                  fontSize: "18px",
                  marginTop: "0",
                  marginBottom: "10px"
                }}>Listar QR Codes</h4>
                <p style={{
                  color: "rgba(255,255,255,.62)",
                  margin: "0",
                  fontSize: "14px",
                  marginTop: "0",
                  marginBottom: "0"
                }}>Listando todos os feedbacks de {getName()}</p>

                {/* <p className={useStyles.cardCategoryWhite}>Complete seu perfil</p> */}
              </CardHeader>
              <CardBody>
                
              <div className="query">
        <input type="checkbox" value={detrator} onChange={()=>checkDetrator()}/>
        <input type="checkbox" value={neutro} onChange={()=>checkNeutro()}/>
        <input type="checkbox" value={promotor} onChange={()=>checkPromotor()}/>
      </div>
      <div className="table">
        <FeedbackTable data={fb}/>
      </div>

          </CardBody>
              {/* <CardFooter>
              </CardFooter> */}
            </Card>
        </GridItem>
      </GridContainer>
    
  )
}
