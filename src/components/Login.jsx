import React, { useState, useEffect } from "react";

import instance from "../services/instance";
import { useNavigate, useLoaderData } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const user = useLoaderData();

  useEffect(() => {
    if (user) {
      navigate("/shorten");
    }
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Make API POST request with login details
    await instance
      .post("/auth/login", { email, password })

      .then((res) => {
        console.log(" ✔️ ", res.data);
        alert("Logged in ✔️");
        navigate("/shorten");
      })
      .catch((error) => {
        console.error(" ❗ Error:", error);
        alert(" ❗" + error.message);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center text-success mb-4">URL Shortener</h2>
        <form className="text-center" onSubmit={handleLogin}>
          <div className="form-group  text-start">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
          </div>
          <div className="form-group text-start">
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-3">
            Login
          </button>
          <div className="text-center mt-3">
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <div className="text-center mt-3 ">
            <a className="btn btn-success" href="/register">
              Register a new account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
