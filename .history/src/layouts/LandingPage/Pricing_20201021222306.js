import React, { Component } from "react";

import Menu from "../../components/LandingPage/Menu";
// import Prices from "../../components/LandingPage/Prices";
import Footer from "../../components/LandingPage/Footer";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Menu />
        {/* <Intro/> */}
        {/* <Description/> */}
        {/* <Prices /> */}
        {/* <Testemonials/> */}
        {/* <Contact/> */}
        <Footer />
      </>
    );
  }
}
