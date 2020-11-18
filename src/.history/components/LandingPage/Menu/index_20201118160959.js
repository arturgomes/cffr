import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
//Material.ui


// import AnchorLink from "react-anchor-link-smooth-scroll";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeaderLinks from "../../Header/HeaderLinks.js";

import slogan from "../../../assets/completa_fundo_claro@4x.png"

import Header from "../../../components/Header/Header.js";
// import Button from "../../../components/CustomButtons/Button.js";
// import {
//   isAuthenticated, getTu
// } from '../../../services/auth';
// import api from '../../services/api';


// const useStyles = makeStyles({
//   list:{
//     display:"flex",
//     flexDirection:"row"
//   },
// });


export default class Menu extends Component {
  render() {

    return (
      <>
        <Header
          brand={slogan}
          rightLinks={<HeaderLinks />}
          fixed
          // color="transparent"
          changeColorOnScroll={{
            height: 20,
            color: "white"
          }}
        />
      </>
    );
  }
}
