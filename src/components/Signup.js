import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import SignupSchema from "../validation/signupSchema";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const initialFormValues = {
    username: "",
    password: "",
  };
  //initial error state
  const initialFormErrors = {
    username: "",
    password: "",
  };
  
  const initialUsers = [];
  const initialDisabled = false;
  
  export default function Signup() {
    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
  
    const navigate = useNavigate();
  
    //validate the data coming into the input feilds using yup
    const validate = (name, value) => {
      yup
        .reach(SignupSchema, name)
        .validate(value)
        .then(() =>
          setFormErrors({
            ...formErrors,
            [name]: ""
          })
        )
        .catch(err =>
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0]
          })
        );
    };
    //function to detect change in input fields
    const inputChange = (name, value) => {
      validate(name, value);
      setFormValues({
        ...formValues,
        [name]: value
      });
    };
    //POST new user to heroku db
    const postNewUser = newUser => {
      axios.post("https://africas-market-place.herokuapp.com/api/auth/register", newUser)
          .then(res => {
            setUsers([res.data, ...users]);
            navigate('/login');
          })
          .catch(err => {
            console.log(err);
          })
          .finally(() => {
            setFormValues(initialFormValues);
          })
  
    };
    //Sign up button submit
    const signUpSubmit = () => {
      const newUser = {
        username: formValues.username.trim(),
        password: formValues.password.trim(),
      };
      postNewUser(newUser);
    };
  
    const onSubmit = e => {
      e.preventDefault();
      signUpSubmit();
    };
    const onChange = e => {
      const { name, value, checked, type } = e.target;
      const valueToUse = type === "checkbox" ? checked : value;
      inputChange(name, valueToUse);
    };

    useEffect(() => {
        SignupSchema.isValid(formValues).then((valid) => setDisabled(!valid));
      }, [formValues]);


    return (
      <div className="signup container">
        <Container>
        <h1>Sign Up</h1>
        <Form id="signup-form" onSubmit={onSubmit}>
          <div className="form-group submit">
            <div className="errors">
              <div>{formErrors.username}</div>
              <div>{formErrors.password}</div>
            </div>
          </div>
          <div className="form-group inputs">
              <input
                id="name-signup"
                type="text"
                value={formValues.username}
                onChange={onChange}
                name="username"
                placeholder='username'
                className="form-control mt-2"
              />
              <input
                id="password-signup"
                type="password"
                value={formValues.password}
                onChange={onChange}
                name="password"
                placeholder='password'
                className="form-control mt-2"
              />
          </div>
          <Button className="mt-2" type="submit" id="signupBtn" disabled={disabled}>
              Sign Up
            </Button>
        </Form>
        </Container>
      </div>
    );
  }
  
  