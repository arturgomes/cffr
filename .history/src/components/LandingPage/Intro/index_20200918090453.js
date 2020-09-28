import React, { Component } from "react";
import { Link } from "react-router-dom"


import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../assets/css/fontawesome-all.css";
import "../../../assets/css/fontawesome.css";
import "../../../assets/css/swiper.css";
import "../../../assets/css/magnific-popup.css";
import "../../../assets/css/styles.css";

import Button from "../../../components/CustomButtons/Button.js";
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
              <div className="col-lg-8">
                <div className="text-container">
                  <h1><span className="turquoise">Dê Feedbacks</span> <br />Concorra a prêmios
                  </h1>
                  <p className="p-large">Quem não gosta de um desconto ou brinde? A CouponFeed veio para auxiliar
                  o varejista na coleta de feedbacks das experiências de seu cliente. E em troca, o
                  cliente acumula pontos que podem ser convertidos em descontos em produtos e também
                                participa de promoções exclusivas.</p>


                  {/* <AnchorLink className="btn-solid-lg" href="/rsignup">TESTE GRATIS POR 30 DIAS</AnchorLink > */}
                </div>
                {/* <div className="row"> */}
                {/* <div className="iWant"> */}
                  <div className="cta-group" style={{ textAlign: 'center' }}>
                    <ul>
                      <li>
                        <span>EU QUERO...</span>
                      </li>
                      <li>
                        <Button className="btn-solid-lg2" component={Link} to="/rsignup">QUERO VENDER MAIS</Button >
                      </li>
                      <li>
                        <p><i>Escolha essa se você é varejista ou presta serviços para clientes</i></p>
                      </li>
                    </ul>
                  </div>
                  <div className="cta-middle" style={{ textAlign: 'center' }}><span>OU</span></div>
                  <div className="cta-group" style={{ textAlign: 'center' }}>
                    <ul>
                      <li>
                        <span>EU QUERO...</span>
                      </li>
                      <li>
                        <Button className="btn-solid-lg1" component={Link} to="/signup">DAR FEEDBACKS</Button >
                      </li>
                      <li>
                        <p><i>Escolha essa se você é consumidor e quer ganhar prêmios em troca de seus feedbacks.</i></p>
                      </li>
                    </ul>
                  </div>
                  {/* </div> */}
                </div>
              </div>
              <div className="iHide">
                <div className="col-lg-4">
                  <div className="image-container">
                    <img className="img-fluid" src={feedback} alt="alternative" />
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* </Parallax> */}
        </div>
      </header >

      </div>
    )
  }
}
