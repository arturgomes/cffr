import React, { Component } from "react";
import { Link } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//Material.ui


// import AnchorLink from "react-anchor-link-smooth-scroll";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import slogan from "../../../assets/images/sem_slogan_fundo_claro@4x.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../assets/css/fontawesome-all.css";
import "../../../assets/css/fontawesome.css";
import "../../../assets/css/swiper.css";
import "../../../assets/css/magnific-popup.css";
import "../../../assets/css/styles.css";

import Header from "../../../components/Header/Header.js";
import Button from "../../../components/CustomButtons/Button.js";
import styles from '../../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle'
import styles1 from "../../../assets/css/styles.css";
// import Parallax from "../../components/Parallax/Parallax.js";
import {
  // login, getId, getUser, 
  isAuthenticated, getTu
} from '../../../services/auth';
// import api from '../../services/api';

const useStyles = makeStyles(styles);
const classes = makeStyles(styles1);
// const classes = useStyles();

export default class Intro extends Component {
  render() {
    return (
      <div>
        
      <header id="header" className="header" >
        <div className="header-content">
          {/* <Parallax > */}

          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="text-container">
                  <h1><span className="turquoise">Dê Feedbacks</span> <br />Concorra a prêmios
                  </h1>
                  <p className="p-large">Quem não gosta de um desconto ou brinde? A CouponFeed veio para auxiliar
                  o varejista na coleta de feedbacks das experiências de seu cliente. E em troca, o
                  cliente acumula pontos que podem ser convertidos em descontos em produtos e também
                                participa de promoções exclusivas.</p>


                  {/* <AnchorLink className="btn-solid-lg" href="/rsignup">TESTE GRATIS POR 30 DIAS</AnchorLink > */}
                </div>
                {/* <div className="row"> */}
                <div className="iWant">
                  <div className="cta-group" style={{ textAlign: 'center' }}>
                    <ul>
                      <li>
                        <span>EU QUERO...</span>
                      </li>
                      <li>
                        <Button className="btn-solid-lg1" component={Link} to="/signup">DAR FEEDBACKS</Button >
                      </li>
                      <li>
                        <p><i>Escolha essa se você é consumidor e quer ganhar prêmios em troca de seus feedbacks.</i></p>
                      </li>
                    </ul>
                  </div>
                  <div className="cta-middle" style={{ textAlign: 'center' }}><span>OU</span></div>
                  <div className="cta-group" style={{ textAlign: 'center' }}>
                    <ul>
                      <li>
                        <span>EU QUERO...</span>
                      </li>
                      <li>
                        <Button className="btn-solid-lg2" component={Link} to="/rsignup">OUVIR MEUS CLIENTES</Button >
                      </li>
                      <li>
                        <p><i>Escolha essa se você é varejista ou presta serviços para clientes</i></p>
                      </li>
                    </ul>
                  </div>
                  {/* </div> */}
                </div>
              </div>
              <div className="iHide">
                <div className="col-lg-4">
                  <div className="image-container">
                    <img className="img-fluid" src={feedback} alt="alternative" />
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* </Parallax> */}
        </div>
      </header >

      </div>
    )
  }
}
