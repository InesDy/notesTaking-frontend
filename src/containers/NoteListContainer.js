import React, { useEffect, useState } from "react";
import Notes from "../components/Notes/Notes";

const NoteListContainer = ({
  selectedFolder,
  selectedNote,
  updateSelectedNote,
}) => {
  const [noteList, updateNoteList] = useState([]);
  const [fetchStatus, updateFetchStatus] = useState("IDLE");
  const token = localStorage.getItem("jwt");

  const updateSelectedNoteText = () => {
    const selectedNoteIndex = noteList.findIndex(
      (note) => selectedNote.id === note.id
    );
    const updatedNoteList = [...noteList];
    updatedNoteList[selectedNoteIndex].text = selectedNote.text;
    updateNoteList(noteList);
  };

  useEffect(() => {
    if (selectedNote) {
      updateSelectedNoteText();
    }
  }, [selectedNote]); // eslint-disable-line

  useEffect(() => {
    updateFetchStatus("STARTED");

    fetch(`http://localhost:1337/notes?folder=${selectedFolder.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((receivedNoteList) => {
        updateNoteList(receivedNoteList);
        updateFetchStatus("SUCCEED");
      })
      .catch((err) => {
        updateFetchStatus("FAILED");
        console.log(err);
      });
  }, [selectedFolder.id]); // eslint-disable-line

  //Optimistic rendering for UI
  const UpdateStateNote = (text) => {
    const newNote = [...noteList];
    const newID = new Date().toISOString();
    newNote.push({ text, id: newID });
    updateNoteList(newNote);
  };

  return (
    <div>
      {fetchStatus === "STARTED" && console.log("Loading notes...")}

      {fetchStatus === "SUCCEED" && (
        <Notes
          noteList={noteList}
          selectedNote={selectedNote}
          updateSelectedNote={updateSelectedNote}
          UpdateStateNote={UpdateStateNote}
        />
      )}
    </div>
  );
};

export default NoteListContainer;
