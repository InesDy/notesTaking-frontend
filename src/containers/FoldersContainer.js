import React, { useEffect, useState, useContext } from "react";
import FolderList from "../components/SideBar/FolderList";

import UserContext from '../context/userContext';

const FoldersContainer = ({ selectedFolder, updateSelectedFolder }) => {
  const [folders, updateFolders] = useState([]);
  const [fetchStatus, updateFetchStatus] = useState("IDLE");

  const loginResult = useContext(UserContext);

  const fetchFolders = () => {
    updateFetchStatus("STARTED");

    fetch(`${process.env.REACT_APP_BACKEND_URL}/folders`, {
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

  const deleteFolder = (folderId) => {
    updateFetchStatus("STARTED");

    fetch(`${process.env.REACT_APP_BACKEND_URL}/folders/${folderId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${loginResult.jwt}`,
      },
    })
      .then((response) => response.json())
      .then(() => {
        fetchFolders();
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
        <FolderList
          fetchFolders={fetchFolders}
          folders={folders}
          selectedFolder={selectedFolder}
          updateSelectedFolder={updateSelectedFolder}
          deleteFolder={deleteFolder}
        />
      )}

      <button onClick={loginResult.logOff}>Logout</button>
    </div>
  );
};

export default FoldersContainer;
