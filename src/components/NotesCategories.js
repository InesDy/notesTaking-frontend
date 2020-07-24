import React from 'react';
import PropTypes from 'prop-types';

const NotesCategories = (props) => {
    return (
        <div className="notes-categories">
            {props.children}
        </div>
    );
};

NotesCategories.propTypes = {
    children: PropTypes.node,
};

export default NotesCategories;
