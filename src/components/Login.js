import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

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
      <Container>
      <div>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit} className="form-inline">
          <div>
            <label htmlFor="username">Username:</label>
            <input onChange={handleChange} name="username" id="username" className="form-control mt-2" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              id="password"
              className="form-control mt-2"
            />
          </div>
          <button className="mt-2 btn btn-primary" id="submit">Submit</button>
        </Form>
        {/* {error && <p id="error"> {error}</p>} */}
      </div>
      </Container>
    </div>
  );
};

export default Login;
