import React, { Component } from "react";
//Material.ui

import {
  FaQrcode,
  FaChartBar,
  FaHandsHelping
} from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
//Material.ui
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined'; //clock
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import './prettyPhoto.css'
import contente from '../../../assets/images/contente-branco@4x.png'

import './styles.css'
export default class Description extends Component {
  render() {
    return (
      <>
        {/* <div id="services"> */}
          {/* begin call_to_action_white_wrapper */}
          <div className="call_to_action_white_wrapper">
            {/* begin call_to_action_white */}
            <div className="call_to_action_white">
              <h3 className="left_fade">Why choose Simplé?</h3>
              <div className="separator_wrapper bounce_fade">
                <div className="separator_first_circle">
                  <div className="separator_second_circle">
                  </div>
                </div>
              </div>
              <h4 className="right_fade">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration, by injected humour, or new randomised words which don't look believable.</h4>
            </div>
            {/* end call_to_action_white */}
          </div>
          {/* end call_to_action_white_wrapper */}
          {/* begin section_wrapper */}
          <div className="section_wrapper dark_bg">
            {/* begin section_box */}
            <div className="section_box">
              {/* begin row */}
              <div className="row">
                {/* begin twelvecol */}
                <div className="twelvecol">
                  {/* begin fourcol */}
                  <div className="fourcol services_item align_center left_fade">
                    {/* begin zoom_photo */}
                    <div className="zoom_photo">
                      <div className="view view-first">
                        {/* <a href="lib/images/s1.jpg" className="prettyPhoto[gallery2]"> */}
                          <img src="lib/images/s1.jpg" alt="pic" />
                          <span className="mask">
                            <span className="zoom"></span>
                          </span>
                        {/* </a> */}
                      </div>
                    </div>
                    {/* end zoom_photo */}
                    {/* begin services_box */}
                    <div className="services_box">
                      <h3><a href="#">Web Design &amp; Development</a></h3>
                      <p>Consequuntur magni netsum es qui ratione sequi nesciunt. Neque porro quisquat est, quia voluptas quistri ipsum quiaim.</p>
                      <a href="#" className="button_blue">Discover More</a>
                    </div>
                    {/* end services_box */}
                  </div>
                  {/* end fourcol */}
                  {/* begin fourcol */}
                  <div className="fourcol services_item align_center up_fade">
                    {/* begin zoom_photo */}
                    <div className="zoom_photo">
                      <div className="view view-first">
                        {/* <a href="lib/images/s2.jpg" className="prettyPhoto[gallery2]"> */}
                          <img src={contente} alt="pic" />
                          <span className="mask">
                            <span className="zoom"></span>
                          </span>
                        {/* </a> */}
                      </div>
                    </div>
                    {/* end zoom_photo */}
                    {/* begin services_box */}
                    <div className="services_box">
                      <h3><a href="#">Adobe Photoshop / Illustrator</a></h3>
                      <p>Consequuntur magni netsum es qui ratione sequi nesciunt. Neque porro quisquat est, quia voluptas quistri ipsum quiaim.</p>
                      <a href="#" className="button_blue">Discover More</a>
                    </div>
                    {/* end services_box */}

                  </div>
                  {/* end fourcol */}
                  {/* begin fourcol */}
                  <div className="fourcol services_item last align_center right_fade">
                    {/* begin zoom_photo */}
                    <div className="zoom_photo">
                      <div className="view view-first">
                        {/* <a href="lib/images/s3.jpg" className="prettyPhoto[gallery2]"> */}
                          <img src="lib/images/s3.jpg" alt="pic" />
                          <span className="mask">
                            <span className="zoom"></span>
                          </span>
                        {/* </a> */}
                      </div>

                    </div>
                    {/* end zoom_photo */}

                    {/* begin services_box */}
                    <div className="services_box">

                      <h3><a href="#">Search engine optimization</a></h3>

                      <p>Consequuntur magni netsum es qui ratione sequi nesciunt. Neque porro quisquat est, quia voluptas quistri ipsum quiaim.</p>

                      <a href="#" className="button_blue">Discover More</a>

                    </div>
                    {/* end services_box */}

                  </div>
                  {/* end fourcol */}

                </div>
                {/* end twelvecol */}

              </div>
              {/* end row */}

            </div>
            {/* end section_box */}

          </div>
          {/* end section_wrapper */}

        {/* </div> */}
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
