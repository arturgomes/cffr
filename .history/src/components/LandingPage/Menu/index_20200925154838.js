import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//Material.ui


// import AnchorLink from "react-anchor-link-smooth-scroll";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
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
  // const useStyles = makeStyles(styles);

    return (
      <>
        <Header
          brand={slogan}
          fixed
          changeColorOnScroll={{
            color: "white",
            height:100
          }}
          rightLinks={<>
            {/* <HeaderLinks/> */}

            <List 
            className={useStyles.list}
              //className="list-menu"
              // style={{  }}
              >
                <ListItem //className={useStyles.listItem}
                >
                  <Button
                    href="/blog"
                    // className={useStyles.navLink}
                    // onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Blog
                  </Button>
                </ListItem>
              {isAuthenticated() ?
                (<ListItem //className={useStyles.listItem}
                >
                  <Button
                    href={getTu() === '897316929176464ebc9ad085f31e7284' ? "/customer" : "/retail"}
                    // className={useStyles.navLink}
                    // onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Seu Perfil
                  </Button>
                </ListItem>) :
                (<ListItem //className={useStyles.listItem}
                >
                  <Button
                    href="/login"
                    //className={useStyles.navLink}
                    //  onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Área do cliente
                 </Button>
                </ListItem>)
              }
              <ListItem //className={useStyles.listItem}
              >
                <Button
                  href="/rsignup"
                  // className={useStyles.registerNavLink}
                  // style={{ fontSize: "14px" }}
                  // onClick={e => e.preventDefault()}
                  color="rose"
                  round
                >
                  Quero VENDER MAIS!
                  </Button>
              </ListItem>
            </List></>
          }
        />
       </>
    );
  }
}
