import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

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
              <input
                onChange={handleChange}
                name="username"
                id="username"
                value={cred.username}
                className="form-control mt-2"
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                id="password"
                value={cred.password}
                className="form-control mt-2"
              />
            </div>
            <Button id="submit">Submit</Button>
          </Form>
          {/* {error && <p id="error"> {error}</p>} */}
        </div>
      </Container>
    </div>
  );
};

export default Login;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 0px solid;
  color: black;
  margin-top: 1rem;

  background-color: #000;
  color: #ffffff;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 3px;
  height: 2em;
  padding-left: 24px;
  padding-right: 24px;

  :hover {
    background-color: rgb(13, 110, 253);
    border: 1px solid rgb(13, 110, 253);
    color: white;
  }
`;
