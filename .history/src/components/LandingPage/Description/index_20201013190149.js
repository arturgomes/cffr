import React, { Component } from "react";
import './content.css'
import desc1 from '../../../assets/images/desc1.png'
import desc2 from '../../../assets/images/desc2.png'
import desc3 from '../../../assets/images/desc3.png'

export default class Description extends Component {
  render() {
    return (
      <>
        <div className="services_cont">
          {/* begin call_to_action_white_wrapper */}
          <div className="call_to_action_white_wrapper">
            {/* begin call_to_action_white */}
            <div className="call_to_action_white">
              <h3 className="left_fade">Por que escolher a CouponFeed?</h3>
              <div className="separator_wrapper bounce_fade">
                <div className="separator_first_circle">
                  <div className="separator_second_circle">
                  </div>
                </div>
              </div>
              <h4 className="right_fade">Independente do tamanho do seu negócio, a opinião do seu consumidor é essencial para avaliar a qualidade do atendimento, do serviço prestado, e até mesmo do produto disponível no estoque. A CouponFeed te auxilia na tomada de decisões para o crescimento do seu negócio.</h4>
            </div>
            {/* end call_to_action_white */}
          </div>
          {/* end call_to_action_white_wrapper */}
          {/* begin section_wrapper */}
        <div className="call_to_action_white_wrapper">

          <div className="content_container wrap">
            <div className="threecol3 ">
              <img src={desc1} alt="pic" />
              <div className="services_box">
                <h3>Sem Totens ou Tablets!</h3>
                <p>Na CouponFeed, você não precisa se preocupar com a aquisição e manutenção de tablets ou totens. Através de um <span>QR code</span>, o cliente dará o feedback diretamente de seu smartphone ainda dentro do estabelecimento.</p>
              </div>
            </div>
            <div className="threecol3">
              <img src={desc2} alt="pic" />
              <div className="services_box">
                <h3>Respostas instantâneas</h3>
                <p>Feedbacks e relatórios de avaliação em <span>tempo real</span> sobre as pequisas de satisfação da experiência dos seus clientes</p>
              </div>
            </div>
            <div className="threecol3 last3">
              <img src={desc3} alt="pic" />
              <div className="services_box">
                <h3>NPS e Fechamento de Loop</h3>
                <p>Com a CouponFeed, você tem a possibilidade de responder a reclamações, perguntas ou sugestões dadas pelos seus clientes através do formulário preenchido por eles. Essa é a oportunidade de encantar seus clientes com um contato mostrando o quanto a opinião dele é importante para o seu negócio. </p>
                {/* <a href="#" className="button_blue">Discover More</a> */}
              </div>
            </div>
          </div>

          </div>

        </div>
        {/* end services */}
        {/* <div id="services" className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Solução ideal para seu negócio</h2>
              <p className="p-heading p-large">Independente do tamanho do seu negócio, a opinião do seu consumidor é essencial para avaliar a qualidade do atendimento, do serviço prestado, e até mesmo do produto disponível no estoque. A CouponFeed te auxilia na tomada de decisões para o crescimento do seu negócio.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <QueryBuilderOutlinedIcon style={{ fontSize: 120, paddingBottom: 20, alignContent: 'center', justifyContent: 'center' }} />
                <h4 className="card-title">Obtenha feedbacks 24/7</h4>
                <p>Obtenha feedbacks dos clientes a qualquer hora, enqunato que seu estabelecimento estiver aberto.</p>
              </div>
              <div className="card">
                <TransferWithinAStationIcon style={{ fontSize: 120, paddingBottom: 20 }} />
                <div className="card-body">
                  <h4 className="card-title">Feedback da experiência do cliente</h4>
                  <p>Ao usar o CouponFeed, o seu cliente irá fornecer um feedback de sua experiência antes de deixar seu estabelecimento.</p>
                </div>
              </div>
              <div className="card">
                <FaQrcode style={{ fontSize: 120, paddingBottom: 20 }} />
                <div className="card-body">
                  <h4 className="card-title">QR Code ao invés de totens</h4>
                  <p>Sem totens ou botões! Seu cliente irá dar seu feedback direto de seu celular, ainda dentro da loja</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <TiDocumentText style={{ fontSize: 120, paddingBottom: 20 }} />
                <div className="card-body">
                  <h4 className="card-title">Relatórios</h4>
                  <p>Os feebacks estarão disponíveis imediatamente no seu perfil CouponFeed</p>
                </div>
              </div>
              <div className="card">
                <FaChartBar style={{ fontSize: 120, paddingBottom: 20 }} />
                <div className="card-body">
                  <h4 className="card-title">Estatísticas</h4>
                  <p>Seu perfil conta com estatísticas e gráficos sobre os feedbacks, para um rápido monitoramento. Auxilia na tomada de decisão para a melhoria na prestação de serviço.</p>
                </div>
              </div>
              <div className="card">
                <FaHandsHelping style={{ fontSize: 120, paddingBottom: 20 }} />
                <div className="card-body">
                  <h4 className="card-title">Fidelidade</h4>
                  <p>Faça campanhas de fidelização de seus clientes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>*/}
      </>
    );
  }
}
