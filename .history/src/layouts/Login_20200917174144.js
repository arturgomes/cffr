import React, { Component } from "react";
// creates a beautiful scrollbar
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from 'semantic-ui-react'


import Button from "../components/CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Link from "@material-ui/core/Link";
import BasicLayout from "../components/CouponFeed/BasicLayout";
import LoginFacebook from '../components/Facebook'
import api from "../services/api";



import { login, getUser } from "../services/auth";

const useStyles = makeStyles(theme => ({
  divider: {

    color: "#444",
    marginTop: '0px',
    // marginTop: '20px',
    marginBottom: '20px',
    borderRadious: '50%',
    backgroundColor: "#bbb",
    border: "1px #444 solid"
  },
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 300,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

export default class Login extends Component {

  state = {
    user: {},
    error: null,
    authenticated: false,
    isLoading: true
  };


  handleSignIn = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
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

    return (

      <BasicLayout title="Fazer Login">
        {/* <Avatar className={useStyles.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        {/* <Typography component="h1" variant="h5">
          Fazer Login
        </Typography> */}
        {/* <div style={{ marginTop: '20px', marginBottom: '20px' }}> */}
        {/* </div> */}
        <LoginFacebook />

        {/* <Divider horizontal className={useStyles.divider}> */}
        {/* ou */}
        {/* </Divider> */}

        <form
          style={{marginLeft:"50px", marginRight:"50px"}}
          // className={useStyles.form}
          noValidate
          onSubmit={this.handleSignIn}
        >
          <hr style={{ width:"100%",borderTop: "3px rounded #bbb"}} />

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
          {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
          // className={useStyles.submit}
          >
            Faça login
            </Button>
          <Grid container>
            {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid> */}
            <Grid item>
              <Link
                href="/signup" variant="body2">
                {"Ainda não se cadastrou? Faça já o seu!"}
              </Link>
            </Grid>
          </Grid>
        </form>





      </BasicLayout>
    );
  }
}
