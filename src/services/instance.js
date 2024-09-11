import axios from "axios";
const baseURL = "https://urlshortener-be.onrender.com/api/v1";
// define the axios instance
const instance = axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export default instance;
