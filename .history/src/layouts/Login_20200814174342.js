import React, { Component } from "react";
// creates a beautiful scrollbar
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "../assets/css/login.css";
// @material-ui/core components
// import LinearProgress from '@material-ui/core/LinearProgress';

import { makeStyles } from "@material-ui/core/styles";
// import Avatar from "@material-ui/core/Avatar";
// import { Divider } from 'semantic-ui-react'
// import { FaSpinner } from 'react-icons/fa';


import Button from "../components/CustomButtons/Button.js";

// import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import Grid from '@material-ui/core/Grid';
import BasicLayout from "../components/CouponFeed/BasicLayout";
// import LoginFacebook from '../components/Facebook'
import api from "../services/api";

import { login, getUser } from "../services/auth";


export default class Login extends Component {


  state = {
    user: {},
    error: null,
    authenticated: false,
    isLoading: true
  };

  // async componentDidMount() {
  //   if (isAuthenticated()) {
  //     getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");
  //   }
  //   else {
  //     // await api.get('/auth/success')
  //   fetch("https://api.couponfeed.co/auth/success", 
  //   {
  //     method: "GET",
  //     credentials: "include",
  //     // mode: 'no-cors',
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Credentials": true,
  //       "Access-Control-Allow-Origin": "https://www.couponfeed.co"
  //     }
  //   }
  //   )
  //     .then(response => {
  //       // console.log(response);
  //       if (response.status === 200) return response.json();
  //       throw new Error("failed to authenticate user");
  //     })
  //     .then(responseJson => {

  //         const { success,
  //           // user, 
  //           login, token } = responseJson;
  //         // console.log(responseJson);
  //         // console.log(responseJson)
  //         this.setState({
  //           authenticated: success,
  //           isLoading: success,
  //           // user
  //         });
  //         // console.log(this.state);
  //         // .catch(() => console.log("Can’t access response. Blocked by browser?"));
  //         // console.log(responseJson.token);
  //         const { name, id, tu } = login;
  //         localStorage.setItem("tk", token);
  //         localStorage.setItem("usr", name);
  //         localStorage.setItem("ui", id);
  //         localStorage.setItem("tu", tu);
  //         // login(token, name, id, tu);
  //         // console.log("logged in");

  //         // this.props.history.push("/customer");
  //         getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");

  //     })
  //     .catch(error => {
  //       this.setState({
  //         // authenticated: false,
  //         error: "Failed to authenticate user"
  //       });
  //     });
  //   }
  // }
  componentFacebookClicked =  () => {
    // await api.post(`/a/facebook`)
    window.open("https://api.couponfeed.co/auth/facebook", "_self");
    // window.open("http://localhost:3000/auth/facebook", "_self");
    // console.log("clicked")
  }
  componentGoogleClicked =  () => {
    // await api.post(`/a/facebook`)
    window.open("https://api.couponfeed.co/auth/google", "_self");
    // window.open("http://localhost:3000/auth/google", "_self");
    // console.log("clicked")
  }
  handleSignIn = async e => {
    e.preventDefault();
    // const fid = decodeURIComponent(this.props.match.params.fid);

    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
      // console.log(this.state.error);
    } else {
      await api
        .post("/sessions", { email, password })
        .then(response => {
          // console.log(response.data);
          if (response.data.login !== null) {
            const { name, id, tu } = response.data.login;
            login(response.data.token, name, id, tu);
            getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");
          } else {
            this.setState({ err: "Usuario ou senha inválidos" });
          }

        })
        .catch(error => {
          // Error 😨
          if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            // console.log(error.response.data);
            this.setState({ err: error.response.data });
          } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            // console.log(error.request);
          } else {
            // Something happened in setting up the request and triggered an Error
          }
        });

    }
  };


  render() {
    // const { authenticated } = this.state;
    // if (this.state.isLoading) {
    //   return <LinearProgress />
    // }
    // else
    return (

      <BasicLayout>

        <div class="container">
          <form noValidate
          onSubmit={this.handleSignIn}>
            <div class="row">
              <h2 style="text-align:center">Login com Mídias Sociais ou manualmente</h2>
              <div class="vl">
                <span class="vl-innertext">ou</span>
              </div>

              <div class="col">
                <button onClick={() => {this.componentFacebookClicked()}}  class="fb btn">
                  <i class="fa fa-facebook fa-fw"></i> Login com Facebook
                </button>

                <button onClick={() => {this.componentFacebookClicked()}}  class="google btn">
                  <i class="fa fa-google fa-fw"> </i> 
                  Login com Google </button>
              </div>

              <div class="col">
                <div class="hide-md-lg">
                  <p>Ou fazer login manualmente:</p>
                </div>

                <TextField
            // variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de e-mail"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => this.setState({ email: e.target.value })}
          />
          <TextField
            // variant="outlined"
            style={{ marginBottom: '30px' }}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => this.setState({ password: e.target.value })}
          />
                <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
          // className={useStyles.submit}
          >
            Faça login
            </Button>
              </div>
      
            </div>
          </form>
              </div>

              <div class="bottom-container">
                <div class="row">
                  <div class="col">
                    <a href="/signup" style="color:white" class="btn">Cadastre-se</a>
                  </div>
                  <div class="col">
                    {/* <a href="#" style="color:white" class="btn">Forgot password?</a> */}
                  </div>
                </div>
              </div>


      </BasicLayout>
    );
  }
}
