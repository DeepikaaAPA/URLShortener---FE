import { useState } from "react";
import { Link } from "react-router-dom";
import emailServices from "../services/emailServices";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const [message, setMessage] = useState("");
  const handleForgotPassword = () => {
    setEmail("");
    setMessage("");
    emailServices
      .getResetLink({ email })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div
          className="card p-4 shadow-lg"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <br></br>
          <div>
            Forgot your password? Enter you email-id and click forgot password
            button below:
          </div>
          <input
            className="my-3 "
            style={{ maxWidth: "400px", width: "100%" }}
            placeholder="Enter e-mail id"
            type="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
          <br></br>
          <button
            className="mx-5 btn btn-primary"
            onClick={handleForgotPassword}
          >
            Forgot Password
          </button>
          <p className="text-primary p-3">{message}</p>
          <div className=" text-center ">
            <Link to="/">Login</Link>
          </div>
          <div className="text-center mt-3 ">
            <a className="btn btn-success" href="/register">
              Register a new account
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default ForgotPassword;
