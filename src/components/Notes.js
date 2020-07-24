import React from 'react';
import PropTypes from 'prop-types';

const Notes = (props) => {
    return (
        <div className="notes">
            {props.children}
        </div>
    );
};

Notes.propTypes = {
    children: PropTypes.node,
};

export default Notes;