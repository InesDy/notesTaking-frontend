import React from "react";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

const NoteItem = ({
  note,
  updateSelectedNote,
  selectedNote,
  onDeleteButtonClick,
}) => (
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

    <DeleteSweepIcon
      onClick={(event) => {
        event.stopPropagation();
        onDeleteButtonClick(note.id);
      }}
    >
      Delete
    </DeleteSweepIcon>
  </div>
);

export default NoteItem;
