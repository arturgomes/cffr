import React, { Component } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';
import './styles.css'

export default class Prices extends Component {
  state = {
    prices: [
      {
        value: 0,
        category: "Prata",
        type: "Ideal para MEI",
        features: [
          { valid: false, fmonth: "60 feedbacks por mês" },
          { valid: true, fmonth: "Relatório 60 feedbacks por mês" },
          { valid: true, fmonth: "Registro de um QR code" },
          { valid: false, fmonth: "Acesso a um dashboard personalizado" },
          { valid: false, fmonth: "Relatórios por e-mail" },
        ],
        prices: {
          monthly: "34.90",
          trimestral: "89.70",
          anual: "298.80"
        }
      },
      {
        value: 1,
        category: "Ouro",
        type: "Ideal quem está começando",

        features: [
          { valid: false, fmonth: "60 feedbacks por mês" },
          { valid: true, fmonth: "Relatório 60 feedbacks por mês" },
          { valid: true, fmonth: "Registro de um QR code" },
          { valid: false, fmonth: "Acesso a um dashboard personalizado" },
          { valid: false, fmonth: "Relatórios por e-mail" },
        ],
        prices: {
          monthly: "99",
          trimestral: "270",
          anual: "1020"
        }

      },
      {
        value: 2,
        category: "Diamante",
        type: "Ideal quem está em expansão",

        features: [
          { valid: true, fmonth: "Feedbacks ilimitados" },
          { valid: true, fmonth: "Relatório 60 feedbacks por mês" },
          { valid: true, fmonth: "Registro de um QR code" },
          { valid: true, fmonth: "Acesso a um dashboard personalizado" },
          { valid: true, fmonth: "Relatórios por e-mail" },
        ],
        prices: {
          monthly: "199",
          trimestral: "540",
          anual: "1980"
        }
      },
      {
        value: 3,
        category: "Platinum",
        type: "Ideal quem tem filiais",

        features: [
          { valid: true, fmonth: "Feedbacks ilimitados" },
          { valid: true, fmonth: "Relatório ilimitados" },
          { valid: true, fmonth: "Registro de cinco QR codes" },
          { valid: true, fmonth: "Acesso a um dashboard personalizado" },
          { valid: true, fmonth: "Relatórios por e-mail" },
        ],
        prices: {
          monthly: "359",
          trimestral: "897",
          anual: "3180"
        }
      },
    ]
  }

  render() {
    const prices = this.state;
    return (
      <div>
        {/* value:2, 
        category:"Diamante",
        type:"Ideal lojistas em expansão",
        fmonth:"feedbacks ilimitados", 
        prices:[
          {monthly:"199"},
          {trimestral:"550"},
          {anual:"2000"} */}
          <div className="call_to_action_white_wrapper">
            {/* begin call_to_action_white */}
            <div className="call_to_action_white">
              <h3 className="left_fade">Escolha seu plano</h3>
              <div className="separator_wrapper bounce_fade">
                <div className="separator_first_circle">
                  <div className="separator_second_circle">
                  </div>
                </div>
              </div>
              {/* <h4 className="right_fade">Planos pensados para atender os mais diferentes volumes de vendas mensais. </h4> */}
              <h4 className="right_fade">Se você não tiver certeza de qual plano de preços escolher, registre-se para um teste gratuito de 14 dias para ver como os recursos da CouponFeed podem ajudá-lo a ampliar o seu relacionamento com seus clientes, aumentar a retenção e vender ainda mais. Você sempre pode atualizar seu plano para adicionar novos recursos e funcionalidades à sua loja. </h4>
            </div>
            {/* end call_to_action_white */}
          </div>
          {/* end call_to_action_white_wrapper */}
        <div id="pricing" className="cards-2">
          <div className="container">
            <div
            >
              <>
                <div className="row">
                  <div className="threecol price_item left_fade animated fadeInLeft">
                    <div className="price_head green_head">
                      <h2>Plano Bronze</h2>
                      <h4>GRATIS
                      </h4>
                      <span className="montly"></span>
                    </div>
                    <ul className="price_features">
                      <li className="first">
                        <span className="left">
                          <span className="bold">Unlimited</span> Acces</span>
                        <span className="right">
<AiFillCheckCircle />                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <span className="bold">Montly</span> Documents</span>
                        <span className="right">
                          <i className="icon icon-remove red">
                          </i>
                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <span className="bold">Unlimited</span> Domains</span>
                        <span className="right">
<AiFillCheckCircle />                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <span className="bold">Custom</span> Hosting</span>
                        <span className="right">
                          <i className="icon icon-remove red">
                          </i>
                        </span>
                      </li>
                      <li className="last">
                        <span className="left">
                          <span className="bold">24/7</span> Support</span>
                        <span className="right">
<AiFillCheckCircle />                        </span>
                      </li>
                    </ul>
                    <div className="price_button_wrapper">
                      <a href="#" className="price_button pb_green">Subscribe today</a>
                    </div>

                  </div>
                  <div className="threecol price_item up_fade animated fadeInUp">
                    <div className="price_head blue_head">
                      <h2>Standard Pack</h2>
                      <h4>$ 29,<small>99</small>
                      </h4>
                      <span className="montly">montly</span>
                    </div>
                    <ul className="price_features">
                      <li className="first">
                        <span className="left">
                          <span className="bold">Unlimited</span> Acces</span>
                        <span className="right">
<AiFillCheckCircle />                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <span className="bold">Montly</span> Documents</span>
                        <span className="right">
                          <i className="icon icon-remove red">
                          </i>
                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <span className="bold">Unlimited</span> Domains</span>
                        <span className="right">
<AiFillCheckCircle />                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <span className="bold">Custom</span> Hosting</span>
                        <span className="right">
                          <i className="icon icon-remove red">
                          </i>
                        </span>
                      </li>
                      <li className="last">
                        <span className="left">
                          <span className="bold">24/7</span> Support</span>
                        <span className="right">
<AiFillCheckCircle />                        </span>
                      </li>
                    </ul>
                    <div className="price_button_wrapper">
                      <a href="#" className="price_button pb_blue">Subscribe today</a>
                    </div>

                  </div>
                  <div className="threecol price_item right_fade animated fadeInRight">

                    <div className="price_head red_head">
                      <h2>Premium Pack</h2>
                      <h4>$ 39,<small>99</small>
                      </h4>
                      <span className="montly">montly</span>
                    </div>
                    <ul className="price_features">
                      <li className="first">
                        <span className="left">
                          <span className="bold">Unlimited</span> Acces</span>
                        <span className="right">
<AiFillCheckCircle />                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <span className="bold">Montly</span> Documents</span>
                        <span className="right">
                          <i className="icon icon-remove red">
                          </i>
                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <span className="bold">Unlimited</span> Domains</span>
                        <span className="right">
<AiFillCheckCircle />                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <span className="bold">Custom</span> Hosting</span>
                        <span className="right">
                          <i className="icon icon-remove red">
                          </i>
                        </span>
                      </li>
                      <li className="last">
                        <span className="left">
                          <span className="bold">24/7</span> Support</span>
                        <span className="right">
<AiFillCheckCircle />                        </span>
                      </li>
                    </ul>
                    <div className="price_button_wrapper">
                      <a href="#" className="price_button pb_red">Subscribe today</a>
                    </div>
                  </div>
                  <div className="threecol last price_item right_fade animated fadeInRight">

                    <div className="price_head red_head">
                      <h2>Premium Pack</h2>
                      <h4>$ 39,<small>99</small>
                      </h4>
                      <span className="montly">montly</span>
                    </div>
                    <ul className="price_features">
                      <li className="first">
                        <span className="left">
                          <span className="bold">Unlimited</span> Acces</span>
                        <span className="right">
<AiFillCheckCircle />                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <span className="bold">Montly</span> Documents</span>
                        <span className="right">
                          <i className="icon icon-remove red">
                          </i>
                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <span className="bold">Unlimited</span> Domains</span>
                        <span className="right">
                        <AiFillCheckCircle />                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <span className="bold">Custom</span> Hosting</span>
                        <span className="right">
                          <i className="icon icon-remove red">
                          </i>
                        </span>
                      </li>
                      <li className="last">
                        <span className="left">
                          <span className="bold">24/7</span> Support</span>
                        <span className="right">
                        <AiFillCheckCircle />                        </span>
                      </li>
                    </ul>
                    <div className="price_button_wrapper">
                      <a href="#" className="price_button pb_red">Subscribe today</a>
                    </div>
                  </div>


                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
