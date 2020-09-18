import React, { Component } from 'react';
import ButtonFB from './ButtonFB';
import ButtonGG from './ButtonGG';
// import '../../assets/css/login.css'
import {
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";
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
          <ButtonFB 
            icon={<FaFacebook/>}
            // color="#3B5998"
            click={() => { this.componentFacebookClicked() }}
            caption={this.props.title}
          />
          <li onClick={() => { this.componentFacebookClicked() }} class="fb" >
            <FaFacebook /><div className="button-left">{this.props.title} Facebook</div>
          </li>
          <li onClick={() => { this.componentGoogleClicked() }} class="google" >
            <FaGoogle /><div className="button-left">{this.props.title} Google</div></li>
        </ul>
      </>
      )
    let facebookDataRetail =
      (<>
      
        <ul className="no-bullet">
        <ButtonAction 
            icon={<FaFacebook/>}
            click={() => { this.componentFacebookClicked() }}
            caption={this.props.title}
          />
          <li onClick={() => { this.componentFacebookRetailClicked() }} class="fb" >
            <FaFacebook /><div className="button-left">{this.props.title} Facebook</div>
          </li>
          <li onClick={() => { this.componentGoogleRetailClicked() }} class="google" >
            <FaGoogle /><div className="button-left">{this.props.title} Google</div></li>
        </ul>
      </>
      )
    return (
      <div>
        {this.props.retail === true ? facebookDataRetail : facebookData }
      </div>
    )
  }
}
