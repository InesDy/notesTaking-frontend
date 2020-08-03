import React, { useEffect, useState } from "react";
import FolderItem from "../components/SideBar/FolderItem";

// import fetchCategories from "../fakeFetch/fetchCategories";

const FoldersContainer = ({ selectedFolder, updateSelectedFolder }) => {
  const [folders, updateFolders] = useState([]);
  const [fetchStatus, updateFetchStatus] = useState("IDLE");

  useEffect(() => {
    updateFetchStatus("STARTED");

    fetch("http://localhost:1337/folders")
      .then((response) => response.json())
      .then((receivedFolders) => {
        updateFolders(receivedFolders);
        updateFetchStatus("SUCCEED");
      })
      .catch((err) => {
        updateFetchStatus("FAILED");
        console.log(err);
      });
  }, []); // eslint-disable-line

  return (
    <div>
      {fetchStatus === "STARTED" && <div>Loading folders...</div>}

      <div style={{ color: "white" }}>fetch Status: {fetchStatus}</div>

      {fetchStatus === "SUCCEED" && (
        <FolderItem
          style={{ background: "blue" }}
          folders={folders}
          selectedFolder={selectedFolder}
          updateSelectedFolder={updateSelectedFolder}
        />
      )}
    </div>
  );
};

export default FoldersContainer;
