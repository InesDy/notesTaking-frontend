import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout/AppLayout";

const AppLayoutContainer = ({ mockCategories, mockFolders }) => {
  const [categories, updateCategories] = useState(mockCategories);
  const [notes, updateNotes] = useState([]);
  const [selectedNote, updateSelectedNote] = useState(null);
  const [currentSideBarItem, setCurrentSideBarItem] = useState(null);
  const [folders, updateFolders] = useState(mockFolders);
  const [contentNote, updatedContentNote] = useState({});

  // Use for the NoteEditor.js
  const changeContentNote = (noteText) => {
    console.log("noteText", noteText);

    const title = noteText.split("\n")[0];

    const updateContent = {
      title: title,
      content: noteText,
    };
    updateSelectedNote({ ...selectedNote, ...updateContent });
  };

  //To know which note is selected
  const selectNote = (noteId) => {
    const note = notes.find((notes) => notes.id === noteId);
    console.log(note);
    console.log(notes);
    updateSelectedNote({ ...note });
  };

  /**To know which current folders is clicked on
   *in order to display its children- here the array of notes.
   */
  const handleItemClick = (item) => {
    setCurrentSideBarItem(item);
    if (item.notes) {
      updateNotes(item.notes);
    }
    console.log(item);
  };
  console.log("currentSideBarItem", currentSideBarItem);

  //Use in the NewFolderButton.js
  const addNewFolder = (newValue) => {
    updateFolders([...mockFolders, { title: newValue }]);
  };

  return (
    <AppLayout
      //General props
      folders={folders}
      selectNote={selectNote}
      mockCategories={categories}
      selectedNote={selectedNote}
      handleItemClick={handleItemClick}
      currentSideBarItem={currentSideBarItem}
      //NewFolderButton props
      addNewFolder={addNewFolder}
      //Editor props
      editor={selectedNote && selectedNote.text}
      contentNote={contentNote}
      changeContentNote={changeContentNote}
    />
  );
};

export default AppLayoutContainer;
