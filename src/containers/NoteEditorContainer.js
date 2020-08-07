import React, { useEffect, useState } from "react";
import NoteEditor from "../components/Editor/NoteEditor";

const NoteEditorContainer = ({ selectedNote, updateSelectedNote }) => {
  const [note, updateNote] = useState();
  const [fetchStatus, updateFetchStatus] = useState("IDLE");
  const [saveStatus, updateSaveStatus] = useState("IDLE");
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    updateFetchStatus("STARTED");

    fetch(`${process.env.REACT_APP_BACKEND_URL}/notes/${selectedNote.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((receivedNote) => {
        console.log(receivedNote);
        updateNote(receivedNote);
        updateFetchStatus("SUCCEED");
      })
      .catch((err) => {
        updateFetchStatus("FAILED");
        console.log(err);
      });
  }, [selectedNote.id]); // eslint-disable-line

  const onEditorChange = (text) => {
    updateSelectedNote({
      ...selectedNote,
      text,
    });

    updateSaveStatus("STARTED");

    fetch(`${process.env.REACT_APP_BACKEND_URL}/notes/${selectedNote.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...selectedNote,
        text,
      }),
    })
      .then((response) => response.json())
      .then((receivedNote) => {
        updateSaveStatus("SUCCEED");
      })
      .catch((err) => {
        updateSaveStatus("FAILED");
        console.log(err);
      });
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(45,45,45)",
        borderLeft: "solid 1.8px rgba(255, 255, 255, 0.2)",
      }}
    >
      {fetchStatus === "STARTED" && console.log("Loading note...")}

      {fetchStatus === "SUCCEED" && (
        <NoteEditor
          key={note.id}
          noteText={note.text}
          onChange={onEditorChange}
          selectedNote={selectedNote}
        />
      )}
    </div>
  );
};

export default NoteEditorContainer;
