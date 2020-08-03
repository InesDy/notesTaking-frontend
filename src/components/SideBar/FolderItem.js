import React from "react";
import "./FolderItem.css";
import NewFolderButton from "./NewFolderButton";

const FolderItem = ({ folders, selectedFolder, updateSelectedFolder }) => {
  return (
    <div className="FolderItem">
      <NewFolderButton></NewFolderButton>
      {folders.map((folder) => (
        <div
          className="folder"
          key={folder.id}
          disabled={selectedFolder && selectedFolder.id === folder.id}
          onClick={() => updateSelectedFolder(folder)}
        >
          {folder.name}
        </div>
      ))}
    </div>
  );
};

export default FolderItem;
