import React from 'react';

const state = {
    selectedNoteCategory: "01",

    notesCategories: [
        {
            id: "01",
            caption: "non tague",
            icon: "inbox",
            to: "/nontague",
        },
        {
            id: "02",
            caption: "todo",
            icon: "checkbox",
            to: "/todo",
        },
        {
            id: "03",
            caption: "locked",
            icon: "lock",
            to: "/locked",
        },
        {
            id: "04",
            caption: "trash",
            icon: "trash",
            to: "/trash",
        },
    ],

    searchValue: null,
    selectedNote: "01",

    notes: [
        {
            id: "01",
            timeStamp: "13m",
            title: "#yo",
            briefText: "someText",
        },
        {
            id: "02",
            timeStamp: "2d",
            title: "#ndfksf",
            briefText: "ndf",
        },
    ],

    editor: "#Yo\n supercool",
};

const mockApp = (
    <AppLayout>
        <SideBar>
            <NotesCategories>
                <NoteCategoryLink />
                <NoteCategoryLink />
                <NoteCategoryLink />
                <NoteCategoryLink />
            </NotesCategories>

            <TrashLink />
        </SideBar>

        <Notes>
            <NoteList>
                <Note />
                <Note />
                <Note />
                <Note />
            </NoteList>
        </Notes>

        <NoteEditor />
    </AppLayout>
);
