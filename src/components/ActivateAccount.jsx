import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import instance from "../services/instance";
function ActivateAccount() {
  const token = useLoaderData();
  const [message, setMessage] = useState("Activating...");
  useEffect(() => {
    instance
      .get(`/auth/activate/${token}`)
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) =>
        setMessage(error?.response?.data?.message || "Network error")
      );
  }, []);
  return <>{message}</>;
}

export default ActivateAccount;
