import React from "react";
import RegistrationPage from "./RegistrationPage";

import "./AuthenticationPage.css";

const AuthenticationPage = (props) => {
  return (
    <div className="AuthenticationPage">
      {props.children}
    </div>
  );
}

export default AuthenticationPage;
