import React, { useState } from "react";
import NoteEditor from "../Editor/NoteEditor";
import CreateIcon from "@material-ui/icons/Create";

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
    <div>
      <CreateIcon></CreateIcon>
    </div>
  );
};

export default CreateNoteButton;
