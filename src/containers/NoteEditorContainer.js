import React, { useEffect, useState } from "react";
import NoteEditor from "../components/Editor/NoteEditor";

const NoteEditorContainer = ({ selectedNote, updateSelectedNote }) => {
  const [note, updateNote] = useState();
  const [fetchStatus, updateFetchStatus] = useState("IDLE");
  const [saveStatus, updateSaveStatus] = useState("IDLE");

  useEffect(() => {
    updateFetchStatus("STARTED");

    fetch(`http://localhost:1337/notes/${selectedNote.id}`)
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

    fetch(`http://localhost:1337/notes/${selectedNote.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
    <div>
      {fetchStatus === "STARTED" && <div>Loading note...</div>}

      <div>saveStatus: {saveStatus}</div>

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
