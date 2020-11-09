import React from 'react';
import ButtonFacebook from './ButtonFacebook';
import ButtonGoogle from './ButtonGG';
// import '../../assets/css/login.css'

import './style.css'


export default function LoginSocial(props) {
  const componentFacebookRetailClicked = () => {
    window.open("https://api.couponfeed.com.br/auth/facebook/retail", "_self");
  };
  const componentGoogleRetailClicked = () => {
    window.open("https://api.couponfeed.com.br/auth/google/retail", "_self");
  };
  const componentFacebookClicked = () => {
    window.open("https://api.couponfeed.com.br/auth/facebook", "_self");
  };
  const componentGoogleClicked = () => {
    window.open("https://api.couponfeed.com.br/auth/google", "_self");
  };
  const socialLogin =
    (<>
      <ButtonFacebook
        click={() => { componentFacebookClicked() }}
        caption={props.caption}
      />
      <ButtonGoogle
        click={() => { componentGoogleClicked() }}
        caption={props.caption}
      />
    </>
    );

  const socialLoginRetail =
    (<>
      <ButtonFacebook
        click={() => { componentFacebookRetailClicked() }}
        caption={props.caption}
      />
      <ButtonGoogle
        click={() => { componentGoogleRetailClicked() }}
        caption={props.caption}
      />
    </>
    );

  return (
    <>
      {props.retail === true ? socialLoginRetail : socialLogin}
    </>
  );
}
