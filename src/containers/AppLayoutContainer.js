import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';

import mockCategories from '../mock-data/note-categories';
import mockNotes from '../mock-data/notes';

const AppLayoutContainer = () => {
    const [ categories, updateCategories ] = useState(mockCategories);
    const [ notes, updateNotes ] = useState(mockNotes);
    const [ selectedNote, updateSelectedNote ] = useState(null);

    const selectNote = (noteId) => {
        const note = notes.find(note => note.id === noteId);

        updateSelectedNote({ ...note });
    };

    return (
        <AppLayout
            selectNote={selectNote}
            mockCategories={categories}
            notes={notes}
            editor={selectedNote && selectedNote.text}
        />
    );
}

export default AppLayoutContainer;
