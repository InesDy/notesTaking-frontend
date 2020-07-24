import React from 'react';
import PropTypes from 'prop-types';

const NoteEditor = () => {
    return (
        <div className="note-editor">
            Note Editor
        </div>
    );
};

NoteEditor.propTypes = {
    children: PropTypes.node,
};

export default NoteEditor;