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
    return (
      <div className="footer">
        <div className="contain">
          <div className="col">
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>Resources</h1>
            <ul>
              <li>Webmail</li>
              <li>Redeem code</li>
              <li>WHOIS lookup</li>
              <li>Site map</li>
              <li>Web templates</li>
              <li>Email templates</li>
            </ul>
          </div>
          <div className="col">
            <h1>Support</h1>
            <ul>
              <li>Contact us</li>
              <li>Web chat</li>
              <li>Open ticket</li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="footer-distributed">

            <div className="footer-left">
              <h4>Sobre a CouponFeed</h4>
              <p>Somos fascinados em oferecer um dos mais atrativos serviços de coleta de informações sobre a
                    experiência dos clientes.</p>
            </div>

            <div className="footer-center">
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
            <div className="footer-right">
              <h4>Siga-nos nas redes sociais</h4>
              <div className="social_network"><a href="https://instagram.com/couponfeed"> <FaInstagram style={{ fontSize: 30, marginLeft: 10 }} /></a>
                <a href="https://fb.com/couponfeed"><FaFacebook style={{ fontSize: 30 }} /></a>
              </div>

              <div className="spacer"></div>
              <p className="p-small">Copyright © 2020 <AnchorLink href="https://couponfeed.com.br">CouponFeed</AnchorLink > - Todos os direitos reservados</p>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Footer1;