import React, { useState } from "react";
import FoldersContainer from "../../containers/FoldersContainer";
import NoteEditorContainer from "../../containers/NoteEditorContainer";
import NoteListContainer from "../../containers/NoteListContainer";

import "./AppLayout.css";

const AppLayout = () => {
  const [selectedFolder, updateSelectedFolder] = useState();
  const [selectedNote, updateSelectedNote] = useState();

  const handleUpdateSelectedFolder = (selectedFolder) => {
    updateSelectedNote();
    updateSelectedFolder(selectedFolder);
  };
  return (
    <div className="AppLayout">
      <FoldersContainer
        className="FoldersContainer"
        selectedFolder={selectedFolder}
        updateSelectedFolder={handleUpdateSelectedFolder}
      />

      {selectedFolder && (
        <NoteListContainer
          className="NoteListContainer"
          selectedFolder={selectedFolder}
          selectedNote={selectedNote}
          updateSelectedNote={updateSelectedNote}
        />
      )}

      {selectedNote && (
        <NoteEditorContainer
          className="NoteEditorContainer"
          selectedNote={selectedNote}
          updateSelectedNote={updateSelectedNote}
        />
      )}
    </div>
  );
};

export default AppLayout;
