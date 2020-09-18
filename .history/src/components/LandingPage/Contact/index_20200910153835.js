import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

//Material.ui
import AnchorLink from "react-anchor-link-smooth-scroll";


import {
  FaQrcode,
  FaWhatsapp,
  FaChartBar,
  FaHandsHelping
} from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";

//Material.ui
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined'; //clock
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';

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


export default class Contact extends Component {
  render() {
    return (
      <>
        

      <div id="contact" className="form-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Informações de Contato</h2>
              <ul className="list-unstyled li-space-lg">
                <li className="address">Não hesite em nos contactar ou mandar uma mensagem</li>

                <li>Olga <FaWhatsapp className="turquoise" style={{ fontSize: 20 }} /> <AnchorLink className="turquoise"
                  href="https://wa.me/5567992432095">+55 67
                                99243-2095</AnchorLink >
                </li>
                <li>Artur <FaWhatsapp className="turquoise" style={{ fontSize: 20 }} /> <AnchorLink className="turquoise"
                  href="https://wa.me/5567993021141">+55
                  67
                                99302-1141</AnchorLink >
                </li>
                <li><i className="fas fa-envelope"></i><AnchorLink className="turquoise"
                  href="mailto:couponfeedbr@gmail.com">couponfeedbr@gmail.com</AnchorLink ></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      </>
    )
  }
}
