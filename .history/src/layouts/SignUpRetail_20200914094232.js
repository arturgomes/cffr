import React, { Component } from "react";
import cep from 'cep-promise';
import { formatToCEP, isCNPJ, formatToCNPJ, isCEP } from 'brazilian-values';
import { makeStyles } from "@material-ui/core/styles";



import Button from "../components/CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Divider } from 'semantic-ui-react'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import BasicLayout from "../components/CouponFeed/BasicLayout";
import LoginFacebook from '../components/Facebook'

import RenderConclusion from "../components/CouponFeed/SignUpForm/Retail/RenderConclusion";
import RenderForm from "../components/CouponFeed/SignUpForm/Retail/RenderForm";


import api from "../services/api"

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


export default class SignUp extends Component {
  state = {
    email: "",
    cnpj: "",
    tmp_cnpj: "",
    name: "",
    phone: "",
    passw: "",
    address_street: "",
    address_number: "",
    address_comp: "",
    address_neighb: "",
    address_city: "",
    address_state: "",
    address_zip: "",
    address_zip_tmp: "",
    address_country: "",
    done: false,
    error: "",
  }
  handleSubmit = async event => {
    event.preventDefault();
    // await fetch("https://api.couponfeed.co/retails", 
    // {
    //   method: "POST",
    //   credentials: "include",
    //   body: {
    //     name: this.state.name,
    //     email: this.state.email,
    //     phone: this.state.phone,
    //     password: this.state.passw,
    //     cnpj: this.state.cnpj,
    //     address_street: this.state.address_street,
    //     address_number: this.state.address_number,
    //     address_city: this.state.address_city,
    //     address_state: this.state.address_state,
    //     address_zip: this.state.address_zip,
    //     address_neighb: this.state.address_neighb,
    //     address_comp: this.state.address_comp,
    //     // address_country: this.state.address_country
    //   },
    //   // mode: 'no-cors',
    //   headers: {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Credentials": true,
    //     "Access-Control-Allow-Origin": "https://www.couponfeed.co"
    //   }
    // }
    // )
    await api.post(`/retails`, {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.passw,
      cnpj: this.state.cnpj,
      address_street: this.state.address_street,
      address_number: this.state.address_number,
      address_city: this.state.address_city,
      address_state: this.state.address_state,
      address_zip: this.state.address_zip,
      address_neighb: this.state.address_neighb,
      address_comp: this.state.address_comp,
      // address_country: this.state.address_country
    })
      .then(response => { console.log(response); this.setState({ id: response.id, done: true }) })
      .catch(e => { this.setState({ error: e.error }) });
    this.setState({});
    console.log(this.state);
  }

  handleAddressNumber = event => {
    this.setState({
      address_number: event.target.value
    })
  }
  handleAddressZip = event => {
    event.persist()
    this.setState({ address_zip_tmp: formatToCEP(event.target.value) })
    if (isCEP(event.target.value)) {
      cep(event.target.value).then(response => {
        this.setState({
          address_street: response.street,
          address_neighb: response.neighborhood,
          address_city: response.city,
          address_state: response.state,
          address_zip: formatToCEP(event.target.value)
        })
      })
        .catch(err => this.setState({ error: err.message }))

    }
  }

  handleAddressCountry = event => {
    // console.log(event.target.value);
    this.setState({
      address_country: event.target.value
    })
  }
  handleNameInput = event => {
    // console.log(event.target.value);
    this.setState({
      name: event.target.value
    })
  }

  handlePhoneInput = event => {
    this.setState({
      phone: event.target.value
    })
  }
  handleCNPJInput = event => {
    this.setState({ tmp_cnpj: formatToCNPJ(event.target.value) })
    if (isCNPJ(event.target.value)) {
      this.setState({
        cnpj: formatToCNPJ(event.target.value),
      })
    }
  }
  handleEmailInput = event => {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswInput = event => {
    this.setState({
      passw: event.target.value
    });
  }


  render() {
    const { error, done } = this.state;
    console.log(this.state)
    if (done && !error) {
      return (<BasicLayout>
        <RenderConclusion state={this.state} error={error} />
      </BasicLayout>)
    }
    else {
      return (
        <BasicLayout>
          <Avatar className={useStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Fazer Login
          </Typography>
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <LoginFacebook retail={true} />
          </div>
          <Divider horizontal className={useStyles.divider}><hr style={{ border: '1px solid red' }} />
            {/* ou */}
          </Divider>
          <RenderForm
            error={error}
            state={this.state}
            handleSubmit={this.handleSubmit}
            handleAddressNumber={this.handleAddressNumber}
            handleAddressZip={this.handleAddressZip}
            handleAddressCountry={this.handleAddressCountry}
            handlePhoneInput={this.handlePhoneInput}
            handleCNPJInput={this.handleCNPJInput}
            handleEmailInput={this.handleEmailInput}
            handlePasswInput={this.handlePasswInput}
            handleNameInput={this.handleNameInput}
          />
        </BasicLayout>)
    }
     {

      return (

        <BasicLayout>
          <Avatar className={useStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Fazer Login
        </Typography>
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            {/* <LoginFacebook /> */}
            <LoginFacebook retail={true} />

          </div>
          <Divider horizontal className={useStyles.divider}><hr style={{ border: '1px solid red' }} />
            {/* ou */}
          </Divider>

          <form
            className={useStyles.form}
            noValidate
            onSubmit={this.handleSignIn}
          >
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
}