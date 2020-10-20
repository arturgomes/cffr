import React, { Component } from "react";
//Material.ui
import Mailchimp from "react-mailchimp-form";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../../assets/css/fontawesome-all.css";
// import "../../../assets/css/fontawesome.css";
// import "../../../assets/css/swiper.css";
// import "../../../assets/css/magnific-popup.css";
import "../../../assets/css/styles.css";
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div id="contact" className="form-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2>Inscreva-se para ficar por dentro das nossas novidades</h2>

                <Mailchimp
                  action="https://couponfeed.us18.list-manage.com/subscribe/post?u=0b2a962ce3335ba1337997015&amp;id=617a7720ad"
                  //Adding multiple fields:
                  fields={[
                    {
                      name: "EMAIL",
                      placeholder: "Seu melhor email",
                      type: "email",
                      required: true,
                    },
                    {
                      name: "FNAME",
                      placeholder: "Seu nome",
                      type: "text",
                      required: true,
                    },
                  ]}
                  // Change predetermined language
                  messages={{
                    sending: "Enviando...",
                    success: "Obrigado por se inscrever!",
                    error: "Oops... Um erro interno inesperado ocorreu!",
                    empty: "Você deve digitar um email.",
                    duplicate: "Várias tentativas foram feitas para este email",
                    button: "Embarque conosco!",
                  }}
                  // Add a personalized class
                  className="contact-form"
                />
                {/* <MailchimpSubscribe url="https://couponfeed.us18.list-manage.com/subscribe/post?u=0b2a962ce3335ba1337997015&amp;id=617a7720ad" /> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
