import React from 'react';

const NoteItem = ({
    note,
    updateSelectedNote,
    selectedNote,
    onDeleteButtonClick,
}) => (
        <div
            className="Notes-item"
            key={note.id}
            onClick={() => updateSelectedNote(note)}
        >
            {!selectedNote && note.text.slice(0, 30) + "..."}

            {selectedNote &&
                selectedNote.id !== note.id &&
                note.text.slice(0, 50) + "..."
            }

            {selectedNote &&
                selectedNote.id === note.id &&
                selectedNote.text.slice(0, 50) + "..."
            }

            <button
                onClick={(event) => {
                    event.stopPropagation();
                    onDeleteButtonClick(note.id);
                }}
            >
                Delete
            </button>
        </div>
    );

export default NoteItem;
