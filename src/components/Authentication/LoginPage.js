import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = ({ setLoginResult }) => {
  const [inputEmail, changeInputEmailValue] = useState("");
  const [inputPassword, changeInputPasswordValue] = useState("");
  const [fetching, setFetching] = useState(false);

  const onInputEmailChange = (event) => {
    changeInputEmailValue(event.target.value);
  };

  const onPasswordInputChange = (event) => {
    changeInputPasswordValue(event.target.value);
  };

  const onFormSubmit = (event) => {
    setFetching(true);

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/local/`, {
        identifier: inputEmail,
        password: inputPassword,
      })

      .then((response) => {
        //handle success
        console.log("Well done");
        // response.data.user;
        setLoginResult({ user: response.data.user, jwt: response.data.jwt });
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("jwt", response.data.jwt);
        setFetching(false);
      })

      .catch((error) => {
        console.log("An error has occured:", error.response);
      });
  };

  return (
    <div className="LoginPage_container">
      <div className="LoginPage_signIn">
        <form className="LoginPage_form">
          <h1 className="LoginPage_header">Sign in</h1>
          <hr className="LoginPage_hr" />
          <label>Email</label>
          <input
            className="LoginPage_input-email"
            type="email"
            value={inputEmail}
            label="User Name"
            onChange={onInputEmailChange}
            disabled={fetching}
          />

          <label>Password</label>
          <input
            type="password"
            value={inputPassword}
            type="password"
            label="Password"
            onChange={onPasswordInputChange}
            disabled={fetching}
          />
          <a>Forgot password?</a>
          <button
            className="LoginPage_button"
            onClick={onFormSubmit}
            disabled={fetching}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
