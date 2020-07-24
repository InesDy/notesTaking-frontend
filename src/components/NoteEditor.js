import React from 'react';
import PropTypes from 'prop-types';

const NoteEditor = (props) => {
    return (
        <div className="note-editor">
            {props.editor}
        </div>
    );
};

NoteEditor.propTypes = {
    editor: PropTypes.node,
};

export default NoteEditor;