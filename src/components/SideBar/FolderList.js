import React, { useContext } from "react";
import UserContext from "../../context/userContext";
import FolderItem from "../FolderItem/FolderItem";
import NewFolderButtonContainer from "../../containers/NewFolderButtonContainer";

import Button from "@material-ui/core/Button";

import "./FolderList.css";

const FolderList = ({
  folders = [],
  selectedFolder,
  updateSelectedFolder,
  fetchFolders,
  deleteFolder,
}) => {
  const loginResult = useContext(UserContext);
  return (
    <div className="FolderList">
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={loginResult.logOff}
          style={{ color: "rgba(255, 255, 255, 0.5)", justifySelf: "center" }}
          variant="outlined"
        >
          Log out
        </Button>
      </div>
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
