import React from "react";
import "./FolderList.css";

import FolderItem from '../FolderItem/FolderItem';

import NewFolderButtonContainer from '../../containers/NewFolderButtonContainer';

const FolderList = ({
  folders = [],
  selectedFolder,
  updateSelectedFolder,
  fetchFolders,
  deleteFolder,
}) => {
  return (
    <div className="FolderList">
      <NewFolderButtonContainer fetchFolders={fetchFolders} />
      {folders instanceof Array &&
        folders.map((folder) => (
          <FolderItem
            key={folder.id}
            folder={folder}
            selectedFolder={selectedFolder}
            updateSelectedFolder={updateSelectedFolder}
            deleteFolder={deleteFolder}
          />
        ))}
    </div>
  );
};

export default FolderList;
