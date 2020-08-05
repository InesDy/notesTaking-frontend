import React from "react";
import "./FolderItem.css";
// import NewFolderButton from "./NewFolderButton";

import NewFolderButtonContainer from '../../containers/NewFolderButtonContainer';

const FolderItem = ({
  folders = [],
  selectedFolder,
  updateSelectedFolder,
  fetchFolders,
}) => {
  console.log(folders);
  return (
    <div className="FolderItem">
      <NewFolderButtonContainer fetchFolders={fetchFolders} />
      {folders instanceof Array &&
        folders.map((folder) => (
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
