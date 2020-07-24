import React from 'react';
import PropTypes from 'prop-types';

const NoteCategoryLink = (props) => {
    return (
        <div className="note-category-link">
            {props.children}
        </div>
    );
};

NoteCategoryLink.propTypes = {
    children: PropTypes.node,
};

export default NoteCategoryLink;