import React, {useState,useEffect} from 'react';

import api from "../../../services/api";

import {
  isAuthenticated,
  getId,
  getName
} from "../../../services/auth";


export default function ListFeedback() {
  const [detrator,setDetrator] = useState(false)
  const [neutro,setNeutro] = useState(false)
  const [promotor,setPromotor] = useState(false)

  useEffect(()=>{
    const myfetch = async () =>{
      await api
      .post("/list", { retail_id: getId() })
      .then(response => {
        console.log(response.data);
        this.setState({ fb: response.data, isLoading: false });
        // console.log(response.data);
      })
      .catch(error => {
        // Error 😨
        if (error.response) {
          
          this.setState({ err: error.response.data });
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
    <div>
      <div className="query">
        <input type="checkbox" value={detrator} onChange={()=>checkDetrator()}/>
        <input type="checkbox" value={neutro} onChange={()=>checkNeutro()}/>
        <input type="checkbox" value={promotor} onChange={()=>checkPromotor()}/>
      </div>
      <div className="table">

      </div>
    </div>
  )
}
