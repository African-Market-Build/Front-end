import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCred({
      ...cred,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://africas-market-place.herokuapp.com/api/auth/login", cred)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("token", resp.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input onChange={handleChange} name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              id="password"
            />
          </div>
          <button id="submit">Submit</button>
        </form>
        {/* {error && <p id="error"> {error}</p>} */}
      </div>
    </div>
  );
};

export default Login;
