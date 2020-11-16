import React, { useState, useEffect } from 'react';

import { Redirect } from "react-router-dom";
import api from '../services/api'
// @material-ui/core components
import LinearProgress from '@material-ui/core/LinearProgress';

import {
  getFeedbackTmp,
  getId,
  getUser, isAuthenticated
} from "../services/auth";

export default function SocialLogin() {
  const [succ, setSucc] = useState(false)
  useEffect(() => {
    console.log("entrou no useeffect")

    api.post("/auth/success")
      // .then(response => {
      //   if (response.status === 200) return response.json();
      //   throw new Error("failed to authenticate user");
      // })
      .then(responseJson => {
        console.log("passou na autenticação")
        const { success, login, token } = responseJson.data;
        console.log(responseJson.data)

        const { name, id, tu } = login;
        console.log(getFeedbackTmp())
        console.log("nao entrou no feedback temp")
        window.localStorage.setItem("tk", token);
        window.localStorage.setItem("usr", name);
        window.localStorage.setItem("ui", id);
        window.localStorage.setItem("tu", tu);
        // login(token, name, id, tu);
        setSucc(success);
        console.log(localStorage.getId())
        console.log(localStorage.getId())
        console.log("set state ok")
      })
      .catch(error => {
      });
  }, [])
  useEffect(() => {
    if (getFeedbackTmp() !== null) {
      api.post('/users/add/feedback', { user_id: getId(), tmp_feedback: getFeedbackTmp() })
        .then(response => {
          console.log(response);
        })
    }
  }, [success])
  if (isAuthenticated()) {
    getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");
  }
  if (!success) {
    return <LinearProgress />
  }
  else {
    const next = getUser() === 'customer' ? "/customer" : "/retail";
    return <Redirect to={next} />;
  }

}
