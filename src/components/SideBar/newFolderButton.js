import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./NewFolderButton.css";

const NewFolderButton = ({ addNewFolder }) => {
  const [inputField, showInputField] = useState(false);
  const [inputValue, changeInputValue] = useState("");

  // const [folder, newFolder] = useState(true);

  const onChangeInputField = (event) => {
    // event.preventDefault();
    changeInputValue(event.target.value);
  };

  // const storeValue = () => {
  //   localStorage.setItem("name", inputValue);
  // };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    addNewFolder(inputValue);
    showInputField(false);
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
