import React from "react";
import PropTypes from "prop-types";

import "./NoteEditor.css";

const NoteEditor = ({ selectedNote }) => {
  const className = `NoteEditor ${!selectedNote ? "NoteEditor_noNotes" : ""}`;

  return (
    <div className={className}>
      {selectedNote && (
        <div>
          <h4>{selectedNote.title}</h4>
          <p>{selectedNote.content}</p>
        </div>
      )}

      {!selectedNote && "No notes selected"}
    </div>
  );
};

NoteEditor.propTypes = {
  editor: PropTypes.node,
};

export default NoteEditor;
