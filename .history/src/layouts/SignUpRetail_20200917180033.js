import React, { Component } from "react";
import cep from 'cep-promise';
import { formatToCEP, isCNPJ, formatToCNPJ, isCEP } from 'brazilian-values';

// import {
//   FaFacebook,
//   FaGoogle,
// } from "react-icons/fa";

import {
  BiLogIn,
} from "react-icons/bi";

// import Button from "../components/CustomButtons/Button.js";
// import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// import Grid from '@material-ui/core/Grid';
// import Link from "@material-ui/core/Link";
import { Divider } from 'semantic-ui-react'
import BasicLayout from "../components/CouponFeed/BasicLayout";
import LoginFacebook from '../components/Facebook'

import RenderConclusion from "../components/CouponFeed/SignUpForm/Retail/RenderConclusion";
import RenderForm from "../components/CouponFeed/SignUpForm/Retail/RenderForm";


import api from "../services/api"



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
    not_social: false,
    error: "",
  }
  handleSubmit = async event => {
    event.preventDefault();

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
  handleNoSocial = () => {
    this.setState({ not_social: true });
  }

  render() {

    const { not_social, error, done } = this.state;
    console.log(this.state)
    if (done && !error) {
      return (<BasicLayout>
        <RenderConclusion state={this.state} error={error} />
      </BasicLayout>)
    }
    if (not_social) {
      return (
        <BasicLayout title="Fazer cadastro">
          {/* <Avatar className={useStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Fazer Login
        </Typography> */}
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
        </BasicLayout>
      )
    }
    else {
      return (

        <BasicLayout title="Fazer Login">
          {/* <Avatar className={useStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">

          </Typography>
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            {/* <LoginFacebook /> */}
            <LoginFacebook retail={true} />

          </div>
          <Divider horizontal 
          ><hr style={{ border: '1px solid #aaa' }} />
            {/* ou */}
          </Divider>
          <li onClick={() => { this.handleNoSocial() }} style={{
            display: "flex",
            flexDirection: "column",
            width: "750%",
            // marginLeft: "50px", marginRight: "50px",
            // padding: "12px",
            border: "none",
            borderRadius: "4px",
            // margin: "5px 0",
            opacity: "0.85",
            // display: "inline-block",
            fontSize: "17px",
            lineHeight: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
          }} >
            <div style={{ marginLeft: "50px", marginRight: "50px" }} 
            >
              <div 
              >
                <BiLogIn />
              </div>
                Prefiro me cadastrar
                </div>
          </li>
     


        </BasicLayout>
      );
    }

  }
}