import React, { useState } from "react";
import axios from "axios";
import "./RegistrationPage.css";

const RegistrationPage = () => {
  const [inputUser, changeInputUser] = useState("");
  const [inputEmail, changeInputEmailValue] = useState("");
  const [inputPassword, changeInputPasswordValue] = useState("");
  const [fetching, setFetching] = useState(false);
  const [inputField, showInputField] = useState(false);

  const onInputUserChange = (event) => {
    changeInputUser(event.target.value);
  };

  const onInputEmailChange = (event) => {
    changeInputEmailValue(event.target.value);
  };

  const onPasswordInputChange = (event) => {
    changeInputPasswordValue(event.target.value);
  };

  const onFormSubmit = (event) => {
    setFetching(true);

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/local/register`, {
        username: inputUser,
        email: inputEmail,
        password: inputPassword,
      })

      .then((response) => {
        //handle success
        console.log("Well done");
        response.data.user();
        setFetching(false);
      })

      .catch((error) => {
        console.log("An error has occured:", error.response);
      });
  };

  return (
    <div className="RegistrationPage">
      <h1 className="RegistrationPage_header"> Hi there,</h1>
      <hr className="RegistrationPage_hr" />
      <p>
        Create your own space and start editing with <span>Write.</span>
      </p>
      {!inputField && (
        <button
          className="RegistrationPage_button--RegisterNow"
          onClick={() => showInputField(!inputField)}
        >
          Register now!
        </button>
      )}

      {inputField ? (
        <div className="RegistrationPage_form">
          <form>
            <label> Username</label>
            <input
              className="RegistrationPage_input"
              type="text"
              label="UserName"
              onChange={onInputUserChange}
              disabled={fetching}
            />
            <label> Email</label>
            <input
              className="RegistrationPage_input"
              type="email"
              label="email"
              onChange={onInputEmailChange}
              disabled={fetching}
            />
            <label> Password</label>
            <input
              className="RegistrationPage_input"
              type="password"
              label="Password"
              onChange={onPasswordInputChange}
              disabled={fetching}
            />
            <button
              className="RegistrationPage_button"
              onClick={onFormSubmit}
              disabled={fetching}
            >
              Sign Up
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default RegistrationPage;
