import React, { Component } from 'react';

import { Redirect } from "react-router-dom";
import api from '../services/api'
// @material-ui/core components
import LinearProgress from '@material-ui/core/LinearProgress';

import {
  getFeedbackTmp, unsetFeedbackTmp,
  // login, 
  getUser, isAuthenticated
} from "../services/auth";

// import api from "../services/api";

class SocialLogin extends Component {

  async componentDidMount() {
    const fid = getFeedbackTmp();
    // await api.get('/auth/success')
    await api.post("/auth/success", { fid })
      .then(responseJson => {
        const { success, login, token } = responseJson.data;
        if (success) {
          const { name, id, tu } = login;
          if (getFeedbackTmp() !== null) {
            api.post('/users/add/feedback', { user_id: id, tmp_feedback: getFeedbackTmp() })
            unsetFeedbackTmp();
          }
          login(token, name, id, tu);
        }
        else {
          this.props.history.push("/login");
        }
      })
      .catch(error => {
        // this.setState({
        //   error: "Failed to authenticate user"
        // });
      });
  }

  render() {
    if (!isAuthenticated()) {
      return <LinearProgress />
    }
    else {
      const next = getUser() === 'customer' ? "/customer" : "/retail";
      return <Redirect to={next} />;
    }

  }
}

export default SocialLogin;