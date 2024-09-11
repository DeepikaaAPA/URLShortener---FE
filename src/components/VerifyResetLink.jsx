import { useLoaderData } from "react-router-dom";
import emailServices from "../services/emailServices";
import ResetPassword from "./ResetPassword";
import { useState } from "react";
function VerifyResetLink() {
  const [email, setEmail] = useState("");
  const token = useLoaderData();
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };
  const handleSend = () => {
    setMessage("");
    emailServices
      .verifyReset(token, email)
      .then((response) => {
        if (response.data.status === "valid") {
          setShowForm(true);
        } else {
          setShowForm(false);
          setMessage(response.data.message);
        }
      })
      .catch((err) => {
        setShowForm(false);
        setMessage(err.response.data.message);
      });
  };
  return (
    <>
      <div
        className="container  d-flex flex-column align-items-center vh-100"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="row mt-5 p-3">
          <label>Enter email id :</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
          <br></br>

          <button className="my-2 btn btn-primary" onClick={handleSend}>
            Verify code
          </button>
          <br></br>
          <p className="text-danger">{message}</p>
        </div>
        <div className="row">
          {showForm ? <ResetPassword email={email} /> : null}
        </div>
      </div>
    </>
  );
}
export default VerifyResetLink;
