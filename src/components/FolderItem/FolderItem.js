import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

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

    {folder.name.toLowerCase() !== "trash" && (
      <div className="folder__actions">
        <DeleteIcon
          onClick={(event) => {
            event.stopPropagation();
            deleteFolder(folder.id);
          }}
        >
          Delete
        </DeleteIcon>
      </div>
    )}
  </div>
);

export default FolderItem;
