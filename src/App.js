import React from "react";
import AppLayout from "./components/AppLayout/AppLayout";
import AuthenticatedContainer from "./containers/AuthenticatedContainer";
import "./App.css";

function App() {
  return (
    <AuthenticatedContainer>
      <AppLayout />
    </AuthenticatedContainer>
  );
}

export default App;

// return <>{loggedIn ? <AppLayout /> : <LoginPage />}</>;
