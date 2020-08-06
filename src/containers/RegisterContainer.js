import React, { useState } from "react";
import axios from "axios";

import RegisterForm from '../components/RegisterForm/RegisterForm';

const RegisterContainer = ({ setLoginResult }) => {
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
        <RegisterForm
            inputField={inputField}
            showInputField={showInputField}
            onInputUserChange={onInputUserChange}
            fetching={fetching}
            onInputEmailChange={onInputEmailChange}
            onPasswordInputChange={onPasswordInputChange}
            onFormSubmit={onFormSubmit}
        />
    );
};

export default RegisterContainer;
