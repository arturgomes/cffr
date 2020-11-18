import React from 'react';
import { Redirect } from "react-router-dom";

export default function RedirectLogin() {
  const next = getUser() === 'customer' ? "/customer" : "/retail";
  if (getUser() !== null) return <Redirect to={next} />;
  return (
    <>

    </>
  );
}
