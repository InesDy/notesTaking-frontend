import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout/AppLayout";

const AppLayoutContainer = ({ mockCategories, mockNotes, mockFolders }) => {
  const [categories, updateCategories] = useState(mockCategories);
  const [notes, updateNotes] = useState([]);
  const [selectedNote, updateSelectedNote] = useState(null);
  const [currentSideBarItem, setCurrentSideBarItem] = useState(null);
  const [folders, updateFolders] = useState(mockFolders);

  console.log("currentSideBarItem", currentSideBarItem);
  //   useEffect(() => {

  //   }, [])
  // addNewNote =(newData) => {
  //     const newArray = mockFolders;
  //     newArray.push(newData);
  //     setState(newArray);

  // }
  const selectNote = (noteId) => {
    const note = notes.find((notes) => notes.id === noteId);
    console.log(note);
    console.log(notes);
    updateSelectedNote({ ...note });
  };

  const handleItemClick = (item) => {
    setCurrentSideBarItem(item);
    if (item.notes) {
      updateNotes(item.notes);
    }
    console.log(item);
  };

  // useEffect(() => {
  //   updateFolders(mockFolders);
  // }, [mockFolders]);

  const addNewFolder = (newValue) => {
    updateFolders([...mockFolders, { title: newValue }]);
  };

  return (
    <AppLayout
      selectNote={selectNote}
      mockCategories={categories}
      notes={notes}
      selectedNote={selectedNote}
      editor={selectedNote && selectedNote.text}
      folders={folders}
      handleItemClick={handleItemClick}
      currentSideBarItem={currentSideBarItem}
      addNewFolder={addNewFolder}
    />
  );
};

export default AppLayoutContainer;
