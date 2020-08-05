import React from "react";

import CreateNoteButtonContainer from "../../containers/CreateNoteButtonContainer";
import NoteItem from '../../components/NoteItem/NoteItem';

import "./Notes.css";

const Notes = ({
  noteList = [],
  selectedNote,
  updateSelectedNote,
  updateNoteList,
  selectedFolder,
  onDeleteButtonClick,
}) => {
  const className = `Notes ${!noteList ? "Notes_notSelected" : ""}`;

  return (
    <div className="NoteList">
      <div className={className}>
        <div className="NoteList_CreateNoteButton">
          <CreateNoteButtonContainer
            updateNoteList={updateNoteList}
            selectedFolder={selectedFolder}
            updateSelectedNote={updateSelectedNote}
          />
        </div>
        {noteList &&
          noteList.map((note) => (
            <NoteItem
              note={note}
              updateSelectedNote={updateSelectedNote}
              selectedNote={selectedNote}
              onDeleteButtonClick={onDeleteButtonClick}
            />
          ))}
        {!noteList && "Nothing selected"}
      </div>
    </div>
  );
};

export default Notes;
