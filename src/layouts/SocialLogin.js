import React, { Component } from 'react';

import {Redirect } from "react-router-dom";

// @material-ui/core components
import CircularProgress from '@material-ui/core/CircularProgress';
import { login, getUser, isAuthenticated } from "../services/auth";

import api from "../services/api";

class Validate extends Component {
  state = {
    success: false,
    shop_id:''
  }
  
  async componentDidMount() {
    if (isAuthenticated()) {
      getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");
    }
    else {
      // await api.get('/auth/success')
    fetch("https://api.couponfeed.co/auth/success", 
    {
      method: "GET",
      credentials: "include",
      // mode: 'no-cors',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "https://www.couponfeed.co"
      }
    }
    )
      .then(response => {
        // console.log(response);
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
      
          const { success,
            // user, 
            login, token } = responseJson;
          // console.log(responseJson);
          // console.log(responseJson)
          this.setState({
            authenticated: success,
            isLoading: success,
            // user
          });
          // console.log(this.state);
          // .catch(() => console.log("Can’t access response. Blocked by browser?"));
          // console.log(responseJson.token);
          const { name, id, tu } = login;
          localStorage.setItem("tk", token);
          localStorage.setItem("usr", name);
          localStorage.setItem("ui", id);
          localStorage.setItem("tu", tu);
          // login(token, name, id, tu);
          // console.log("logged in");

          // this.props.history.push("/customer");
          getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");
        
      })
      .catch(error => {
        this.setState({
          // authenticated: false,
          error: "Failed to authenticate user"
        });
      });
    }
  }

    render() {
      if (!this.state.authenticated){
          return <CircularProgress />
      }
      else{
        const next = getUser() === 'customer' ? "/customer" : "/retail";
        return <Redirect to={next} />;
      }
      
    }
}

export default Validate;