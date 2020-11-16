import React, { Component } from 'react';

import { Redirect } from "react-router-dom";
import api from '../services/api'
// @material-ui/core components
import LinearProgress from '@material-ui/core/LinearProgress';

import {
  getFeedbackTmp,
  // login, 
  getUser, isAuthenticated
} from "../services/auth";

// import api from "../services/api";

class Validate extends Component {
  state = {
    success: false,
  }

  async componentDidMount() {
    if (isAuthenticated()) {
      getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");
    }
    else {
      const fid = getFeedbackTmp();
      // await api.get('/auth/success')
      await api.post("/auth/success", { fid })
        // .then(response => {
        //   if (response.status === 200) return response.json();
        //   throw new Error("failed to authenticate user");
        // })
        .then(responseJson => {
          console.log("passou na autenticação")
          const { success, login, token } = responseJson.data;
          this.setState({
            authenticated: success,
            isLoading: success,
          });
          console.log("set state ok")

          const { name, id, tu } = login;
          if (getFeedbackTmp() !== null) {
            api.post('/users/add/feedback', { user_id: id, tmp_feedback: getFeedbackTmp() })
          }
          console.log("nao entrou no feedback temp")

          localStorage.setItem("tk", token);
          localStorage.setItem("usr", name);
          localStorage.setItem("ui", id);
          localStorage.setItem("tu", tu);
          getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");

        })
        .catch(error => {
          this.setState({
            error: "Failed to authenticate user"
          });
        });
    }
  }

  render() {
    if (!this.state.authenticated) {
      return <LinearProgress />
    }
    else {
      const next = getUser() === 'customer' ? "/customer" : "/retail";
      return <Redirect to={next} />;
    }

  }
}

export default Validate;