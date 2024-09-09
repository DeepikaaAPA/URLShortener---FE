import axios from "axios";
const baseURL = "http://localhost:3000/api/v1";
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
