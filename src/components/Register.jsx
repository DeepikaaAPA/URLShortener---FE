import React, { useState } from "react";

import { Link } from "react-router-dom";
import instance from "../services/instance";
const Register = () => {
  const [firstname, setFisrtname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/auth/register", {
        firstname,
        lastname,
        email,
        password,
      });
      setMessage("✔️ You have successfully registered." + response.data.message);
    } catch (error) {
      setMessage(" ❗" + error.response.data.message);
    }
  };

  return (
    <div className=" container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 text-center shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-success mb-4">URL Shortener </h2>
        <h4 className="fw-bold m-2">Register here</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFisrtname(e.target.value)}
              placeholder="Last name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="E-mail address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <div className="m-3">
            {" "}
            <Link to="/">Already have an account? Login here.</Link>
          </div>
        </form>
        {message && <p className="mt-3 text-info">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
