import React, { Component } from 'react';
// import FacebookButton from './FacebookButton';
// import '../../assets/css/login.css'
import {
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";
import './style.css'
export default class LoginFacebook extends Component {

  componentFacebookClicked = () => {
    window.open("https://api.couponfeed.co/auth/facebook", "_self");
  }
  componentGoogleClicked = () => {
    window.open("https://api.couponfeed.co/auth/google", "_self");
  }
  render() {
    let facebookData =
      (<>

        <ul className="no-bullet">
          {/* <FacebookLoginButton/> */}
          <li onClick={() => { this.componentFacebookClicked() }} class="fb" >
            <FaFacebook /><div className="button-left">Login com Facebook</div>
          </li>
          <li onClick={() => { this.componentGoogleClicked() }} class="google" >
            <FaGoogle /><div className="button-left">Login com Google</div></li>
        </ul>
      </>
      )
    return (
      <div>
        {facebookData}
      </div>
    )
  }
}
