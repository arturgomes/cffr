import React, { Component } from "react";
import "./styles.css";
import PriceFeatures from "./PriceFeatures";

{
  /* <PriceContainer plan="Plano Bronze" recommend={true} price={99} features={<PriceFeatures/>}/> */
}
//
function PriceContainer(props) {
  return (
    <div className="price_container_r">
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
          ) : (props.moreinfo ? (
            <>
              <h4>Sob Consulta</h4>
              <span className="montly hidden">por mês</span>
            </>
          ):(
            <>
              <h4>GRATIS</h4>
              <span className="montly hidden">por mês</span>
            </>
          ))}
        </div>
        <div className="price_button_wrapper">
        {props.moreinfo ? (
            <>
            <a href="/contact" className="price_button pb_green">
            Solicite uma proposta
          </a>
            </>
          ):(
            <>
            <a href={props.url} className="price_button pb_green">
            Assine Já
          </a>
            </>
          )}         
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
      <div id="pricing_ctn">
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
        <div className="pricing_container">
          <div id="pricing" className="cards-2">
            <div className="container">
              <>
                <div className="price_container wrap">
                  <PriceContainer
                    plan="Plano Básico"
                    features={<PriceFeatures nfeedbacks={50} nqr={1} contact={false}/>}
                    url="rsignup/bronze"
                    purpose="Para começar a introduzir a cultura de customer experience na empresa"
                  />s
                  <PriceContainer
                    plan="Plano Intermediário"
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
                    plan="Plano Top"
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
                    plan="Plano Plus"
                    moreinfo
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
