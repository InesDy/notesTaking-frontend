import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";

const AppLayoutContainer = ({ mockCategories, mockNotes, mockFolders }) => {
  const [categories, updateCategories] = useState(mockCategories);
  const [notes, updateNotes] = useState(mockNotes);
  const [selectedNote, updateSelectedNote] = useState(null);
  const [currentSideBarItem, setCurrentSideBarItem] = useState(null);
  const [folder, updateFolders] = useState(mockFolders);

  console.log("currentSideBarItem", currentSideBarItem);
  //   useEffect(() => {

  //   }, [])
  // addNewNote =(newData) => {
  //     const newArray = mockFolders;
  //     newArray.push(newData);
  //     setState(newArray);

  // }
  const selectNote = (noteId) => {
    const note = notes.find((note) => note.id === noteId);

    updateSelectedNote({ ...note });
  };

  const handleItemClick = (item) => {
    setCurrentSideBarItem(item);
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
      editor={selectedNote && selectedNote.text}
      mockFolders={mockFolders}
      handleItemClick={handleItemClick}
      currentSideBarItem={currentSideBarItem}
      addNewFolder={addNewFolder}
    />
  );
};

export default AppLayoutContainer;
