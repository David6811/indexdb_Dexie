import { useState } from "react";
import React from 'react';
import { addNotes } from "./indexDB";
import { queryNotes } from "./parseComponents/parse";


function AddNotes() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  console.log("I am AddNotes, loaded only once because there is no strict mode and no hook updating this component.");

  const addNewResults = (result) => {
    result.forEach((parseNote) => {
      console.log('Id:', parseNote.id);
      console.log('Title:', parseNote.get('title'));
      console.log('content:', parseNote.get('content'));
      console.log('status:', parseNote.get('status'));
      console.log('createdAt:', parseNote.createdAt);
      console.log('updatedAt:', parseNote.updatedAt);
      const objectId = parseNote.id;
      const title = parseNote.get('title');
      const content = parseNote.get('content');
      const status = parseNote.get('status');
      const createdAt = parseNote.get('createdAt');
      const updatedAt = parseNote.get('updatedAt');


      addNotes(objectId,title,content,status,createdAt,updatedAt);
    });
  }

  const handleClick = () => {
    queryNotes("Notes", "", 1, 100, addNewResults);
    const now = new Date();
    const createdAt = now;
    const updatedAt = now;
    // addNotes("objectId", title, content, 0, createdAt, updatedAt);
  };

  return (
    <div>
      Title:
      <input
        type="text"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      Content:
      <input
        type="text"
        value={content}
        onChange={(ev) => setContent(ev.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default AddNotes;
