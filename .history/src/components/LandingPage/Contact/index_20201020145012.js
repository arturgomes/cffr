import React, { Component } from "react";
//Material.ui
import MailchimpSubscribe from "react-mailchimp-subscribe";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/css/fontawesome-all.css";
import "../../../assets/css/fontawesome.css";
import "../../../assets/css/swiper.css";
import "../../../assets/css/magnific-popup.css";
import "../../../assets/css/styles.css";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div id="contact" className="form-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Inscreva-se para ficar por dentro das nossas novidades</h2>
                <MailchimpSubscribe url="https://couponfeed.us18.list-manage.com/subscribe/post?u=0b2a962ce3335ba1337997015&amp;id=617a7720ad" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
