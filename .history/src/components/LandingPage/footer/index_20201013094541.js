import React, { Component } from "react";


import {
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

//Material.ui


import AnchorLink from "react-anchor-link-smooth-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";
// import Parallax from "../../components/Parallax/Parallax.js";
class Footer extends Component {
  render() {
    return (
      <div>

        <div className="footer">
          <div className=".fourcol">
            <h4>Sobre a CouponFeed</h4>
            <p>Somos fascinados em oferecer um dos mais atrativos serviços de coleta de informações sobre a
                          experiência dos clientes.</p>
          </div>

          <div className=".fourcol">
            {/* <div className="footer-col last"> */}
            <h4>Siga-nos nas redes sociais</h4>

            <a href="https://fb.com/couponfeed"> <FaFacebook style={{ fontSize: 30 }} /></a>

            <a href="https://instagram.com/couponfeed"> <FaInstagram style={{ fontSize: 30, marginLeft: 10 }} /></a>
          </div>
        </div>

        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="p-small">Copyright © 2020 <AnchorLink href="https://couponfeed.com.br">CouponFeed</AnchorLink > - Todos os direitos reservados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;