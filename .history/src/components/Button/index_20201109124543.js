import React from 'react';
import ButtonFacebook from './ButtonFacebook';
import ButtonGoogle from './ButtonGoogle';
// import '../../assets/css/login.css'

import './style.css'


export default function LoginSocial(props) {
  const componentFacebookRetailClicked = () => {
    window.open("https://api.couponfeed.com.br/auth/facebook/retail", "_self");
  };
  const componentGoogleRetailClicked = () => {
    window.open("https://api.couponfeed.com.br/auth/google/retail", "_self");
  };
  const componentFacebookClicked = (fid) => {
    if (fid) {
      window.open(`https://api.couponfeed.com.br/auth/facebook/${fid}`, "_self");

    }
    window.open("https://api.couponfeed.com.br/auth/facebook", "_self");
  };
  const componentGoogleClicked = (fid) => {
    if (fid) {
      window.open(`https://api.couponfeed.com.br/auth/google/${fid}`, "_self");
    }
    else {
      window.open("https://api.couponfeed.com.br/auth/google", "_self");
    }
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
