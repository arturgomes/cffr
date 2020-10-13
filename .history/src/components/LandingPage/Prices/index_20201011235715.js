import React, { Component } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';
import './styles.css'
import PriceFeatures from './PriceFeatures'

{/* <PriceContainer plan="Plano Bronze" recommend={true} price={99} features={<PriceFeatures/>}/> */}
// 
function PriceContainer(props) {
  return (
    <div>
      <div className="price_block border_top">
        {props.recommend===true ? (<div className="recommend bg_green">Recomendado</div>) : (<div className="recommend "></div>)}

        <div className="price_head ">
          {/* <div className="price_head green_head"> */}
          <h2>{props.plan}</h2>
          {props.price ? (<><h4>{`R$ ${props.price}`}</h4><span className="montly" >por mês</span></>) : (<><h4>GRATIS</h4><span className="montly hidden" >por mês</span></>)}
          
        </div>
        <div className="price_button_wrapper">
          <a href={props.url} className="price_button pb_green">Assine Já</a>
        </div>
        {props.features}
        <div className="price_desc bg_green">{props.purpose}</div>
      </div>

    </div>
  )
}


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
            <h4 className="right_fade">Se você não tiver certeza de qual plano de preços escolher, registre-se para um teste gratuito de 14 dias para ver como os recursos da CouponFeed podem ajudá-lo a ampliar o seu relacionamento com seus clientes, aumentar a retenção e vender ainda mais. Você sempre pode atualizar seu plano para adicionar novos recursos e funcionalidades à sua loja. </h4>
          </div>
          {/* end call_to_action_white */}
        </div>
        {/* end call_to_action_white_wrapper */}
        <div id="pricing" className="cards-2">
          <div className="container">
            <>
              <div className="price_container wrap">
                <PriceContainer plan="Plano Bronze" features={<PriceFeatures nfeedbacks={50} nqr={1} />} url="rsignup/bronze"/>
                <PriceContainer plan="Plano Prata"  price={99} recommend={true} features={<PriceFeatures  nfeedbacks={200} nqr={1} />} url="rsignup/silver"/>
                <PriceContainer plan="Plano Ouro"  price={199} features={<PriceFeatures nfeedbacks={1000} nqr={3} />} url="rsignup/gold"/>
                <PriceContainer plan="Plano Diamante" price={399} features={<PriceFeatures/>} url="rsignup/diamond"/>
               </div>
            </>
          </div>
        </div>
      </div>
    )
  }
}
