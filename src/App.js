import React, { useState } from "react";
import AppLayoutContainer from "./containers/AppLayoutContainer";
import mockCategories from "./mock-data/note-categories";
import mockNotes from "./mock-data/notes";
import mockFolders from "./mock-data/folders";
import LoginPage from "./components/LoginPage";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      {loggedIn ? (
        <AppLayoutContainer
          mockCategories={mockCategories}
          mockNotes={mockNotes}
          mockFolders={mockFolders}
        />
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default App;
