import axios from "axios";
import { baseURL } from "../config/config";
// const token = localStorage.getItem("token") || "";
// console.log("token :", token);
// define the axios instance
const instance = axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
