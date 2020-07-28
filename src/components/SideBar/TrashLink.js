import React from 'react';
import PropTypes from 'prop-types';

const TrashLink = (props) => {
    return (
        <div className="trash-link">
            {props.children}
        </div>
    );
};

TrashLink.propTypes = {
    children: PropTypes.node,
};

export default TrashLink;