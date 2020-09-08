/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import feedback from "../../images/feedback.svg";
import background from "../../images/header-background.jpg"
// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header"
        // className="page-header section-dark"
        style={{
          backgroundImage:
          "url(" + require("../../images/antoine-barres.jpg") + ")",
          
            // "url(../../images/header-background.jpg)",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Paper Kit React</h1>
              
            </div>
            <h2 className="presentation-subtitle text-center">
              Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!
            </h2>
          </Container>
        </div>
        
        <h6 className="category category-absolute">
          
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
