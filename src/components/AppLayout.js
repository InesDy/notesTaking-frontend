import React from 'react';
import SideBar from './SideBar';
import NotesCategories from './NotesCategories';
import NoteCategoryLink from './NoteCategoryLink';
import TrashLink from './TrashLink';
import Notes from './Notes';
import NoteList from './NoteList';
import Note from './Note';
import NoteEditor from './NoteEditor';

const AppLayout = () => {
    return (
        <div className="app-layout">
            <SideBar>
                <NotesCategories>
                    <NoteCategoryLink>
                        non tague
                    </NoteCategoryLink>
                    <NoteCategoryLink>
                        todo
                    </NoteCategoryLink>
                    <NoteCategoryLink>
                        locked
                    </NoteCategoryLink>
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
        </div>
    );
}

export default AppLayout;