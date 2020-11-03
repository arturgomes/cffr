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
        click={() => { componentFacebookClicked() }}
        caption={props.title}
      />
      <ButtonGG
        click={() => { componentGoogleClicked() }}
        caption={props.title}
      />
    </>
    )
  const facebookDataRetail =
    (<>
      <ButtonFB
        click={() => { componentFacebookRetailClicked() }}
        caption={props.title}
      />
      <ButtonGG
        click={() => { componentGoogleRetailClicked() }}
        caption={props.title}
      />
    </>
    )
  return (
    <>
      {this.props.retail === true ? facebookDataRetail : facebookData}
    </>
  );
}
