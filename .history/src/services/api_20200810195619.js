import axios from 'axios';
import { getToken } from "./auth";


const api = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://api.couponfeed.co',
  // baseURL: 'https://api.couponfeed.co/proxy',
  withCredentials: true,
  // crossorigin:true
  // mode: 'no-cors',
  headers: {
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "http://www.couponfeed.co",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
  
  // baseURL: 'https://cors-anywhere.herokuapp.com/https://api.couponfeed.co',
});


api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;