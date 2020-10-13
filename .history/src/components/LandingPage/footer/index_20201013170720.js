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
            <h4>Sobre a CouponFeed</h4>
            <p>Somos fascinados em oferecer um dos mais atrativos serviços de coleta de informações sobre a
                    experiência dos clientes.</p>
          </div>
          <div className="col">
            <h4>Contato</h4>

            <ul className="list-unstyled li-space-lg">
              <li className="address">Não hesite em nos contactar ou mandar uma mensagem</li>


              <li><FaWhatsapp className="turquoise" style={{ fontSize: 20, marginRight:'10px' }} />
                <AnchorLink className="turquoise"
                  href="https://wa.me/5567993021141">+55 67 99302-1141</AnchorLink >
              </li>
              <li><i className="fas fa-envelope" style={{ fontSize: 20, marginRight:'10px'}} ></i><AnchorLink className="turquoise"
                href="mailto:couponfeedbr@gmail.com">couponfeedbr@gmail.com</AnchorLink ></li>
            </ul>
          </div>
          <div className="col">
            <h4>Siga-nos nas redes sociais</h4>
            <div className="social_network">
              <a href="https://instagram.com/couponfeed"> <FaInstagram style={{ fontSize: 30, marginLeft: 10 }} /></a>
              <a href="https://fb.com/couponfeed"><FaFacebook style={{ fontSize: 30 }} /></a>
            </div>

            <div className="spacer"></div>
            <p >Copyright © 2020 <Link href="https://couponfeed.com.br" >CouponFeed</Link > - Todos os direitos reservados</p>

          </div>
          <div class="clearfix"></div>

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

            </div>

            <div className="footer-center">

            </div>
            <div className="footer-right">

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Footer1;