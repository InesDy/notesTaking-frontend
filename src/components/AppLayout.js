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

import "./AppLayout.css";

const AppLayout = ({
  mockCategories,
  mockFolders,
  notes,
  editor,
  handleItemClick,
  addNewFolder,
  currentSideBarItem,
}) => {
  console.log("mockFolders", mockFolders);
  return (
    <div className="AppLayout">
      <div className="AppLayout-SideBar">
        <SideBar>
          <div className="AppLayout-SideBarItem">
            {mockFolders.map((child) => {
              return (
                <div className="AppLayout-SidebarItem-single">
                  <SideBarItem data={child} handleItemClick={handleItemClick} />
                </div>
              );
            })}
          </div>
          <NewFolderButton />
        </SideBar>
      </div>

      <Notes className="Notes">
        {currentSideBarItem && (
          <div>
            <NoteList>
              <div className="NoteList">
                <NotesCategories>
                  {currentSideBarItem &&
                    currentSideBarItem.notes.map((note) => {
                      return (
                        <div className="NoteList-item">
                          <p>{note}</p>
                        </div>
                      );
                    })}
                </NotesCategories>
              </div>
            </NoteList>
          </div>
        )}
      </Notes>

      <div>
        <NoteEditor editor={editor} />
      </div>
    </div>
  );
};

export default AppLayout;
