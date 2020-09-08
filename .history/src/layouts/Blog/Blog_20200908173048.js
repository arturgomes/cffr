import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom"


import {
  FaQrcode,
  FaFacebook,
  FaInstagram,
  // FaCheck,
  // FaTimes,
  FaWhatsapp,
  FaChartBar,
  FaHandsHelping
} from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//Material.ui
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined'; //clock
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';


import AnchorLink from "react-anchor-link-smooth-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slogan from "./images/sem_slogan_fundo_claro@4x.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/fontawesome-all.css";
import "./css/fontawesome.css";
import "./css/swiper.css";
import "./css/magnific-popup.css";
import "./css/styles.css";

import Header from "../../components/Header/Header.js";
import Button from "../../components/CustomButtons/Button.js";
import styles from '../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle'
import styles1 from './css/styles.css'
// import Parallax from "../../components/Parallax/Parallax.js";
import feedback from "./images/feedback.svg";
import { 
  // login, getId, getUser, 
  isAuthenticated, getTu } from '../../services/auth';
// import api from '../../services/api';

const useStyles = makeStyles(styles);
const classes = makeStyles(styles1);
// const classes = useStyles();


// let ps;

export default class Blog extends Component {
  // async componentDidMount() {
  //   fetch("https://api.couponfeed.co/auth/success", {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": true,
  //         "Access-Control-Allow-Origin": "https://www.couponfeed.co"
  //       }
  //     })
  //     .then(responseJson => {
  //       // this.setState({
  //       // authenticated: true,
  //       // user: responseJson.data.login
  //       // });
  //       // console.log(responseJson)
  //       const { name, id, tu } = responseJson.data;
  //       login(responseJson.data.cookies, name, id, tu);
  //       // getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");
  //     })
  //     .catch(error => {
  //       this.setState({
  //         // authenticated: false,
  //         error: "Failed to authenticate user"
  //       });
  //     });
  
  //   if (isAuthenticated() && (getUser() === 'customer')) {
  //     const fid = decodeURIComponent(this.props.match.params.fid);
  //     if (fid) {
  //       // console.log("tem fid");
  //       api.post(`/users/i`, {
  //         fid,
  //         user_id: getId()
  //       })
  //         .then(response => {
  //           this.props.history.push("/customer");
  //         })
  //         .catch(err => { this.setState({ error: err.response.data.error }) })
  //     }

  //   }
  //   if (isAuthenticated() && (getUser() === 'retail')) {
  //     const fid = decodeURIComponent(this.props.match.params.fid);
  //     if (fid) {
  //       // console.log("tem fid");
  //       api.post(`/users/i`, {
  //         fid,
  //         user_id: getId()
  //       })
  //         .then(response => {
  //           this.props.history.push("/retail");
  //         })
  //         .catch(err => { this.setState({ error: err }) })
  //     }
  //   }
  // }
render(){
  return (
    <>
      <Header
        brand={slogan}
        fixed
        changeColorOnScroll={{
          olor: "white"
        }}
        rightLinks={<>
          {/* <HeaderLinks/> */}
   
          <List className={classes.list}
          style={{display:"flex", flexDirection:"row"}}>

            {isAuthenticated() ?
              (<ListItem className={classes.listItem}>
                <Button
                  href={getTu() === '897316929176464ebc9ad085f31e7284' ? "/customer" : "/retail"}
                  className={classes.navLink}
                  // onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Seu Perfil
                  </Button>
              </ListItem>) :
              (<ListItem className={classes.listItem}>
                <Button
                  href="/login"
                  className={classes.navLink}
                  //  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Área do cliente
                 </Button>
              </ListItem>)
            }
            <ListItem className={classes.listItem}>
              <Button
                href="/rsignup"
                className={useStyles.registerNavLink}
                style={{ fontSize: "14px" }}
                // onClick={e => e.preventDefault()}
                color="rose"
                round
              >
                Quero ouvir meus clientes agora!
                  </Button>
            </ListItem>
          </List></>
        }
      />




      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-col">
                <h4>Sobre a CouponFeed</h4>
                <p>Somos fascinados em oferecer um dos mais atrativos serviços de coleta de informações sobre a
                            experiência dos clientes.</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="footer-col last">
                <h4>Siga-nos nas redes sociais</h4>

                <a href="https://fb.com/couponfeed"> <FaFacebook style={{ fontSize: 30 }} /></a>

                <a href="https://instagram.com/couponfeed"> <FaInstagram style={{ fontSize: 30, marginLeft: 10 }} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="p-small">Copyright © 2020 <AnchorLink href="https://inovatik.com">Inovatik</AnchorLink > - All rights
                        reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
}
