import React from "react";
import PropTypes from "prop-types";

import "./NoteEditor.css";

const NoteEditor = (props) => {
  const className = `NoteEditor ${!props.editor ? "NoteEditor_noNotes" : ""}`;

  return (
    <div className={className}>
      {props.editor && props.editor}

      {!props.editor && "No notes selected"}
    </div>
  );
};

NoteEditor.propTypes = {
  editor: PropTypes.node,
};

export default NoteEditor;
