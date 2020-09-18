import React, { Component } from "react";
import { Link } from "react-router-dom"


import {
  FaQrcode,
  FaFacebook,
  FaInstagram,
  // FaCheck,
  // FaTimes,
  FaWhatsapp,
  FaChartBar,
  FaHandsHelping
} from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";

//Material.ui
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined'; //clock
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';


import AnchorLink from "react-anchor-link-smooth-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/fontawesome-all.css";
import "./css/fontawesome.css";
import "./css/swiper.css";
import "./css/magnific-popup.css";
import "./css/styles.css";
// import Parallax from "../../components/Parallax/Parallax.js";
class Footer extends Component {
  render() {
    return (
      <div>
        
      <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-col">
              <h4>Sobre a CouponFeed</h4>
              <p>Somos fascinados em oferecer um dos mais atrativos serviços de coleta de informações sobre a
                          experiência dos clientes.</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="footer-col last">
              <h4>Siga-nos nas redes sociais</h4>

              <a href="https://fb.com/couponfeed"> <FaFacebook style={{ fontSize: 30 }} /></a>

              <a href="https://instagram.com/couponfeed"> <FaInstagram style={{ fontSize: 30, marginLeft: 10 }} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="p-small">Copyright © 2020 <AnchorLink href="https://inovatik.com">Inovatik</AnchorLink > - All rights
                      reserved</p>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
  }
}

export default Footer;