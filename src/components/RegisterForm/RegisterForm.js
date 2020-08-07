import React from "react";
import "./RegisterForm.css";
import Button from "@material-ui/core/Button";

const RegisterForm = ({
  inputField,
  showInputField,
  onInputUserChange,
  fetching,
  onInputEmailChange,
  onPasswordInputChange,
  onFormSubmit,
}) => (
  <div className="RegisterForm">
    <h1 className="RegisterForm_header"> Hi there,</h1>
    <hr className="RegisterForm_hr" />
    <p>
      Create your own space and start editing with{" "}
      <span className="RegisterForm_span">Write.</span>
    </p>
    {!inputField && (
      <div className="RegisterForm_button--RegisterNow">
        <Button onClick={() => showInputField(!inputField)} variant="contained">
          Register now!
        </Button>
      </div>
    )}

    {inputField ? (
      <div className="RegisterForm_form">
        <form>
          <label> Username</label>
          <input
            className="RegisterForm_input"
            type="text"
            label="UserName"
            onChange={onInputUserChange}
            disabled={fetching}
          />
          <label> Email</label>
          <input
            className="RegisterForm_input"
            type="email"
            label="email"
            onChange={onInputEmailChange}
            disabled={fetching}
          />
          <label> Password</label>
          <input
            className="RegisterForm_input"
            type="password"
            label="Password"
            onChange={onPasswordInputChange}
            disabled={fetching}
          />
          <div style={{ marginTop: "50px" }}>
            <Button
              className="RegisterForm_button"
              onClick={onFormSubmit}
              variant="contained"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    ) : null}
  </div>
);

export default RegisterForm;
