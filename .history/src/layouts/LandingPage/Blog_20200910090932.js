import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";



import styled from 'styled-components';


import {
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//Material.ui


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

const posts = [{
                title: "TITLE HEADING",
                author: "Title description",
                date: "Dec 5, 2017",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a vestibulum tellus. Etiam neque metus, porttitor id ullamcorper id, accumsan non nisi. Nullam justo lacus, gravida et sagittis pellentesque, lobortis quis turpis. Aenean rhoncus vitae lacus vel tristique. Aenean id ligula sed justo euismod placerat et ut lacus. Maecenas eget egestas justo. Nam hendrerit sem risus, rutrum ullamcorper libero sodales eleifend. Vivamus ac lectus diam. Proin tempor nulla elit, eu tempus arcu cursus eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam a ultricies diam. Phasellus tempor tortor a dui molestie dictum. Duis non neque ex",
              },
              {
                title: "TITLE HEADING",
                author: "Title description",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a vestibulum tellus. Etiam neque metus, porttitor id ullamcorper id, accumsan non nisi. Nullam justo lacus, gravida et sagittis pellentesque, lobortis quis turpis. Aenean rhoncus vitae lacus vel tristique. Aenean id ligula sed justo euismod placerat et ut lacus. Maecenas eget egestas justo. Nam hendrerit sem risus, rutrum ullamcorper libero sodales eleifend. Vivamus ac lectus diam. Proin tempor nulla elit, eu tempus arcu cursus eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam a ultricies diam. Phasellus tempor tortor a dui molestie dictum. Duis non neque ex",
                date: "Dec 6, 2017",
              },
              {
                title: "TITLE HEADING",
                author: "Title description",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a vestibulum tellus. Etiam neque metus, porttitor id ullamcorper id, accumsan non nisi. Nullam justo lacus, gravida et sagittis pellentesque, lobortis quis turpis. Aenean rhoncus vitae lacus vel tristique. Aenean id ligula sed justo euismod placerat et ut lacus. Maecenas eget egestas justo. Nam hendrerit sem risus, rutrum ullamcorper libero sodales eleifend. Vivamus ac lectus diam. Proin tempor nulla elit, eu tempus arcu cursus eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam a ultricies diam. Phasellus tempor tortor a dui molestie dictum. Duis non neque ex",
                date: "Dec 7, 2017",
              },
              {
                title: "TITLE HEADING",
                author: "Title description",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a vestibulum tellus. Etiam neque metus, porttitor id ullamcorper id, accumsan non nisi. Nullam justo lacus, gravida et sagittis pellentesque, lobortis quis turpis. Aenean rhoncus vitae lacus vel tristique. Aenean id ligula sed justo euismod placerat et ut lacus. Maecenas eget egestas justo. Nam hendrerit sem risus, rutrum ullamcorper libero sodales eleifend. Vivamus ac lectus diam. Proin tempor nulla elit, eu tempus arcu cursus eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam a ultricies diam. Phasellus tempor tortor a dui molestie dictum. Duis non neque ex",
                date: "Dec 7, 2017",
              },
              ]

const PostBlogs = () => {
  let renderized = posts.map(post => {
    return (<Post
      title={post.title}
      author={post.author}
      date={post.date}
      content={post.content} />)
  })
  return renderized;

}


export default class Blog extends Component {
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
        <Wrap>
          <Spacing />
          <Primary>
            <PostBlogs/>
          </Primary>
        </Wrap>



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
