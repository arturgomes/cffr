import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  // baseURL: "https://localhost:3333",
  // baseURL: "https://api.couponfeed.com.br",
  withCredentials: true,
});

// portanto, tentei colocar aqui. Também não deu certo
api.defaults.headers.common["Accept"] = "application/json";
api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Access-Control-Allow-Credentials"] = true;
api.defaults.headers.common["Access-Control-Allow-Origin"] =
  "https://www.couponfeed.com.br";

api.interceptors.request.use(async (config) => {
  const token = getToken();

  //então tentei colocar aqui e também não deu certo.
  config.headers.common["Accept"] = "application/json";
  config.headers.common["Content-Type"] = "application/json";
  config.headers.common["Access-Control-Allow-Credentials"] = true;
  config.headers.common["Access-Control-Allow-Origin"] =
    "https://www.couponfeed.com.br";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
