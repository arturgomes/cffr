import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";

import styled from 'styled-components';
import Footer from "../../components/LandingPage/Footer";
import Post1 from './blog/posts/post-24092020'

import {
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
//Material.ui


import AnchorLink from "react-anchor-link-smooth-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import slogan from "./images/sem_slogan_fundo_claro@4x.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/fontawesome-all.css";
import "./css/fontawesome.css";
import "./css/swiper.css";
import "./css/magnific-popup.css";
import "./css/styles.css";
import Menu from "../../components/LandingPage/Menu";

// import Header from "../../components/Header/Header.js";
// import Button from "../../components/CustomButtons/Button.js";
// import styles from '../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle'
// import styles1 from './css/styles.css'
import Post from '../../components/Post'
// import Parallax from "../../components/Parallax/Parallax.js";
// import {
//   // login, getId, getUser, 
//   isAuthenticated, getTu
// } from '../../services/auth';
// import api from '../../services/api';

// const useStyles = makeStyles(styles);
// const classes = makeStyles(styles1);
// const classes = useStyles();
const Spacing = styled.div`
  margin-top: 30px;
`
const BlogHeader = styled.div`
  font-size:22px;
  margin:20px;
  justify-content:center;
  vertical-align: middle
  text-align:justify;
`
const Divider = styled.div`
  border-bottom: 1px solid #000;
  

`
const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1em;
`

const Primary = styled.div`
    max-width: 650px;
    margin: 0 auto;
    margin-top:100px;
    margin-bottom:20px;
    font-family: 'Sen', sans-serif;
`
const newpost = ``

const posts = [
{
  title: "TITLE HEADING",
  author: "Title description",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a vestibulum tellus. Etiam neque metus, porttitor id ullamcorper id, accumsan non nisi. Nullam justo lacus, gravida et sagittis pellentesque, lobortis quis turpis. Aenean rhoncus vitae lacus vel tristique. Aenean id ligula sed justo euismod placerat et ut lacus. Maecenas eget egestas justo. Nam hendrerit sem risus, rutrum ullamcorper libero sodales eleifend. Vivamus ac lectus diam. Proin tempor nulla elit, eu tempus arcu cursus eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam a ultricies diam. Phasellus tempor tortor a dui molestie dictum. Duis non neque ex",
  date: "Dec 6, 2017",
},
// {
//   title: "TITLE HEADING",
//   author: "Title description",
//   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a vestibulum tellus. Etiam neque metus, porttitor id ullamcorper id, accumsan non nisi. Nullam justo lacus, gravida et sagittis pellentesque, lobortis quis turpis. Aenean rhoncus vitae lacus vel tristique. Aenean id ligula sed justo euismod placerat et ut lacus. Maecenas eget egestas justo. Nam hendrerit sem risus, rutrum ullamcorper libero sodales eleifend. Vivamus ac lectus diam. Proin tempor nulla elit, eu tempus arcu cursus eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam a ultricies diam. Phasellus tempor tortor a dui molestie dictum. Duis non neque ex",
//   date: "Dec 7, 2017",
// },
// {
//   title: "TITLE HEADING",
//   author: "Title description",
//   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a vestibulum tellus. Etiam neque metus, porttitor id ullamcorper id, accumsan non nisi. Nullam justo lacus, gravida et sagittis pellentesque, lobortis quis turpis. Aenean rhoncus vitae lacus vel tristique. Aenean id ligula sed justo euismod placerat et ut lacus. Maecenas eget egestas justo. Nam hendrerit sem risus, rutrum ullamcorper libero sodales eleifend. Vivamus ac lectus diam. Proin tempor nulla elit, eu tempus arcu cursus eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam a ultricies diam. Phasellus tempor tortor a dui molestie dictum. Duis non neque ex",
//   date: "Dec 7, 2017",
// },
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


  render() {
    return (
      <>
        <Menu />
        <Wrap>
          <Primary>
          <Spacing />

          <BlogHeader>
              Blog da CouponFeed
            </BlogHeader>
            <Divider/>
            {/* <PostBlogs /> */}
            <Post1/>
          </Primary>
        </Wrap>


<Footer />

      </>
    );
  }
}
