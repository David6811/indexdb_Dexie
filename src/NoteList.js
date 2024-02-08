import React, { useEffect } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./db";


function NoteList() {
  useEffect(() => {
    console.log("I am NoteList, loaded only once because I am within useEffect. Otherwise, I would load multiple times whenever each asynchronous function returns a value and updates the component that utilizes the value.");
  }, []);


  const notes = useLiveQuery(() => {
    return db.notes
      .where('status').equals(0)
      .reverse()
      .sortBy('updatedAt');
  });

  const handleDelete = (id) => {
    db.notes.delete(id);
  };

  const handleUpdate = (id) => {
    db.notes.update(id, { title: "Updated" }).then(function (updated) {
      if (updated)
        console.log("notes title was renamed to Updated");
      else
        console.log("Nothing was updated - there were no notes with primary key");
    });

  };

  const notesCount = useLiveQuery(() => db.notes.count());
  if (!notes || notesCount == undefined) return null;

  return (
    <div>
      <p>
        You have <b>{notesCount}</b> notes in total.
      </p>
      <ul>
        {notes.map((note) => (
          <li key={note.id} >
            <span style={{ width: '300px', display: 'inline-block' }}>{note.title}, {note.content}</span>
            <button style={{ marginRight: '10px' }} onClick={() => handleDelete(note.id)}>Delete</button>
            <button onClick={() => handleUpdate(note.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
