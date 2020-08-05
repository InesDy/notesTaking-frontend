import React, { useEffect, useState } from "react";
import FolderItem from "../components/SideBar/FolderItem";

// import fetchCategories from "../fakeFetch/fetchCategories";

const FoldersContainer = ({ selectedFolder, updateSelectedFolder }) => {
  const [folders, updateFolders] = useState([]);
  const [fetchStatus, updateFetchStatus] = useState("IDLE");
  const token = localStorage.getItem("jwt");

  const getUpdatedFolder = () => {
    updateFetchStatus("STARTED");

    fetch("http://localhost:1337/folders", {
      headers: {
        Authorization: `Bearer ${token}`,
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
    getUpdatedFolder();
  }, []);

  //Optimistic rendering for UI
  const UpdateStateFolder = (name) => {
    const newFolders = [...folders];
    const newID = new Date().toISOString();
    newFolders.push({ name, id: newID });
    updateFolders(newFolders);
  };

  return (
    <div>
      {fetchStatus === "STARTED" && <div>Loading folders...</div>}

      {fetchStatus === "SUCCEED" && (
        <FolderItem
          UpdateStateFolder={UpdateStateFolder}
          folders={folders}
          selectedFolder={selectedFolder}
          updateSelectedFolder={updateSelectedFolder}
        />
      )}
    </div>
  );
};

export default FoldersContainer;
