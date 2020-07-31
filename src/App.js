import React, { useState } from "react";
import AppLayoutContainer from "./containers/AppLayoutContainer";
import mockCategories from "./mock-data/note-categories";
import mockFolders from "./mock-data/folders";
import LoginPage from "./components/Authentication/LoginPage";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      {loggedIn ? (
        <AppLayoutContainer
          mockCategories={mockCategories}
          mockFolders={mockFolders}
        />
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default App;
