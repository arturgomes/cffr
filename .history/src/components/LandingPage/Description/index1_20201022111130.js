import React, { Component } from "react";
import "./content.css";
import desc1 from "../../../assets/images/desc1.png";
import desc2 from "../../../assets/images/desc2.png";
import desc3 from "../../../assets/images/desc3.png";

export default class Description extends Component {
  render() {
    return (
      <>
        <div id="services_cont">
          {/* begin call_to_action_white_wrapper */}
          <div className="call_to_action_white_wrapper">
            {/* begin call_to_action_white */}
            <div className="call_to_action_white">
              <h3 className="left_fade">Por que escolher a CouponFeed?</h3>
              <div className="separator_wrapper bounce_fade">
                <div className="separator_first_circle">
                  <div className="separator_second_circle"></div>
                </div>
              </div>
              <h4 className="right_fade">
                Independente do tamanho do seu negócio, a opinião do seu
                consumidor é essencial para avaliar a qualidade do atendimento,
                do serviço prestado, e até mesmo do produto disponível no
                estoque. A CouponFeed te auxilia na tomada de decisões para o
                crescimento do seu negócio.
              </h4>
            </div>
            {/* end call_to_action_white */}
          </div>
          {/* end call_to_action_white_wrapper */}
          {/* begin section_wrapper */}
          <div className="call_to_action_white_wrapper">
            <div className="content_container wrap"></div>
          </div>
        </div>
        {/* end services */}
      </>
    );
  }
}
