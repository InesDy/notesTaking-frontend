import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, convertFromRaw, EditorState } from "draft-js";
import { draftToMarkdown, markdownToDraft } from "markdown-draft-js";

import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./NoteEditor.css";

let timer;

const NoteEditor = ({ selectedNote, initialValue = "", onChange }) => {
  const className = `NoteEditor ${!selectedNote ? "NoteEditor_noNotes" : ""}`;

  /**Initial state is determined with a if statement-  if there is a
   * note selected and this note has children then display  the content
   */
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

  /**Allows the change in the editor and keep the state after 3 seconds
   * The timer starts over when a new change is made
   * */
  const onEditorChange = (newEditorState) => {
    updateEditorState(newEditorState);
    const value = draftToMarkdown(
      convertToRaw(newEditorState.getCurrentContent())
    );

    clearTimeout(timer);

    timer = setTimeout(() => {
      console.log(newEditorState);
      onChange(value);
    }, 3000);
  };

  const [editorState, updateEditorState] = useState(initialEditorState);

  /**
   * On `selectedNote` prop change, re-init editor state
   * update everyytimne there is a change in the content of the current selected note and update it by mounting it again
   */
  useEffect(() => {
    if (selectedNote && selectedNote.content) {
      updateEditorState(
        EditorState.createWithContent(
          convertFromRaw(markdownToDraft(selectedNote.content))
        )
      );
    }
  }, [selectedNote]);

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
