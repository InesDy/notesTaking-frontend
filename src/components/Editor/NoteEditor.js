import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, convertFromRaw, EditorState } from "draft-js";
import { draftToMarkdown, markdownToDraft } from "markdown-draft-js";

import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./NoteEditor.css";

const NoteEditor = ({ selectedNote, initialValue = "", onChange }) => {
  const className = `NoteEditor ${!selectedNote ? "NoteEditor_noNotes" : ""}`;

  let initialEditorState;
  if (selectedNote && selectedNote.content) {
    initialEditorState = EditorState.createWithContent(
      convertFromRaw(markdownToDraft(selectedNote.content))
    );
  } else {
    initialEditorState = EditorState.createWithContent(
      convertFromRaw(markdownToDraft(initialValue))
    );
  }

  const onEditorChange = (newEditorState) => {
    updateEditorState(newEditorState);
    const value = draftToMarkdown(
      convertToRaw(newEditorState.getCurrentContent())
    );
    console.log(newEditorState);
    // onChange(value);
  };

  const [editorState, updateEditorState] = useState(initialEditorState);

  // const onEditorStateChange = (newEditorState) => {
  //   updateEditorState(newEditorState);
  //   const value = draftToMarkdown(
  //     convertToRaw(newEditorState.getCurrentContent())
  //   );
  //   onChange(value);
  //   console.log(newEditorState);
  // };

  return (
    <div className={className}>
      {selectedNote && (
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorChange}
        />
      )}

      {!selectedNote && "No notes selected"}
    </div>
  );
};

NoteEditor.propTypes = {
  editor: PropTypes.node,
};

export default NoteEditor;

// <h4>{selectedNote.title}</h4>
// <p>{selectedNote.content}</p>
