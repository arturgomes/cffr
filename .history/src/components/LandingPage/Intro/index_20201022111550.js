import React, { Component } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/css/fontawesome-all.css";
import "../../../assets/css/fontawesome.css";
// import "../../../assets/css/swiper.css";
// import "../../../assets/css/magnific-popup.css";
import "./styles.css";

import feedback from "../../../assets/images/feedback.svg";

export default class Intro extends Component {
  render() {
    return (
      <div>
        <header
          // id="header"
          className="header"
        >
          <div className="header-content">
            {/* <Parallax > */}

            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="text-container">
                    <h1>
                      Ouça e <span className="turquoise">Encante</span>
                      <br /> os Seus Clientes
                    </h1>
                    <p className="p-large">
                      A CouponFeed veio para auxiliar o varejista na coleta de
                      feedbacks das experiências de seu cliente. E juntos vamos
                      além: estabelecemos um canal direto de comunicação com os
                      seus clientes lhe permitindo <span>fechar o loop</span>{" "}
                      após seus feedbacks.{" "}
                    </p>
                    <p className="p-large">
                      {" "}
                      E em troca, fidelize seu cliente com pontos que podem ser
                      convertidos em descontos em produtos e também participa de
                      promoções exclusivas.
                    </p>

                    <Link className="btn-solid-lg" href="/pricing">
                      Experimente Agora
                    </Link>
                  </div>
                </div>
                <div className="iHide">
                  <div className="col-lg-6">
                    {/* <div className="image-container"> */}
                    <img src={feedback} alt="alternative" />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* </Parallax> */}
          </div>
        </header>
      </div>
    );
  }
}
