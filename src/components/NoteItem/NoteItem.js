import React from "react";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import "./NoteItem.css";

const NoteItem = ({
  note,
  updateSelectedNote,
  selectedNote,
  onDeleteButtonClick,
}) => {
  return (
    <div
      className={note === selectedNote ? "Notes-item--active" : "Notes-item"}
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
        style={{ fontSize: "18px", marginLeft: "80%", position: "absolute" }}
        onClick={(event) => {
          event.stopPropagation();
          onDeleteButtonClick(note.id);
        }}
      >
        Delete
      </DeleteSweepIcon>
    </div>
  );
};
export default NoteItem;
