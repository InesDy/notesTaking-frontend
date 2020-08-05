import React, { useState } from 'react';
import axios from 'axios';

import LoginForm from '../components/LoginForm/LoginForm';

const LoginContainer = ({ setLoginResult }) => {
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
            .post("http://localhost:1337/auth/local/", {
                identifier: inputEmail,
                password: inputPassword,
            })

            .then((response) => {
                setLoginResult({
                    user: response.data.user,
                    jwt: response.data.jwt
                });

                localStorage.setItem("user", JSON.stringify(response.data.user));
                localStorage.setItem("jwt", response.data.jwt);
                setFetching(false);
            })

            .catch((error) => {
                console.log("An error has occured:", error.response);
            });
    };

    return (
        <LoginForm
            inputEmail={inputEmail}
            onInputEmailChange={onInputEmailChange}
            fetching={fetching}
            inputPassword={inputPassword}
            onPasswordInputChange={onPasswordInputChange}
            onFormSubmit={onFormSubmit}
        />
    );
};

export default LoginContainer;
