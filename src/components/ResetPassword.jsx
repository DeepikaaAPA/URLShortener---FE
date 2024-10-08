import React, { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../services/instance";

const ResetPassword = ({ email }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await instance.put(`/user/resetPassword`, {
        email,
        password,
      });
      setMessage(response.data.message);
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setMessage(error?.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="container d-flex ">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-primary">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>New Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className="m-5 btn btn-primary" type="submit">
            Reset Password
          </button>
        </form>
        {message && <p className="text-info">{message}</p>}
        <p>
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
