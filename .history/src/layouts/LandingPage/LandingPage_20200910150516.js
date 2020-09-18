import React, { Component } from "react";
import { Link } from "react-router-dom"


import {
  FaQrcode,
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
import Menu from "../../components/LandingPage/Menu";
import Intro from "../../components/LandingPage/Intro";
import Prices from "../../components/LandingPage/Prices";
import Testemonials from "../../components/LandingPage/Testemonials";
import Footer from "../../components/LandingPage/Footer";
import Button from "../../components/CustomButtons/Button.js";
// import Parallax from "../../components/Parallax/Parallax.js";
import feedback from "./images/feedback.svg";

export default class LandingPage extends Component {
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
render(){
  return (
    <>
      <Menu/>

      <Intro/>

   
      {/* value:2, 
        category:"Diamante",
        type:"Ideal lojistas em expansão",
        fmonth:"feedbacks ilimitados", 
        prices:[
          {monthly:"199"},
          {trimestral:"550"},
          {anual:"2000"} */}


      {/*       

      <div id="pricing" className="cards-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>ESCOLHA SEU PLANO</h2>
              <p className="p-heading p-large">Planos pensados para atender os mais diferentes volumes de vendas mensais. </p>
            </div>
          </div>
          <div 
          >
            <div 
            >
                    {prices.map((p) => (
                      <div className="card">
                        <div className="card-body">
                            <div className="card-title">{p.category}</div>
                            <div className="card-subtitle">{p.type}</div>
                            <hr className="cell-divide-hr" />
                            <ul className="list-unstyled li-space-lg">
                              {p.features.map((feat) => (
                                <li className="media">
                                  {feat.valid ? (<FaCheck />):(<FaTimes/>)}
                                  <div className="media-body">{feat.fmonth}</div>
                              </li>
                              ))
                              }

                            </ul>
                            <hr className="cell-divide-hr" />
                            <div className="price">
                              <span className="currency">R$ </span><span className="value">{p.prices.monthly}</span>
                              <div className="frequency">mensal</div>
                            </div>
                            <hr className="cell-divide-hr" />
                            <div className="price">
                              <span className="currency">R$ </span><span className="value">{(p.prices.trimestral/3).toFixed(2)}</span>
                              <div className="frequency"><p>Assinatura trimestral</p>Total: R$ {p.prices.trimestral} </div>
                            </div>
                            <hr className="cell-divide-hr" />
                            <div className="price">
                              <span className="currency">R$ </span><span className="value">{(p.prices.anual/12).toFixed(2)}</span>
                              <div className="frequency"> <p>Assinatura anual</p>Total: R$ {p.prices.anual}</div>
                            </div>
                            <div className="button-wrapper">
                              <AnchorLink className="btn-solid-reg page-scroll" href="#request">Grátis por 30 dias</AnchorLink >
                            </div>
                          </div>
                      </div>
                ))}
            </div>
          </div>
        </div>
      </div> */}



      <div id="contact" className="form-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Informações de Contato</h2>
              <ul className="list-unstyled li-space-lg">
                <li className="address">Não hesite em nos contactar ou mandar uma mensagem</li>

                <li>Olga <FaWhatsapp className="turquoise" style={{ fontSize: 20 }} /> <AnchorLink className="turquoise"
                  href="https://wa.me/5567992432095">+55 67
                                99243-2095</AnchorLink >
                </li>
                <li>Artur <FaWhatsapp className="turquoise" style={{ fontSize: 20 }} /> <AnchorLink className="turquoise"
                  href="https://wa.me/5567993021141">+55
                  67
                                99302-1141</AnchorLink >
                </li>
                <li><i className="fas fa-envelope"></i><AnchorLink className="turquoise"
                  href="mailto:couponfeedbr@gmail.com">couponfeedbr@gmail.com</AnchorLink ></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer/>


    </>
  );
}
}
