import React from "react";
import PropTypes from "prop-types";
import "./SideBar.css";

const SideBar = (props) => {
  return <div className="SideBar">{props.children}</div>;
};

SideBar.propTypes = {
  children: PropTypes.node,
};

export default SideBar;
