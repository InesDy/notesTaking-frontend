import React from 'react';

import './LoginForm.css';

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
                    <span>Forgot password?</span>
                    <button
                        className="LoginForm_button"
                        onClick={onFormSubmit}
                        disabled={fetching}
                    >
                        Sign in
          </button>
                </form>
            </div>
        </div>
    );

export default LoginForm;
