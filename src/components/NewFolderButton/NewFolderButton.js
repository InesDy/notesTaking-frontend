import React, { useState, useEffect } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import "./NewFolderButton.css";

const NewFolderButton = ({
    inputValue,
    showInputField,
    inputField,
    onSubmitHandler,
    onChangeInputField,
}) => (
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

export default NewFolderButton;
