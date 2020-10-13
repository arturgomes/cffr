import React, { Component } from "react";
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../assets/css/fontawesome-all.css";
import "../../../assets/css/fontawesome.css";
// import "../../../assets/css/swiper.css";
// import "../../../assets/css/magnific-popup.css";
// import "../../../assets/css/styles.css";

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

          {/* <div className="container"> */}
            <div className="row">
              <div className="col-lg-6">
                <div className="text-container">
                  <h1>Ouça e <span className="turquoise">Encante</span><br/> os Seus Clientes
                  </h1>
                  <p className="p-large">A CouponFeed veio para auxiliar
                  o varejista na coleta de feedbacks das experiências de seu cliente. E juntos vamos além: estabelecemos um canal direto de comunicação com os seus clientes lhe permitindo <span>fechar o loop</span> após seus feedbacks. </p>
                  <p className="p-large"> E em troca, fidelize seu cliente com o
                  cliente acumula pontos que podem ser convertidos em descontos em produtos e também
                                participa de promoções exclusivas.</p>


                  <Link className="btn-solid-lg" href="/rsignup">Experimente Agora</Link >
                </div>
                {/* <div className="row"> */}
                {/* <div className="iWant"> */}
                  {/* <div className="cta-group" style={{ textAlign: 'center' }}>
                    <ul>
                      <li>
                        <span>EU QUERO...</span>
                      </li>
                      <li>
                        <Button className="btn-solid-lg2" component={Link} to="/rsignup">OUVIR VENDER MAIS</Button >
                      </li>
                      <li>
                        <p><i>Escolha essa se você é varejista ou presta serviços para clientes</i></p>
                      </li>
                    </ul>
                  </div> */}
                  {/* <div className="cta-middle" style={{ textAlign: 'center' }}><span>OU</span></div> */}
                  {/* <div className="cta-group" style={{ textAlign: 'center' }}>
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
                  </div> */}
                  {/* </div> */}
                {/* </div> */}
              </div>
              <div className="col-lg-6">
                  <img src={feedback} alt="alternative" />
              </div>
            </div>

          {/* </div> */}
          {/* </Parallax> */}
        </div>
      </header >

      </div>
    )
  }
}
