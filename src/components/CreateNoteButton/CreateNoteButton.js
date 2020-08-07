import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./CreateNoteButton.css";

const CreateNoteButton = ({ onClick }) => (
  <div className="CreateNoteButton">
    <CreateIcon onClick={onClick}></CreateIcon>
  </div>
);

export default CreateNoteButton;
