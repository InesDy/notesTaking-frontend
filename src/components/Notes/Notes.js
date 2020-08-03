import React from "react";
// import CreateNoteButton from "../SideBar/2nd level/CreateNoteButton";
import "./Notes.css";

{
  /* <CreateNoteButton
            currentSideBarItem={currentSideBarItem}
          ></CreateNoteButton> */
}

const NoteList = ({ noteList, selectedNote, updateSelectedNote }) => {
  const className = `Notes ${!noteList ? "Notes_notSelected" : ""}`;

  return (
    <div className="NoteList">
      <div className={className}>
        {noteList &&
          noteList.map((note) => (
            <div
              className="Notes-item"
              key={note.id}
              onClick={() => updateSelectedNote(note)}
            >
              {!selectedNote && note.text.slice(0, 30) + "..."}
              {selectedNote &&
                selectedNote.id !== note.id &&
                note.text.slice(0, 50) + "..."}
              {selectedNote &&
                selectedNote.id === note.id &&
                selectedNote.text.slice(0, 50) + "..."}
            </div>
          ))}
        {!noteList && "Nothing selected"}
      </div>
    </div>
  );
};

export default NoteList;
