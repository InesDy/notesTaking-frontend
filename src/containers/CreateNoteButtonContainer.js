import React, { useState } from "react";
// import NoteEditor from "../Editor/NoteEditor";
// import CreateIcon from "@material-ui/icons/Create";
import CreateNoteButton from "../components/CreateNoteButton/CreateNoteButton";

const CreateNoteButtonContainer = ({ updateNoteList, selectedFolder, updateSelectedNote }) => {
    const [buttonClicked, setButtonClicked] = useState();
    const [fetchStatus, updateFetchStatus] = useState("IDLE");
    const token = localStorage.getItem("jwt");

    const createNewNote = () => {
        updateFetchStatus("STARTED");

        fetch(`http://localhost:1337/notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                text: "",
                folder: selectedFolder.id
            }),
        })
            .then((response) => response.json())
            .then((note) => {
                debugger
                updateNoteList(() => updateSelectedNote(note));
                updateFetchStatus("SUCCEED");
            })
            .catch((err) => {
                updateFetchStatus("FAILED");
                console.log(err);
            });
    };

    return (
        <CreateNoteButton
            onClick={createNewNote}
        />
    );
};

export default CreateNoteButtonContainer;
