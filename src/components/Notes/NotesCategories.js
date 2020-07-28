import React from "react";
import PropTypes from "prop-types";
import "./NotesCategories.css";

//prop need caption

const NotesCategories = (props) => {
  return <div className="NotesCategories">{props.children}</div>;
};

NotesCategories.propTypes = {
  children: PropTypes.node,
};

export default NotesCategories;
