import React, { Component } from "react";
import "../../assets/css/styles.css";

import Menu from "../../components/LandingPage/Menu";
import Intro from "../../components/LandingPage/Intro";
import Description from "../../components/LandingPage/Description";
import Contact from "../../components/LandingPage/Contact";
// import Features from "../../components/LandingPage/Features";
import Footer from "../../components/LandingPage/Footer";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Menu />
        <Intro />
        <Description />
        {/* <Features /> */}
        <Contact />
        <Footer />
      </>
    );
  }
}
