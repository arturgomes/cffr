import React, { Component } from "react";

import styled from 'styled-components';
import Footer from "../../components/LandingPage/Footer";
import Post1 from './blog/posts/post-24092020'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/fontawesome-all.css";
import "./css/fontawesome.css";
import "./css/swiper.css";
import "./css/magnific-popup.css";
import "./css/styles.css";
import Menu from "../../components/LandingPage/Menu";

import Post from '../../components/Post'

const Spacing = styled.div`
  margin-top: 30px;
`
const BlogHeader = styled.div`
  font-size:22px;
  margin:20px;
  text-align: center;
  justify-content:center;
  vertical-align: middle;
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
