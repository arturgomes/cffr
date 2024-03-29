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
    shop_id: ''
  }

  async componentDidMount() {
    if (isAuthenticated()) {
      getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");
    }
    else if (getFeedbackTmp() !== null) {
      const fid = getFeedbackTmp();
      // await api.get('/auth/success')
      await api
        .post("/auth/success", { fid })
        // .then(response => {
        //   // console.log(response.data);
        //   if (response.data.login !== null) {
        //     const { name, id, tu } = response.data.login;
        //     login(response.data.token, name, id, tu);
        //     getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");
        //   } else {
        //     this.setState({ err: "Usuario ou senha inválidos" });
        //   }

        // })
        // .catch(error => {
        //   // Error 😨
        //   if (error.response) {
        //     /*
        //      * The request was made and the server responded with a
        //      * status code that falls out of the range of 2xx
        //      */
        //     // console.log(error.response.data);
        //     this.setState({ err: error.response.data });
        //   } else if (error.request) {
        //     /*
        //      * The request was made but no response was received, `error.request`
        //      * is an instance of XMLHttpRequest in the browser and an instance
        //      * of http.ClientRequest in Node.js
        //      */
        //     // console.log(error.request);
        //   } else {
        //     // Something happened in setting up the request and triggered an Error
        //   }
        // });
        // fetch(`https://api.couponfeed.com.br/auth/success/${getFeedbackTmp()}`,
        //   {
        //     method: "POST",
        //     credentials: "include",
        //     // mode: 'no-cors',
        //     headers: {
        //       "Accept": "application/json",
        //       "Content-Type": "application/json",
        //       "Access-Control-Allow-Credentials": true,
        //       "Access-Control-Allow-Origin": "https://www.couponfeed.com.br"
        //     }
        //   }
        // )
        .then(response => {
          console.log(response);
          if (response.status === 200) return response.json();
          throw new Error("failed to authenticate user");
        })
        .then(responseJson => {
          const { success, login, token } = responseJson;
          this.setState({
            authenticated: success,
            isLoading: success,
          });
          const { name, id, tu } = login;
          api.post('/users/add/feedback', { user_id: id, tmp_feedback: getFeedbackTmp() })
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
    else {
      // await api.get('/auth/success')
      fetch("https://api.couponfeed.com.br/auth/success",
        {
          method: "GET",
          credentials: "include",
          // mode: 'no-cors',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "https://www.couponfeed.com.br"
          }
        }
      )
        .then(response => {
          console.log(response);
          if (response.status === 200) return response.json();
          throw new Error("failed to authenticate user");
        })
        .then(responseJson => {
          const { success, login, token } = responseJson;
          this.setState({
            authenticated: success,
            isLoading: success,
          });
          const { name, id, tu } = login;
          api.post('/users/add/feedback', { user_id: id, tmp_feedback: getFeedbackTmp() })
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