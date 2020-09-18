import React, { Component } from 'react';
// import FacebookButton from './FacebookButton';
// import '../../assets/css/login.css'

import './style.css'
export default class LoginFacebook extends Component {
  componentFacebookRetailClicked = () => {
    window.open("https://api.couponfeed.co/auth/facebook/retail", "_self");
  }
  componentGoogleRetailClicked = () => {
    window.open("https://api.couponfeed.co/auth/google/retail", "_self");
  }
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
          <li onClick={() => { this.componentFacebookClicked() }} class="fb" >
            <FaFacebook /><div className="button-left">Login com Facebook</div>
          </li>
          <li onClick={() => { this.componentGoogleClicked() }} class="google" >
            <FaGoogle /><div className="button-left">Login com Google</div></li>
        </ul>
      </>
      )
    let facebookDataRetail =
      (<>
        <ul className="no-bullet">
          <li onClick={() => { this.componentFacebookRetailClicked() }} class="fb" >
            <FaFacebook /><div className="button-left">Login com Facebook</div>
          </li>
          <li onClick={() => { this.componentGoogleRetailClicked() }} class="google" >
            <FaGoogle /><div className="button-left">Login com Google</div></li>
        </ul>
      </>
      )
    return (
      <div>
        {this.props.retail === true ? facebookRetailData : facebookData }
      </div>
    )
  }
}
