import React, { useState, useEffect } from 'react';

import { Redirect } from "react-router-dom";
import api from '../services/api'
// @material-ui/core components
import LinearProgress from '@material-ui/core/LinearProgress';

import {
  getFeedbackTmp,
  // login, 
  getUser, isAuthenticated
} from "../services/auth";

export default function SocialLogin() {
  const [success, setsuccess] = useState(false)
  useEffect(() => {
    console.log("entrou no useeffect")
    if (isAuthenticated()) {
      getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");
    }
    else {
      api.post("/auth/success")
        // .then(response => {
        //   if (response.status === 200) return response.json();
        //   throw new Error("failed to authenticate user");
        // })
        .then(responseJson => {
          console.log("passou na autenticação")
          const { success, login, token } = responseJson;
          console.log("set state ok")
          setsuccess(success);
          const { name, id, tu } = login;
          console.log(getFeedbackTmp())

          console.log("nao entrou no feedback temp")

          localStorage.setItem("tk", token);
          localStorage.setItem("usr", name);
          localStorage.setItem("ui", id);
          localStorage.setItem("tu", tu);
          // getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");

        })
        .catch(error => {
          // this.setState({
          //   error: "Failed to authenticate user"
          // });
        });
    }
  }, [])

  if (!success) {
    return <LinearProgress />
  }
  else {
    const next = getUser() === 'customer' ? "/customer" : "/retail";
    return <Redirect to={next} />;
  }

}
