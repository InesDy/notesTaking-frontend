import React, { useEffect, useState, useContext } from "react";
import FolderItem from "../components/SideBar/FolderItem";

import UserContext from '../context/userContext';

const FoldersContainer = ({ selectedFolder, updateSelectedFolder }) => {
  const [folders, updateFolders] = useState([]);
  const [fetchStatus, updateFetchStatus] = useState("IDLE");

  const loginResult = useContext(UserContext);

  const fetchFolders = () => {
    updateFetchStatus("STARTED");

    fetch("http://localhost:1337/folders", {
      headers: {
        Authorization: `Bearer ${loginResult.jwt}`,
      },
    })
      .then((response) => response.json())
      .then((receivedFolders) => {
        updateFolders(receivedFolders);
        updateFetchStatus("SUCCEED");
      })
      .catch((err) => {
        updateFetchStatus("FAILED");
        console.log(err);
      });
  };

  useEffect(() => {
    fetchFolders();
  }, []); // eslint-disable-line


  return (
    <div>
      {/* {fetchStatus === "STARTED" && <div>Loading folders...</div>} */}

      {(fetchStatus === "SUCCEED" || folders.length) && (
        <FolderItem
          fetchFolders={fetchFolders}
          folders={folders}
          selectedFolder={selectedFolder}
          updateSelectedFolder={updateSelectedFolder}
        />
      )}
    </div>
  );
};

export default FoldersContainer;
