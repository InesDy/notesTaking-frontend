import React, { useState } from "react";
import NoteEditor from "../Editor/NoteEditor";

const CreateNoteButton = () => {
  // create a selected functon ()for the button//onclick to add in the NoteEditor
  const [editor, showEditor] = useState(false);
  const [button, buttonClicked] = useState(null);

  const handleClick = (item) => {
    buttonClicked(item);
    console.log(item);
  };

  //   const addNewNote = (newValue) => {
  //     updateFolders([...mockFolders, { childItems: newValue }]);
  //   };

  return (
    <div className="CreateNoteButton">
      <button
        onClick={() => {
          showEditor(!editor);
          handleClick();
          // addNewNote();
        }}
      >
        Je suis un bouton
      </button>
      {editor ? <NoteEditor></NoteEditor> : null}
    </div>
  );
};

export default CreateNoteButton;
