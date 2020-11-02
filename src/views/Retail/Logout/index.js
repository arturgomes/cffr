import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";
import api from "../services/api.js"
import * as Cookies from "js-cookie";


const Logout = async ({ history }) => {
  useEffect(
    () => {
      const myfun = async () => {
        await api
          .post("/auth/logout")
          .then(response => {
            // console.log(response.data);
            console.log(response)

          })
          .catch(error => {
            // Error 😨
            if (error.response) {
              /*
               * The request was made and the server responded with a
               * status code that falls out of the range of 2xx
               */
              // console.log(error.response.data);
              this.setState({ err: error.response.data });
            } else if (error.request) {
              /*
               * The request was made but no response was received, `error.request`
               * is an instance of XMLHttpRequest in the browser and an instance
               * of http.ClientRequest in Node.js
               */
              // console.log(error.request);
            } else {
              // Something happened in setting up the request and triggered an Error
            }
          });
      }
      myfun();
      localStorage.removeItem("tk");
      localStorage.removeItem("usr");
      localStorage.removeItem("ui");
      localStorage.removeItem("tu");
      Cookies.remove('session') // will set "cookie_name" to "value"
      Cookies.remove('session.sig') // will set "cookie_name" to "value"
      history.push("/login");
    },
    [history]
  );

  return <Redirect to="/" push={true} />;
};

export default Logout;