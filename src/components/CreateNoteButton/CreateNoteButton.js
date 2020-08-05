import React from "react";
import CreateIcon from "@material-ui/icons/Create";

const CreateNoteButton = ({ onClick }) => (
    <div>
        <CreateIcon onClick={onClick}></CreateIcon>
    </div>
);

export default CreateNoteButton;
