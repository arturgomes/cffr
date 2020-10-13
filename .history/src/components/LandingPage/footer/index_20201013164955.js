import React, { Component } from "react";

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import AnchorLink from "react-anchor-link-smooth-scroll";
import "./styles.css";
class Footer1 extends Component {
  render() {
    return (<><div className="footer-distributed">

      <div className="footer-left">
        
      </div>

        <div className="footer-center">
          
        </div>
        <div className="footer-right">
         
        </div>
  </div></>);
  }
}

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
            <h4>Contato</h4>

            <ul className="list-unstyled li-space-lg">
              <li className="address">Não hesite em nos contactar ou mandar uma mensagem</li>


              <li><FaWhatsapp className="turquoise" style={{ fontSize: 20 }} />
                <AnchorLink className="turquoise"
                  href="https://wa.me/5567993021141">+55 67 99302-1141</AnchorLink >
              </li>
              <li><i className="fas fa-envelope"></i><AnchorLink className="turquoise"
                href="mailto:couponfeedbr@gmail.com">couponfeedbr@gmail.com</AnchorLink ></li>
            </ul>
          </div>
          <div className="threecol">
            <h4>Siga-nos nas redes sociais</h4>
            <div className="social_network"><a href="https://instagram.com/couponfeed"> <FaInstagram style={{ fontSize: 30, marginLeft: 10 }} /></a>
              <a href="https://fb.com/couponfeed"><FaFacebook style={{ fontSize: 30 }} /></a>
            </div>

            <div className="spacer"></div>
            <p className="p-small">Copyright © 2020 <AnchorLink href="https://couponfeed.com.br">CouponFeed</AnchorLink > - Todos os direitos reservados</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Footer;