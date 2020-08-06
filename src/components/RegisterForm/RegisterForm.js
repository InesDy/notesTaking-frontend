import React from "react";
import "./RegisterForm.css";

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
      <button
        className="RegisterForm_button--RegisterNow"
        onClick={() => showInputField(!inputField)}
      >
        Register now!
      </button>
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
          <button
            className="RegisterForm_button"
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

export default RegisterForm;
