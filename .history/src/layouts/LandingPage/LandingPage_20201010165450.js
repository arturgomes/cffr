import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Menu from "../../components/LandingPage/Menu";
import Intro from "../../components/LandingPage/Intro";
import Description from "../../components/LandingPage/Description";
import Prices from "../../components/LandingPage/Prices";
import Contact from "../../components/LandingPage/Contact";
import Testemonials from "../../components/LandingPage/Testemonials";
import Footer from "../../components/LandingPage/Footer";

const styles = {
  root: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
    paddingTop: '25px',
    color: '#FFFFFF'
  }
};
class LandingPage extends Component {
  
render(){
  return (
    <>
      <Menu/>
      <Intro/>
      <Description/>
      <Prices/>
      <Testemonials/>
      <Contact/>
      <Footer/>
    </>
  );
}
}

export default withStyles(styles)(LandingPage)