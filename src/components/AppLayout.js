import React from 'react';
import SideBar from './SideBar';
import NotesCategories from './NotesCategories';
import NoteCategoryLink from './NoteCategoryLink';
import TrashLink from './TrashLink';
import Notes from './Notes';
import NoteList from './NoteList';
import Note from './Note';
import NoteEditor from './NoteEditor';

const AppLayout = ({ mockCategories, notes, editor }) => {
    return (
        <div className="app-layout">
            <SideBar>
                <NotesCategories>
                    {mockCategories.map(({ id, caption, icon, to }) => (
                        <NoteCategoryLink
                            key={id}
                            icon={icon}
                            to={to}
                        >
                            {caption}
                        </NoteCategoryLink>
                    ))}
                </NotesCategories>

                <TrashLink />
            </SideBar>

            <Notes>
                <NoteList>
                    {notes.map(({ id, timeStamp, title, briefText }) => (
                        <Note
                            key={id}
                            timeStamp={timeStamp}
                            title={title}
                            briefText={briefText}
                        />
                    ))}
                </NoteList>
            </Notes>

            <NoteEditor editor={editor} />
        </div>
    );
}

export default AppLayout;
