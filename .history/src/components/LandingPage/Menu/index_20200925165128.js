import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//Material.ui


// import AnchorLink from "react-anchor-link-smooth-scroll";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeaderLinks from "../Header/HeaderLinks";

import slogan from "../../../assets/images/sem_slogan_fundo_claro@4x.png"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../../assets/css/fontawesome-all.css";
// import "../../../assets/css/fontawesome.css";
// import "../../../assets/css/swiper.css";
// import "../../../assets/css/magnific-popup.css";
// import './style.css'
import Header from "../../../components/Header/Header.js";
import Button from "../../../components/CustomButtons/Button.js";
import {
  isAuthenticated, getTu
} from '../../../services/auth';
// import api from '../../services/api';


const useStyles = makeStyles({
  list:{
    display:"flex",
    flexDirection:"row"
  },
});


export default class Menu extends Component {
  render() {

    return (
      <>
        <Header
          brand={slogan}
          fixed
          changeColorOnScroll={{
            color: "white",
            height:100
          }}
          rightLinks={<HeaderLinks />
          }
        />
       </>
    );
  }
}
