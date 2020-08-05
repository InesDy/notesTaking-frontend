import React from "react";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";

import "./AuthentificationPage.css";

function AuthentificationPage({ setLoginResult }) {
  return (
    <div className="AuthentificationPage">
      <LoginPage setLoginResult={setLoginResult} />
      <RegistrationPage setLoginResult={setLoginResult} />
    </div>
  );
}

export default AuthentificationPage;
