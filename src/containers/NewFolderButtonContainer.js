import React, { useState, useContext } from "react";

import NewFolderButton from '../components/NewFolderButton/NewFolderButton';
import UserContext from '../context/userContext';

const NewFolderButtonContainer = ({ fetchFolders }) => {
    const [inputField, showInputField] = useState(false);
    const [inputValue, changeInputValue] = useState("");
    const [fetchStatus, updateFetchStatus] = useState("IDLE");

    const loginResult = useContext(UserContext);

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
                Authorization: `Bearer ${loginResult.jwt}`,
            },
            body: JSON.stringify({
                name: inputValue,
            }),
        })
            .then((response) => response.json())
            .then((folder) => {
                updateFetchStatus("SUCCEED");
                fetchFolders();
            })
            .catch((err) => {
                updateFetchStatus("FAILED");
                console.log(err);
            });
        changeInputValue("");
    };

    return (
        <NewFolderButton
            inputValue={inputValue}
            showInputField={showInputField}
            inputField={inputField}
            onSubmitHandler={onSubmitHandler}
            onChangeInputField={onChangeInputField}
        />
    );
};

export default NewFolderButtonContainer;
