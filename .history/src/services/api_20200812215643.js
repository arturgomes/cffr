import axios from 'axios';
import { getToken } from './auth';

// fetch("https://api.couponfeed.co/auth/success", {
//       method: "GET",
//       credentials: "include",
//       // mode: 'no-cors',
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Credentials": true,
//         "Access-Control-Allow-Origin": "https://www.couponfeed.co"
//       }
//     })

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
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;