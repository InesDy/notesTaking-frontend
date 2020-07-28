import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import NotesCategories from "./Notes/NotesCategories";
import TrashLink from "./SideBar/TrashLink";
import Notes from "./Notes/Notes";
import NoteList from "./Notes/NoteList";
import Note from "./Notes/Note";
import NoteEditor from "./NoteEditor";
import SideBarItem from "./SideBar/SideBarItem";
import NewFolderButton from "./SideBar/newFolderButton";
import SearchBar from "./SearchBar";

import Navigation from "./Navigation/Navigation";

import "./AppLayout.css";

const AppLayout = ({
  mockCategories,
  mockFolders: folders,
  notes,
  editor,
  handleItemClick,
  addNewFolder,
  currentSideBarItem,
}) => {
  return (
    <div className="AppLayout">
      <SideBar>
        <Navigation folders={folders} handleItemClick={handleItemClick} />

        <NewFolderButton addNewFolder={addNewFolder} />
      </SideBar>

      <Notes className="Notes" currentSideBarItem={currentSideBarItem} />

      <NoteEditor editor={editor} />
    </div>
  );
};

export default AppLayout;
