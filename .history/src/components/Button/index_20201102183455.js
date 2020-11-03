import React, { Component } from 'react';
import ButtonFB from './ButtonFB';
import ButtonGG from './ButtonGG';
// import '../../assets/css/login.css'

import './style.css'


export default function LoginSocial(props) {
  const componentFacebookRetailClicked = () => {
    window.open("https://api.couponfeed.com.br/auth/facebook/retail", "_self");
  }
  const componentGoogleRetailClicked = () => {
    window.open("https://api.couponfeed.com.br/auth/google/retail", "_self");
  }
  const componentFacebookClicked = () => {
    window.open("https://api.couponfeed.com.br/auth/facebook", "_self");
  }
  const componentGoogleClicked = () => {
    window.open("https://api.couponfeed.com.br/auth/google", "_self");
  }
  const facebookData =
    (<>
      <ButtonFB
        click={() => { this.componentFacebookClicked() }}
        caption={this.props.title}
      />
      <ButtonGG
        click={() => { this.componentGoogleClicked() }}
        caption={this.props.title}
      />
    </>
    )
  const facebookDataRetail =
    (<>
      <ButtonFB
        click={() => { this.componentFacebookRetailClicked() }}
        caption={this.props.title}
      />
      <ButtonGG
        click={() => { this.componentGoogleRetailClicked() }}
        caption={this.props.title}
      />
    </>
    )
  return (
    <>

    </>
  );
}

export default class LoginSocial extends Component {
  componentFacebookRetailClicked = () => {
    window.open("https://api.couponfeed.com.br/auth/facebook/retail", "_self");
  }
  componentGoogleRetailClicked = () => {
    window.open("https://api.couponfeed.com.br/auth/google/retail", "_self");
  }
  componentFacebookClicked = () => {
    window.open("https://api.couponfeed.com.br/auth/facebook", "_self");
  }
  componentGoogleClicked = () => {
    window.open("https://api.couponfeed.com.br/auth/google", "_self");
  }
  render() {
    const facebookData =
      (<>
        <ButtonFB
          click={() => { this.componentFacebookClicked() }}
          caption={this.props.title}
        />
        <ButtonGG
          click={() => { this.componentGoogleClicked() }}
          caption={this.props.title}
        />
      </>
      )
    const facebookDataRetail =
      (<>
        <ButtonFB
          click={() => { this.componentFacebookRetailClicked() }}
          caption={this.props.title}
        />
        <ButtonGG
          click={() => { this.componentGoogleRetailClicked() }}
          caption={this.props.title}
        />
      </>
      )
    return (
      <div>
        {this.props.retail === true ? facebookDataRetail : facebookData}
      </div>
    )
  }
}
