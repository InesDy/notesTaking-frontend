import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./FolderItem.css";

const isNotTrashOrGeneral = (folderName) =>
  folderName.toLowerCase() !== "trash" &&
  folderName.toLowerCase() !== "general";

const FolderItem = ({
  folder,
  selectedFolder,
  updateSelectedFolder,
  deleteFolder,
}) => (
  <div
    className="folder"
    key={folder.id}
    disabled={selectedFolder && selectedFolder.id === folder.id}
    onClick={() => updateSelectedFolder(folder)}
  >
    <div className="folder__name">{folder.name}</div>

    {isNotTrashOrGeneral(folder.name) && (
      <div>
        <DeleteIcon
          style={{
            fontSize: "18px",
            position: "absolute",
            alignSelf: "flex-end",
          }}
          onClick={(event) => {
            event.stopPropagation();
            deleteFolder(folder.id);
          }}
        ></DeleteIcon>
      </div>
    )}
  </div>
);

export default FolderItem;
