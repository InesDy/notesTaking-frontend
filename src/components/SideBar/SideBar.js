import React from "react";
import PropTypes from "prop-types";
import "./SideBar.css";

const SideBar = (props) => {
  return (
    <div className="AppLayout-SideBar">
      <div className="SideBar">{props.children}</div>
    </div>
  );
};

SideBar.propTypes = {
  children: PropTypes.node,
};

export default SideBar;
