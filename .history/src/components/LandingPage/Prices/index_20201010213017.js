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
        <div id="pricing" classNameName="cards-2">
          <div classNameName="container">
            <div classNameName="row">
              <div classNameName="col-lg-12">
                <h2>ESCOLHA SEU PLANO</h2>
                <p classNameName="p-heading p-large">Planos pensados para atender os mais diferentes volumes de vendas mensais. </p>
              </div>
            </div>
            <div
            >
              <>
                
              </>
              {this.state.prices.map((p) => (
                <div classNameName="card" key={p}>
                  <div classNameName="card-body">
                    <div classNameName="card-title">{p.category}
                      <div >{p.type}</div>
                    </div>

                    <hr classNameName="cell-divide-hr" />
                    <ul classNameName="list-unstyled li-space-lg">
                      {p.features.map((feat) => (
                        <li classNameName="media">
                          {feat.valid ? (<AiFillCheckCircle />) : (<FaTimesCircle />)}
                          <div classNameName="media-body">{feat.fmonth}</div>
                        </li>
                      ))
                      }

                    </ul>
                    <hr classNameName="cell-divide-hr" />
                    <div classNameName="price">
                      <span classNameName="currency">R$ </span>
                      <span classNameName="value">{p.prices.monthly}</span>
                      <div classNameName="frequency">mensal</div>
                    </div>
                    <hr classNameName="cell-divide-hr" />
                    <div classNameName="price">
                      <span classNameName="currency">R$ </span>
                      <span classNameName="value">{(p.prices.trimestral / 3).toFixed(2)}</span>
                      <div classNameName="frequency">
                        <p>Assinatura trimestral</p>Total: R$ {p.prices.trimestral} </div>
                    </div>
                    <hr classNameName="cell-divide-hr" />
                    <div classNameName="price">
                      <span classNameName="currency">R$ </span>
                      <span classNameName="value">{(p.prices.anual / 12).toFixed(2)}</span>
                      <div classNameName="frequency"> <p>Assinatura anual</p>Total: R$ {p.prices.anual}</div>
                    </div>
                    <div classNameName="button-wrapper">
                      {/* <AnchorLink classNameName="btn-solid-reg page-scroll" href="#request">Grátis por 30 dias</AnchorLink > */}
                    </div>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
