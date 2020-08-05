import React, { useState } from "react";

import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import AuthenticationPage from "../components/Authentication/AuthenticationPage";

import UserContext from '../context/userContext';

const AuthenticatedContainer = (props) => {
  let jwt = localStorage.getItem("jwt");
  let user = localStorage.getItem("user");

  if (user) {
    user = JSON.parse(user);
  }

  const [loginResult, setLoginResult] = useState({ jwt, user });

  return (
    <UserContext.Provider value={loginResult}>
      {loginResult.jwt && props.children}

      {!loginResult.jwt && (
        <AuthenticationPage>
          <LoginContainer setLoginResult={setLoginResult} />
          <RegisterContainer setLoginResult={setLoginResult} />
        </AuthenticationPage>
      )}
    </UserContext.Provider>
  );
};

export default AuthenticatedContainer;
