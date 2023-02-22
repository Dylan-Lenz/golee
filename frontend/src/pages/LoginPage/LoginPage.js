import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="container">
      <h1 className="lg_hdr">LOGIN</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="lg_lb_user">
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        {isServerError ? (
          <p className="error">Login failed, incorrect credentials!</p>
        ) : null}
        <div className="lg_b">
          <button onClick={() => navigate("/register")}>Register</button>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
