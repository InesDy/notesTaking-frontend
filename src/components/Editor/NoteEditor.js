import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, convertFromRaw, EditorState } from "draft-js";
import { draftToMarkdown, markdownToDraft } from "markdown-draft-js";

let afterTypingWaitTimer;

const NoteEditor = ({ noteText, onChange, selectedNote }) => {
  const className = `NoteEditor ${!selectedNote ? "NoteEditor_noNotes" : ""}`;

  const buildEditorState = (text) => {
    const rawData = markdownToDraft(text);
    const contentState = convertFromRaw(rawData);
    let newEditorState = EditorState.createWithContent(contentState);
    return newEditorState;
  };

  let initialState = noteText
    ? buildEditorState(noteText)
    : EditorState.createEmpty();

  const [editorState, updateEditorState] = useState(initialState);
  const [editorCursorPosition, updateEditorCursorPostition] = useState();

  const isInitialMount = useRef(true);

  const setPosition = () => {
    if (editorCursorPosition) {
      const newStateWithPosition = EditorState.forceSelection(
        editorState,
        editorCursorPosition
      );

      console.log("position", newStateWithPosition);

      updateEditorState(newStateWithPosition);
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const newEditorState = buildEditorState(noteText);

      updateEditorState(newEditorState);
      setPosition();
    }
  }, [noteText]); // eslint-disable-line

  const onEditorStateChange = (draftJsState) => {
    updateEditorState(draftJsState);

    clearTimeout(afterTypingWaitTimer);

    afterTypingWaitTimer = setTimeout(() => {
      const content = draftJsState.getCurrentContent();
      const rawDraftContentState = convertToRaw(content);
      const markDownAsText = draftToMarkdown(rawDraftContentState, {
        remarkablePreset: "commonmark",
        remarkableOptions: {
          html: true,
        },
      });

      const currentCursorPosition = draftJsState.getSelection();
      updateEditorCursorPostition(currentCursorPosition);

      onChange(markDownAsText);
    }, 1500);
  };

  return (
    <div className={className}>
      {selectedNote && (
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorStateChange}
          style={{ color: "white" }}
          //TOOLBAR
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { component: () => null },
            link: { inDropdown: true },
            history: { component: () => null },
            image: { component: () => null },
            embedded: { component: () => null },
            link: { component: () => null },
          }}
        />
      )}
      {!selectedNote && "No notes selected"}
    </div>
  );
};

NoteEditor.propTypes = {
  noteText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default NoteEditor;
