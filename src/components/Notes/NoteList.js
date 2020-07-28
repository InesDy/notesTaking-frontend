import React from 'react';
import PropTypes from 'prop-types';

const NotesList = (props) => {
    return (
        <div className="notes-list">
            {props.children}
        </div>
    );
};

NotesList.propTypes = {
    children: PropTypes.node,
};

export default NotesList;