import React, { useState } from "react";
import AuthentificationPage from "../components/Authentication/AuthenticationPage";

const AuthenticatedContainer = (props) => {
  let jwt = localStorage.getItem("jwt");
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  }

  const [loginResult, setLoginResult] = useState({ jwt, user });

  return (
    <div>
      {loginResult.jwt && props.children}
      {!loginResult.jwt && (
        <AuthentificationPage setLoginResult={setLoginResult} />
      )}
    </div>
  );
};

export default AuthenticatedContainer;
