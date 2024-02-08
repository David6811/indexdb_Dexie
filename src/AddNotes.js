import { useState } from "react";
import React from 'react';
import { addNotes } from "./indexDB";


function AddNotes() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  console.log("I am AddNotes, loaded only once because there is no strict mode and no hook updating this component.");

  const handleClick = () => {
    const now = new Date();
    const createdAt = now;
    const updatedAt = now;
    addNotes("objectId", title, content, 0, createdAt, updatedAt);
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
