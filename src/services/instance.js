import axios from "axios";
import { baseURL } from "../config/config";
const token = localStorage.getItem("token") || "";
console.log(token);
// define the axios instance
const instance = axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  // withCredentials: true,
});
export default instance;
