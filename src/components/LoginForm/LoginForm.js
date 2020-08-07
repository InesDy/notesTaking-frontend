import React from "react";

import Button from "@material-ui/core/Button";

import "./LoginForm.css";

const LoginForm = ({
  inputEmail,
  onInputEmailChange,
  fetching,
  inputPassword,
  onPasswordInputChange,
  onFormSubmit,
}) => (
  <div className="LoginForm_container">
    <div className="LoginForm_signIn">
      <form className="LoginForm_form">
        <h1 className="LoginForm_header">Sign in</h1>
        <hr className="LoginForm_hr" />
        <label>Email</label>
        <input
          className="LoginForm_input-email"
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
          label="Password"
          onChange={onPasswordInputChange}
          disabled={fetching}
        />

        <div style={{ marginTop: "50px" }}>
          <Button
            variant="contained"
            className="LoginPage_button"
            onClick={onFormSubmit}
          >
            Sign in
          </Button>
        </div>
      </form>
    </div>
  </div>
);

export default LoginForm;
