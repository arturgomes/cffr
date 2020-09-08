import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
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



import AnchorLink from "react-anchor-link-smooth-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slogan from "./images/sem_slogan_fundo_claro@4x.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/fontawesome-all.css";
import "./css/fontawesome.css";
import "./css/swiper.css";
// import "./css/magnific-popup.css";
import "./css/styles.css";

import IndexNavbar from "./components/nav/IndexNavbar.js";
import IndexHeader from "./components/header/IndexHeader.js";
import Header from "../../components/Header/Header.js";
import Button from "../../components/CustomButtons/Button.js";
import styles from '../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle'
import styles1 from './css/styles.css'

import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// import Parallax from "../../components/Parallax/Parallax.js";
import feedback from "./images/feedback.svg";
import { 
  isAuthenticated, getTu } from '../../services/auth';



// let ps;

export default function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  // async componentDidMount() {
  //   fetch("https://api.couponfeed.co/auth/success", {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": true,
  //         "Access-Control-Allow-Origin": "https://www.couponfeed.co"
  //       }
  //     })
  //     .then(responseJson => {
  //       // this.setState({
  //       // authenticated: true,
  //       // user: responseJson.data.login
  //       // });
  //       // console.log(responseJson)
  //       const { name, id, tu } = responseJson.data;
  //       login(responseJson.data.cookies, name, id, tu);
  //       // getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");
  //     })
  //     .catch(error => {
  //       this.setState({
  //         // authenticated: false,
  //         error: "Failed to authenticate user"
  //       });
  //     });
  
  //   if (isAuthenticated() && (getUser() === 'customer')) {
  //     const fid = decodeURIComponent(this.props.match.params.fid);
  //     if (fid) {
  //       // console.log("tem fid");
  //       api.post(`/users/i`, {
  //         fid,
  //         user_id: getId()
  //       })
  //         .then(response => {
  //           this.props.history.push("/customer");
  //         })
  //         .catch(err => { this.setState({ error: err.response.data.error }) })
  //     }

  //   }
  //   if (isAuthenticated() && (getUser() === 'retail')) {
  //     const fid = decodeURIComponent(this.props.match.params.fid);
  //     if (fid) {
  //       // console.log("tem fid");
  //       api.post(`/users/i`, {
  //         fid,
  //         user_id: getId()
  //       })
  //         .then(response => {
  //           this.props.history.push("/retail");
  //         })
  //         .catch(err => { this.setState({ error: err }) })
  //     }
  //   }
  // }
  // const { ...rest } = props;

  // const [prices] = useState([
  //   {
  //     value: 0,
  //     category: "Prata",
  //     type: "Ideal para MEI",
  //     features: [
  //       { valid: false, fmonth: "60 feedbacks por mês" },
  //       { valid: true, fmonth: "Relatório 60 feedbacks por mês" },
  //       { valid: true, fmonth: "Registro de um QR code" },
  //       { valid: false, fmonth: "Acesso a um dashboard personalizado" },
  //       { valid: false, fmonth: "Relatórios por e-mail" },
  //     ],
  //     prices: {
  //       monthly: "34.90",
  //       trimestral: "89.70",
  //       anual: "298.80"
  //     }
  //   },
  //   {
  //     value: 1,
  //     category: "Ouro",
  //     type: "Ideal quem está começando",

  //     features: [
  //       { valid: false, fmonth: "60 feedbacks por mês" },
  //       { valid: true, fmonth: "Relatório 60 feedbacks por mês" },
  //       { valid: true, fmonth: "Registro de um QR code" },
  //       { valid: false, fmonth: "Acesso a um dashboard personalizado" },
  //       { valid: false, fmonth: "Relatórios por e-mail" },
  //     ],
  //     prices: {
  //       monthly: "99",
  //       trimestral: "270",
  //       anual: "1020"
  //     }

  //   },
  //   {
  //     value: 2,
  //     category: "Diamante",
  //     type: "Ideal quem está em expansão",

  //     features: [
  //       { valid: true, fmonth: "Feedbacks ilimitados" },
  //       { valid: true, fmonth: "Relatório 60 feedbacks por mês" },
  //       { valid: true, fmonth: "Registro de um QR code" },
  //       { valid: true, fmonth: "Acesso a um dashboard personalizado" },
  //       { valid: true, fmonth: "Relatórios por e-mail" },
  //     ],
  //     prices: {
  //       monthly: "199",
  //       trimestral: "540",
  //       anual: "1980"
  //     }
  //   },
  //   {
  //     value: 3,
  //     category: "Platinum",
  //     type: "Ideal quem tem filiais",

  //     features: [
  //       { valid: true, fmonth: "Feedbacks ilimitados" },
  //       { valid: true, fmonth: "Relatório ilimitados" },
  //       { valid: true, fmonth: "Registro de cinco QR codes" },
  //       { valid: true, fmonth: "Acesso a um dashboard personalizado" },
  //       { valid: true, fmonth: "Relatórios por e-mail" },
  //     ],
  //     prices: {
  //       monthly: "359",
  //       trimestral: "897",
  //       anual: "3180"
  //     }
  //   },
  // ])

  // styles
  // const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  // const mainPanel = React.createRef();
  // // states and functions
  // const resizeFunction = () => {
  //   if (window.innerWidth >= 960) {
  //     // setMobileOpen(false);
  //   }
  // };
  // // initialize and destroy the PerfectScrollbar plugin
  // React.useEffect(() => {
  //   // if (navigator.platform.indexOf("Win") > -1) {
  //   //   ps = new PerfectScrollbar(mainPanel.current, {
  //   //     suppressScrollX: true,
  //   //     suppressScrollY: false
  //   //   });
  //   //   document.body.style.overflow = "hidden";gi
  //   // }
  //   // window.addEventListener("resize", resizeFunction);
  //   // // Specify how to clean up after this effect:
  //   // return function cleanup() {
  //   //   if (navigator.platform.indexOf("Win") > -1) {
  //   //     ps.destroy();
  //   //   }
  //   //   window.removeEventListener("resize", resizeFunction);
  //   // };
  //   const ps = new PerfectScrollbar(mainPanel.current);
  // }, [mainPanel]);

//   const[headerStyle] = useState({
//     transition: 'all 200ms ease-in'
//   })

//   useScrollPosition(
//     ({ prevPos, currPos }) => {
//   // const isVisible = currPos.y > prevPos.y

//   // const shouldBeStyle = isVisible ? {
//   //   backgroundColor: 'transparent',
//   //   transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
//   //   // transform: isVisible ? 'none' : 'translate(0, -100%)'
//   // }
//   //   : {
//   //     backgroundColor: '#fff',
//   //     transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
//   //     // transform: isVisible ? 'none' : 'translate(0, -20%)',
//   //     height: '1rem'
//   //   }

//   // if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return

//   // setHeaderStyle(shouldBeStyle)
// },
//   [headerStyle]
//   )

  return (
    <>
      <IndexNavbar/>
      <IndexHeader/>


     
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
    </>
  );

}
