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

    if (selectedNoteIndex >= 0) {
      const updatedNoteList = [...noteList];
      updatedNoteList[selectedNoteIndex].text = selectedNote.text;
      updateNoteList(noteList);
    }
  };

  useEffect(() => {
    if (selectedNote) {
      updateSelectedNoteText();
    }
  }, [selectedNote]); // eslint-disable-line

  const fetchNoteList = (callBack) => {
    updateFetchStatus("STARTED");

    fetch(`http://localhost:1337/notes?folder=${selectedFolder.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((receivedNoteList) => {
        updateNoteList(receivedNoteList);
        if (typeof callBack === 'function') callBack();
        updateFetchStatus("SUCCEED");
      })
      .catch((err) => {
        updateFetchStatus("FAILED");
        console.log(err);
      });
  };

  useEffect(() => {
    fetchNoteList();
  }, [selectedFolder.id]); // eslint-disable-line

  return (
    <div>
      {fetchStatus === "STARTED" && console.log("Loading notes...")}

      {(fetchStatus === "SUCCEED" || noteList.length) && (
        <Notes
          selectedFolder={selectedFolder}
          noteList={noteList}
          selectedNote={selectedNote}
          updateSelectedNote={updateSelectedNote}
          updateNoteList={fetchNoteList}
        />
      )}
    </div>
  );
};

export default NoteListContainer;
