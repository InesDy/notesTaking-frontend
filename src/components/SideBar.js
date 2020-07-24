import React from 'react';
import PropTypes from 'prop-types';

const SideBar = (props) => {
    return (
        <div className="side-bar">
            {props.children}
        </div>
    );
};

SideBar.propTypes = {
    children: PropTypes.node,
};

export default SideBar;
