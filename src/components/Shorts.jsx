import { useEffect } from "react";
import instance from "../services/instance";
import { useLoaderData } from "react-router-dom";
const handleExternalRedirect = async (code) => {
  code = Number(code);
  try {
    let res = await instance.get(`/auth/shorts/${code}`);
    window.location.href = res.data.longUrl;
  } catch (error) {
    alert(error.res.data.message);
  }
};
const Shorts = () => {
  const code = useLoaderData();
  useEffect(() => {
    handleExternalRedirect(code);
  }, []);
  return <>Redirecting...</>;
};
export default Shorts;
