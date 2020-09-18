import React, { Component } from 'react';
import ButtonFB from './ButtonFB';
import ButtonGG from './ButtonGG';
// import '../../assets/css/login.css'

import './style.css'
export default class LoginSocial extends Component {
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
        {/* <ul className="no-bullet"> */}
        <ButtonFB 
            click={() => { this.componentFacebookClicked() }}
            caption={this.props.title}
          /><ButtonGG
          click={() => { this.componentGoogleClicked() }}
          caption={this.props.title}
        />
          
          
        {/* </ul> */}
      </>
      )
    let facebookDataRetail =
      (<>
      
        {/* <ul className="no-bullet"> */}
        <ButtonFB 
            click={() => { this.componentFacebookRetailClicked() }}
            caption={this.props.title}
          /><ButtonGG
          click={() => { this.componentGoogleRetailClicked() }}
          caption={this.props.title}
        />
        
        {/* </ul> */}
      </>
      )
    return (
      <div>
        {this.props.retail === true ? facebookDataRetail : facebookData }
      </div>
    )
  }
}
