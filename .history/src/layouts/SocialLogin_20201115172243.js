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
      await api.post("/auth/success", { fid })
        .then(response => {
          // console.log(response);
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
      await api.post("/auth/success")
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