import React, { Component } from "react";

import {
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import AnchorLink from "react-anchor-link-smooth-scroll";
import "./styles.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer_container">
          <div className="threecol">
            <h4>Sobre a CouponFeed</h4>
            <p>Somos fascinados em oferecer um dos mais atrativos serviços de coleta de informações sobre a
                          experiência dos clientes.</p>
          </div>
          <div className="threecol">
            {/* <div className="footer-col last"> */}
            
          </div>
          <div className="threecol">
          <h4>Siga-nos nas redes sociais</h4>
            <a href="https://instagram.com/couponfeed"> <FaInstagram style={{ fontSize: 30, marginLeft: 10 }} /></a>
            <a href="https://fb.com/couponfeed"><FaFacebook style={{ fontSize: 30 }} /></a>
            <div className="spacer"></div>
          <p className="p-small">Copyright © 2020 <AnchorLink href="https://couponfeed.com.br">CouponFeed</AnchorLink > - Todos os direitos reservados</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Footer;