import React, { useState } from "react";
import AppLayout from "./components/AppLayout/AppLayout";
import LoginPage from "./components/Authentication/LoginPage";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return <>{loggedIn ? <AppLayout /> : <LoginPage />}</>;
}

export default App;
