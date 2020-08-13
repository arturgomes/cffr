import axios from 'axios';
import { getToken } from './auth';


const api = axios.create({
  baseURL: 'https://api.couponfeed.co',
  withCredentials: true,
});

api.defaults.headers.common['Accept'] = 'application/json' ;
api.defaults.headers.common['Content-Type'] = 'application/json' ;
api.defaults.headers.common['Access-Control-Allow-Credentials'] = true ;
api.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://www.couponfeed.co' ;

api.interceptors.request.use(async config => {
  const token = getToken();
  config.headers.common['Accept'] = 'application/json' ;
  config.headers.common['Content-Type'] = 'application/json' ;
  config.headers.common['Access-Control-Allow-Credentials'] = true ;
  config.headers.common['Access-Control-Allow-Origin'] = 'https://www.couponfeed.co' ;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
// export default api;
const apiDELETE = {
  method: "DELETE",
  credentials: "include",
  // mode: 'no-cors',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "https://www.couponfeed.co"
  }
}
const apiPUT = {
  method: "PUT",
  credentials: "include",
  // mode: 'no-cors',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "https://www.couponfeed.co"
  }
}
const apiPOST = {
  method: "POST",
  credentials: "include",
  // mode: 'no-cors',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "https://www.couponfeed.co"
  }
}
const apiGET = {
  method: "GET",
  credentials: "include",
  // mode: 'no-cors',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "https://www.couponfeed.co"
  }
}

module.exports = {api, apiGET, apiPOST, apiDELETE, apiPUT};