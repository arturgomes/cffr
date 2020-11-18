import React from 'react';
import { Redirect } from "react-router-dom";

export default function RedirectLogin({ user }) {
  const next = user === 'customer' ? "/customer" : "/retail";
  if (user !== null) return <Redirect to={next} />;
  return (
    <>

    </>
  );
}
