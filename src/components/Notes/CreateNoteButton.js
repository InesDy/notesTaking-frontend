import React, { useState } from "react";
import NoteEditor from "../Editor/NoteEditor";
import CreateIcon from "@material-ui/icons/Create";

const CreateNoteButton = ({ updateStateNote }) => {
  const [buttonClicked, setButtonClicked] = useState();
  const [fetchStatus, updateFetchStatus] = useState("IDLE");
  const token = localStorage.getItem("jwt");

  // const createNewNote = () => {
  //   updateFetchStatus("STARTED");

  //   fetch(`http://localhost:1337/notes`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({
  //       text: "",
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((folder) => {
  //       updateFetchStatus("SUCCEED");
  //       updateStateNote();
  //     })
  //     .catch((err) => {
  //       updateFetchStatus("FAILED");
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      <CreateIcon onClick={updateStateNote}></CreateIcon>
    </div>
  );
};

export default CreateNoteButton;
