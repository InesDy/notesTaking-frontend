import React, { useState, useEffect } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
// import axios from "axios";
import "./NewFolderButton.css";

const NewFolderButton = ({ UpdateStateFolder }) => {
  const [inputField, showInputField] = useState(false);
  const [inputValue, changeInputValue] = useState("");
  const [fetchStatus, updateFetchStatus] = useState("IDLE");
  const token = localStorage.getItem("jwt");

  const onChangeInputField = (event) => {
    changeInputValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    showInputField(false);

    updateFetchStatus("STARTED");

    fetch(`http://localhost:1337/folders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: inputValue,
      }),
    })
      .then((response) => response.json())
      .then((folder) => {
        updateFetchStatus("SUCCEED");
        UpdateStateFolder(inputValue);
      })
      .catch((err) => {
        updateFetchStatus("FAILED");
        console.log(err);
      });
    changeInputValue("");
  };

  return (
    <div className="NewFolderButton">
      <AddCircleIcon
        className="NewFolderButton-button"
        onClick={() => showInputField(!inputField)}
      ></AddCircleIcon>
      {inputField ? (
        <div className="newFolderButton_input">
          <form onSubmit={onSubmitHandler}>
            <input
              type="text"
              placeholder="Name of the folder"
              value={inputValue}
              onChange={onChangeInputField}
            />
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default NewFolderButton;
