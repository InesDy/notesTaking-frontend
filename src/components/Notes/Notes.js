import React from "react";
import PropTypes from "prop-types";

import NotesCategories from "./NotesCategories";
import NoteList from "./NoteList";

import "./Notes.css";

const Notes = ({ currentSideBarItem }) => {
  const className = `Notes ${!currentSideBarItem ? "Notes_notSelected" : ""}`;

  return (
    <div className={className}>
      {currentSideBarItem && (
        <NoteList>
          <NotesCategories className="NoteCategories">
            {currentSideBarItem &&
              currentSideBarItem.notes.map((note) => {
                return (
                  <div className="NoteList-item">
                    <p>{note}</p>
                  </div>
                );
              })}
          </NotesCategories>
        </NoteList>
      )}

      {!currentSideBarItem && "Nothing selected"}
    </div>
  );
};

Notes.propTypes = {
  children: PropTypes.node,
  currentSideBarItem: PropTypes.any,
};

export default Notes;
