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


  // Optimistic rendering for UI
  const createNewNote = (text) => {
    if (noteList.find((note) => note.id === 'new')) return;

    const newNotesList = [...noteList];
    newNotesList.push({ text: '', id: 'new' });
    updateNoteList(newNotesList);
  };

  return (
    <div>
      {fetchStatus === "STARTED" && console.log("Loading notes...")}

      {fetchStatus === "SUCCEED" && (
        <Notes
          noteList={noteList}
          selectedNote={selectedNote}
          updateSelectedNote={updateSelectedNote}
          updateStateNote={createNewNote}
        />
      )}
    </div>
  );
};

export default NoteListContainer;
