import React from 'react';
import { Redirect } from "react-router-dom";
import { getUser } from '../../services/auth'

export default function RedirectLogin() {
  const next = getUser() === 'customer' ? "/customer" : "/retail";
  if (getUser() !== null) return <Redirect to={next} />;
  return (
    <>

    </>
  );
}
