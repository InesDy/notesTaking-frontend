import React from 'react';

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
            <div className="folder__name">
                {folder.name}
            </div>

            {folder.name.toLowerCase() !== 'trash' && (
                <div className="folder__actions">
                    <button
                        onClick={(event) => {
                            event.stopPropagation();
                            deleteFolder(folder.id);
                        }}
                    >
                        Delete
                </button>
                </div>
            )}
        </div>
    )

export default FolderItem;
