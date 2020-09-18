import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import styled from 'styled-components';


import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//Material.ui


import AnchorLink from "react-anchor-link-smooth-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slogan from "../../assets/images/sem_slogan_fundo_claro@4x.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/fontawesome-all.css";
import "../../assets/css/fontawesome.css";
import "../../assets/css/swiper.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/styles.css";

import Header from "../../components/Header/Header.js";
import Button from "../../components/CustomButtons/Button.js";
import styles from '../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle'
import styles1 from "../../assets/css/styles.css";
import Post from '../../components/Post'
// import Parallax from "../../components/Parallax/Parallax.js";
import {
  // login, getId, getUser, 
  isAuthenticated, getTu
} from '../../services/auth';
// import api from '../../services/api';

const useStyles = makeStyles(styles);
const classes = makeStyles(styles1);
// const classes = useStyles();

const Text = styled.div`
  text-align: justify;
  text-justify: inter-word;
  margin-bottom:5px;
`
const Spacing = styled.div`
    height: 100px;
`
const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1em;
`

const Primary = styled.div`
    max-width: 650px;
    margin: 0 auto;
    margin-bottom:20px;
    font-family: 'Sen', sans-serif;
`

const Block = styled.div`
padding:25px;
    border: "0";
    margin-bottom: "30px";
    margin-top: "30px";
    border-radius: "6px";
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)";
    background: whiteColor;
    width: "100%";
    box-shadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)";
    position: "relative";
    display: "flex";
    flex-direction: "column";
    min-width: "0";
    word-wrap: "break-word";
    font-size: ".875rem";
`;



export default class LPHeader extends Component {
  state = {


  }

  render() {
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
              style={{ display: "flex", flexDirection: "row" }}>

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
       </>
    );
  }
}
