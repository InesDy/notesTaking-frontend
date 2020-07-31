import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import NotesCategories from "../Notes/NotesCategories";
import TrashLink from "../SideBar/TrashLink";
import Notes from "../Notes/Notes";
import NoteList from "../Notes/NoteList";
import Note from "../Notes/Note";
import NoteEditor from "../Editor/NoteEditor";
import SideBarItem from "../SideBar/SideBarItem";
import NewFolderButton from "../SideBar/newFolderButton";
import SearchBar from "../SideBar/SearchBar";

import Navigation from "../Navigation/Navigation";

import "./AppLayout.css";

const AppLayout = ({
  folders,
  handleItemClick,
  //generic
  currentSideBarItem,
  onSubmitHandler,
  selectedNote,
  selectNote,
  itemSelected,
  //specific
  addNewFolder,
  editor,
  contentNote,
  changeContentNote,
}) => {
  return (
    <div className="AppLayout">
      <SideBar>
        <Navigation
          itemSelected={itemSelected}
          folders={folders}
          handleItemClick={handleItemClick}
          addNewFolder={addNewFolder}
        />
        <NewFolderButton addNewFolder={addNewFolder} />
      </SideBar>

      <Notes
        className="Notes"
        currentSideBarItem={currentSideBarItem}
        selectNote={selectNote}
      />

      <NoteEditor
        onChange={changeContentNote}
        initialValue={contentNote.content}
        editor={editor}
        selectedNote={selectedNote}
      />
    </div>
  );
};

export default AppLayout;
