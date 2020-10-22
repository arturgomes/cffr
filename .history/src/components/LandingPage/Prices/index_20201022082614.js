import React, { Component } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaTimesCircle } from "react-icons/fa";
import "./styles.css";
import PriceFeatures from "./PriceFeatures";

{
  /* <PriceContainer plan="Plano Bronze" recommend={true} price={99} features={<PriceFeatures/>}/> */
}
//
function PriceContainer(props) {
  return (
    <div>
      <div className="price_block border_top">
        {props.recommend === true ? (
          <div className="recommend bg_green">Recomendado</div>
        ) : (
          <div className="recommend "></div>
        )}

        <div className="price_head ">
          {/* <div className="price_head green_head"> */}
          <h2>{props.plan}</h2>
          {props.price ? (
            <>
              <h4>{`R$ ${props.price}`}</h4>
              <span className="montly">por mês</span>
            </>
          ) : (
            <>
              <h4>GRATIS</h4>
              <span className="montly hidden">por mês</span>
            </>
          )}
        </div>
        <div className="price_button_wrapper">
          <a href={props.url} className="price_button pb_green">
            Assine Já
          </a>
        </div>
        {props.features}
        <div className="price_desc bg_abnb">{props.purpose}</div>
      </div>
    </div>
  );
}

export default class Prices extends Component {
  render() {
    return (
      <div >
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
                <div className="separator_second_circle"></div>
              </div>
            </div>
            <h4 className="right_fade">
              Se você não tiver certeza de qual plano de preços escolher,
              registre-se para um teste gratuito de 14 dias para ver como os
              recursos da CouponFeed podem ajudá-lo a ampliar o seu
              relacionamento com seus clientes, aumentar a retenção e vender
              ainda mais. Você sempre pode atualizar seu plano para adicionar
              novos recursos e funcionalidades à sua loja.{" "}
            </h4>
          </div>
          {/* end call_to_action_white */}
        </div>
        {/* end call_to_action_white_wrapper */}
          <div id="pricing" className="cards-2">
            <div className="container">
              <>
                <div className="price_container wrap">
                  <PriceContainer
                    plan="Plano Bronze"
                    features={<PriceFeatures nfeedbacks={50} nqr={1} />}
                    url="rsignup/bronze"
                    purpose="Para começar a introduzir a cultura de customer experience na empresa"
                  />
                  <PriceContainer
                    plan="Plano Prata"
                    price={99}
                    recommend={true}
                    features={
                      <PriceFeatures
                        nfeedbacks={200}
                        nqr={1}
                        dashboard={true}
                      />
                    }
                    url="rsignup/silver"
                    purpose="Para lojas únicas ou franquias poderem aumentar a retenção dos clientes"
                  />
                  <PriceContainer
                    plan="Plano Ouro"
                    price={249}
                    features={
                      <PriceFeatures
                        nfeedbacks={1000}
                        nqr={3}
                        dashboard={true}
                      />
                    }
                    url="rsignup/gold"
                    purpose="Para estabelecimentos com filiais próximas, permitindo avaliar a opinião dos clientes em cada um dos estabelecimentos."
                  />
                  <PriceContainer
                    plan="Plano Diamante"
                    price={399}
                    features={<PriceFeatures dashboard={true} pers={true} />}
                    url="rsignup/diamond"
                    purpose="Para Shoppings, Lojas ou Supermercados que desejam avaliar diferentes aspectos do negócio."
                  />
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
